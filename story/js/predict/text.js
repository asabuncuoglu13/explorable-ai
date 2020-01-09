$.getJSON("./js/predict/data/learn_todos.json", function (data) {
    let learnTodos = [];
    $(data).each(function (idx, obj) {
        $(obj).each(() => {
            learnTodos.push("<div>" + obj.text + "</div>");
        });
    });
    $(learnTodos.join("")).appendTo("#left-rollbacks");
});

$.getJSON("./js/predict/data/exercise_todos.json", function (data) {
    let exTodos = [];
    $(data).each(function (idx, obj) {
        $(obj).each(() => {
            exTodos.push("<div>" + obj.text + "</div>");
        });
    });
    $(exTodos.join("")).appendTo("#right-rollbacks");
});

const MODEL_NAME = "suggestion-model";
const N_CLASSES = 2;

async function encodeData(encoder, tasks) {
    const sentences = tasks.map(t => t.text.toLowerCase());
    const embeddings = await encoder.embed(sentences);
    return embeddings;
};

async function trainModel(encoder) {
    try {
        const loadedModel = await tf.loadLayersModel(
            `localstorage://${MODEL_NAME}`
        );
        console.log("Using existing model");
        return loadedModel;
    } catch (e) {
        console.log("Training new model");
    }

    const xTrain = await encodeData(encoder, trainTasks);

    const yTrain = tf.tensor2d(
        trainTasks.map(t => [t.icon === "BOOK" ? 1 : 0, t.icon === "RUN" ? 1 : 0])
    );

    const model = tf.sequential();

    model.add(
        tf.layers.dense({
            inputShape: [xTrain.shape[1]],
            activation: "softmax",
            units: N_CLASSES
        })
    );

    model.compile({
        loss: "categoricalCrossentropy",
        optimizer: tf.train.adam(0.001),
        metrics: ["accuracy"]
    });

    const lossContainer = document.getElementById("loss-cont");

    await model.fit(xTrain, yTrain, {
        batchSize: 32,
        validationSplit: 0.1,
        shuffle: true,
        epochs: 150,
        callbacks: tfvis.show.fitCallbacks(
            lossContainer,
            ["loss", "val_loss", "acc", "val_acc"],
            {
                callbacks: ["onEpochEnd"]
            }
        )
    });

    await model.save(`localstorage://${MODEL_NAME}`);

    return model;
};

const suggestIcon = async (model, encoder, taskName, threshold) => {
    if (!taskName.trim().includes(" ")) {
        return null;
    }
    const xPredict = await encodeData(encoder, [{text: taskName}]);

    const prediction = await model.predict(xPredict).data();

    if (prediction[0] > threshold) {
        return "BOOK";
    } else if (prediction[1] > threshold) {
        return "RUN";
    } else {
        return null;
    }
};
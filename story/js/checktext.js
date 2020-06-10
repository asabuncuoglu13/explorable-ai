const threshold = 0.9;

/*
function checkToxicity(text) {
    toxicity.load(threshold).then(model => {

        model.classify([text]).then(predictions => {
            console.log(predictions);
        });
    });
}
*/

function responseWithTextFirstQuestion(id, text) {
    document.getElementById(id).innerHTML = "Hello! I am not sure what '<span class='inner_text'>" + text + "</span>' means. My developer did not load me an AI model to understand the text. Maybe you can teach me! Would you like to add some intelligence to me?";
    setTimeout(function () { addContinueButton() }, 1000);
}

function addContinueButton() {
    $("#cont_btns").show();

    document.getElementById('yes_btn').addEventListener('click', function () {
        $("#cont_btns").hide();
        $("#2").show();
    });

    document.getElementById('no_btn').addEventListener('click', function () {
        $("#cont_btns").hide();
        $("#3").show();
        setTimeout(function () { $("#good_bye").show(); }, 5000);
    });
}

function checkAnswer(){
    var instance = M.FormSelect.getInstance(elem);
    console.log(instance.getSelectedValues());
}




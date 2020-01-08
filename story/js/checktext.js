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

function responseWithText(id, text) {
    document.getElementById(id).innerHTML = "Hello! I am not sure what '<span class='inner_text'>" + text + "</span>' means. My developer did not load me an AI model to understand the text. Maybe you can teach me! Would you like to add some intelligence to me?";
    setTimeout(function () { addContinueButton() }, 1000);
}

function addContinueButton() {
    $("#1").append("<p id='cont_btns' width='60%'><a id='yes_btn'> Yes </a> <a id='no_btn'> No </a></p>");

    document.getElementById('yes_btn').addEventListener('click', function () {
        $("#1").append("<p class='small_text'>Thanks! First, you need to know that I am hungry to data. To teach me I need to see many data as possible. Let's start with some text data.</p>");
        $("#cont_btns").hide();
    });

    document.getElementById('no_btn').addEventListener('click', function () {
        $("#1").append("<p class='small_text'>I am sorry to hear that... My plan for conquering the eart has failed... But, I will make you a last favor. Here are the Google Search results for AI. Maybe, you would like to learn some:</p>");
        $("#cont_btns").hide();
        addResultCards();
    });
}

function addResultCards() {
    $('#1').append('<div class="card">' +
        '<a href="https://www.britannica.com/technology/artificial-intelligence"><u>Britannica:</u></a>' +
        '<p class="small_text">Artificial intelligence (AI), the ability of a digital computer or computer-controlled robot to perform tasks commonly associated with intelligent beings.</p>' +
        '</div>');

    $('#1').append('<div class="card">' +
        '<a href="https://en.wikipedia.org/wiki/Artificial_intelligence"><u>Wikipedia:</u></a>' +
        '<p class="small_text">In computer science, artificial intelligence (AI), sometimes called machine intelligence, is intelligence demonstrated by machines, in contrast to the natural intelligence displayed by humans.</p>' +
        '</div>');
}




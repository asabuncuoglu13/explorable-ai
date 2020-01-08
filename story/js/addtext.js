$(document).ready(function () {
    var wrapper = $(".text_field_container");
    var add_button = $(".add_text_btn");

    $(add_button).click(function (e) {
        e.preventDefault();
        $(wrapper).append('<div class="horizontal_align"><input type="text" name="mytext[]"/><a href="#2" class="delete"><img src="./media/close_white.png" class="add_text"></a></div>'); //add input box
    });

    $(wrapper).on("click", ".delete", function (e) {
        e.preventDefault();
        $(this).parent('div').remove();
    })
});
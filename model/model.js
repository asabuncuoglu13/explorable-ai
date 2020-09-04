if (!String.prototype.format) {
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}

// Format (dur, title, exp, link)
const _module_tr_table_card =
    "<div class='card item'>\n" +
    "<div class='card-content white-text'>\n" +
    "<p class='info'>Önerilen Süre: {0} saat</p>\n" +
    "<h2 class='inner-title'>{1}</h2>\n" +
    "<p class='inner-text'>{2}</p>\n" +
    "\n" +
    "<a class='card-link' href='{3}'>İçeriği ziyaret et</a>\n" +
    "</div>\n" +
    "</div>\n";

// Format (dur, title, exp, link)
const _module_en_table_card =
    "<div class='card item'>\n" +
    "<div class='card-content white-text'>\n" +
    "<p class='info'>Recommended time: {0} hour</p>\n" +
    "<h2 class='inner-title'>{1}</h2>\n" +
    "<p class='inner-text'>{2}</p>\n" +
    "\n" +
    "<a class='card-link' href='{3}'>Visit the content</a>\n" +
    "</div>\n" +
    "</div>\n";
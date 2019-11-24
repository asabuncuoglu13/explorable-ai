var isTR = false;

const page_title_en = "Playing with Data";
const page_title_tr = "Verilerle Oynayalım";

const translate_button_en = "Türkçe Görüntüle";
const translate_button_tr = "View in English";

const page_explanation_en = 'We aimed to design a simple interface to teach you basics of data manipulation.' +
    'It is a step-by-step guide to collect, manipulate and interpret different data sources.';
const page_explanation_tr = 'Bu sayfa çeşitli deneyler tasarlaman, teknolojik cihazların çeşitli özelliklerini keşfetmen ve eğlenceli aktiviteleri tamamlaman için özel olarak tasarlandı.' +
    'Senin için birkaç aktivite derledik, bu aktiviteleri adım adım tamamlayarak, bilimin farklı alanlarında bilgiler edinebilir ve programlama deneyimi elde edebilirsin.';


function translate() {
    translateHTML('page_title', page_title_en, page_title_tr);
    translateHTML('translate_button', translate_button_en, translate_button_tr);
    translateHTML('page_explanation', page_explanation_en, page_explanation_tr);
    isTR = !isTR;
}


function translateHTML(id, en, tr) {
    if (isTR) {
        document.getElementById(id).innerHTML = en;
    } else {
        document.getElementById(id).innerHTML = tr;
    }
}
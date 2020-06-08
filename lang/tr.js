// Home Page

const _home_title = "Yapay Zekayı Keşdefelim";
const _home_sub = "Twin Bilim içerik ekibinin UCL-EDUCATE partnerliği ile açık kaynak geliştirdiği ortaokullar için yapay zeka müfredatının tüm kaynaklarına ulaşın.";
const _card_why_title = "Bu Müfredatı Neden ve Nasıl Geliştirdik?";
const _card_twing_title = "Twing ile Yapay Zeka Dersleri";
const _card_twing_sub = "Twing uygulaması ve diğer birçok etkileşimli içeriği kullanarak adım adım yapay zeka içeriğimizin üzerinden geçtik";
const _card_project_form = "Sene Sonu Proje Formu ve Örneği";
const _card_interactive_content = "Tüm Etkileşimli İçeriklerin Listesini Görün";
const _card_learning_goals = "İçerik ve Öğrenme Hedefleri Özeti";
const _card_ml4kids = "Scratch Arayüzüne Makine Öğrenmesi Blokları Ekleyin";
const _card_ml4kids_content = "'Machine Learning for Kids' projesi öğrencilerin hızlıca makine öğrenmesi tekniklerini Scratch projeleri içinde kullanmalarına imkan veriyor.";
const _card_assess = "Kendimizi Değerlendirelim";
const _card_license = "Lisans ve Paylaşım";
const _card_license_content = "Bu websitesi içinde paylaşılan tüm içerik <a href=\"https://creativecommons.org/licenses/by-nc-sa/4.0/deed.tr\">Creative Commons Atıf-GayriTicari-AynıLisansla Paylaş 4.0 Uluslararası (CC BY-NC-SA 4.0)</a> Lisansı ile paylaşılmıştır.";
const _card_assess_content = "Google ve Oxford'un beraber hazırladığı bir websitesi olan <b>'A to Z AI'</b> websitesinden içerikleri okuyalım ve öğrencilerin bu zamana kadar öğrendikleri kavramlar ile ne kadar uyumlu olduklarını tartışalım. Farklı düşünceler çıkıyor mu?";

const _module_dur = "Başlangıç Dersi: {0} saat";

const _module_0_title = "Yapay Zeka Nedir?";
const _module_0_sub = "Yapay zeka çok geniş bir ilgi alanı etrafında toplanmış, birçok araştırmacısı ve uygulayıcısı olan bir bilim dalıdır. Bilgisayar bilimi, matematik, sosyoloji, linguistik gibi birçok farklı alanın kesişiminde olan yapay zeka, insan gibi düşünebilen makinelerin nasıl gerçekleşebileceğini sorgular. İnsan ile doğal etkileşimi yakalayabilen tüm sistemler yapay zekanın ilgi alanındadır."
const _module_1_title = "Bugünlere Nasıl Geldik?<br>Tarih, Tasarım ve Teknoloji: Akıllı Arayüzler";
const _module_1_sub = "Yapay zeka (YZ) müfredatının ilk modülü Akıllı Arayüz Uygulamaları ile başlamaktadır. Bu başlangıcı iki sebepten dolayı yapıyoruz: (1) Öğrencilerin Scratch veya başka bir kodlamaya giriş ortamı ile yarattığı arayüzlerin üzerinden bağlantılar kurabilmek, yani zaten bildikleri kavramları güçlendirmek, (2) yapay zekanın hangi arayüzlerde kullanıldığının farklı örneklerini vererek, hangi ürünlerde yapay zeka, hangi ürünlerde normal kodlamanın kullanılması gerektiğini içselleştirmek.";
const _module_2_title = "Bilgisayarlar Nasıl Görür?<br>Kameradan Geleni Anlamlandırmak";
const _module_2_sub = "Yapay zeka müfredatının ikinci modülü bilgisayarlı görü ile başlamaktadır. Bilgisayarlı görü, sinemadaki yeşil ekran tekniğinden, tıpta tümörlerin belirlenmesine kadar farklı uygulama alanlarına sahiptir. Yapay zekanın, çevre algısı geliştirmesinde önemli bir yere sahiptir. Bu aktivite ile, öğrencilerin yapay zekanın uygulama alanları hakkında bilgi sahibi olmasını, temel algoritmaları geliştirebilmelerini, çeşitli yapay zeka ürünlerini deneyimleyebilmelerini ve toplum için yapay zeka hakkında fikir yürütmelerini amaçladık.";
const _module_3_title = "Bilgisayarlar Nasıl Duyar?<br>Duyduklarını Nasıl Anlar?";
const _module_3_sub = "Yapay zeka müfredatının son modülü bilgisayarların sesleri nasıl tanıdığını ve cümleleri nasıl anlamlandırabileceğini göstermeyi hedefler. Bu modülde öğrenciler, yapay zekanın farklı uygulama alanları hakkında bilgi sahibi olur, ses tanıma, sınıflandırma ve doğal dil işleme konusunda temel algoritmaları geliştirir, çeşitli yapay zeka ürünlerini deneyimler ve toplum için yapay zeka hakkında fikir yürütür.";

// Helper Methods

// String Formatting
if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}
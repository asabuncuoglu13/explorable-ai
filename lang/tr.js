// General
const _back_home = " << Anasayfaya Geri Dön";

// Home Page
const _home_title = "Yapay Zekayı Keşdefelim";
const _home_sub = "Twin Bilim içerik ekibinin UCL-EDUCATE partnerliği ile açık kaynak geliştirdiği ortaokullar için yapay zeka müfredatının tüm kaynaklarına ulaşın.";
const _card_why_title = "Müfredatı Nasıl Uygulayalım?";
const _card_twing_title = "Twing ile Yapay Zeka Dersleri";
const _card_twing_sub = "Twing uygulaması ve diğer birçok etkileşimli içeriği kullanarak adım adım yapay zeka içeriğimizin üzerinden geçtik";
const _card_project_form = "Sene Sonu Proje Formu ve Örneği";
const _card_project_form_text = "Müfredatın sene sonu projesinde, öğrencilerden yapay zekayı kullanacakları disiplinler-arası bir proje tasarlamalarını istedik.";
const _card_interactive_content = "Tüm Etkileşimli İçeriklerin Listesini Görün";
const _card_interactive_content_text = "Müfredatın içinde yer alan tüm online içeriklerin listesini inceleyin.";
const _card_learning_goals = "İçerik ve Öğrenme Hedefleri Özeti";
const _card_learning_goals_text = "Öğrenme hedeflerini ve yapay zeka ile bağlantılarını içeren Google Sheets dökümanını açın.";
const _card_ml4kids = "Scratch'te Makine Öğrenmesi";
const _card_ml4kids_content = "'Machine Learning for Kids' projesi öğrencilerin hızlıca makine öğrenmesi tekniklerini Scratch projeleri içinde kullanmalarına imkan veriyor.";
const _card_license = "Lisans ve Paylaşım";
const _card_license_content = "Bu websitesi içinde paylaşılan tüm içerik <a href='https://creativecommons.org/licenses/by-nc-sa/4.0/deed.tr'>Creative Commons Atıf-GayriTicari-AynıLisansla Paylaş 4.0 Uluslararası (CC BY-NC-SA 4.0)</a> Lisansı ile paylaşılmıştır.";

const _module_dur = "Önerilen Ders Süresi: {0} saat";

const _module_0_title = "Yapay Zeka Nedir?";
const _module_0_sub = "Yapay zeka çok geniş bir ilgi alanı etrafında toplanmış, birçok araştırmacısı ve uygulayıcısı olan bir bilim dalıdır. Bilgisayar bilimi, matematik, sosyoloji, linguistik gibi birçok farklı alanın kesişiminde olan yapay zeka, insan gibi düşünebilen makinelerin nasıl gerçekleşebileceğini sorgular. İnsan ile doğal etkileşimi yakalayabilen tüm sistemler yapay zekanın ilgi alanındadır."
const _module_1_title = "Tarih, Tasarım ve Teknoloji: Akıllı Arayüzler";
const _module_1_sub = "Yapay zeka (YZ) müfredatının ilk modülü Akıllı Arayüz Uygulamaları ile başlamaktadır. Bu başlangıcı iki sebepten dolayı yapıyoruz: (1) Öğrencilerin Scratch veya başka bir kodlamaya giriş ortamı ile yarattığı arayüzlerin üzerinden bağlantılar kurabilmek, yani zaten bildikleri kavramları güçlendirmek, (2) yapay zekanın hangi arayüzlerde kullanıldığının farklı örneklerini vererek, hangi ürünlerde yapay zeka, hangi ürünlerde normal kodlamanın kullanılması gerektiğini içselleştirmek.";
const _module_2_title = "Bilgisayarlar Nasıl Görür: Kameradan Geleni Anlamlandırmak";
const _module_2_sub = "Yapay zeka müfredatının ikinci modülü bilgisayarlı görü ile başlamaktadır. Bilgisayarlı görü, sinemadaki yeşil ekran tekniğinden, tıpta tümörlerin belirlenmesine kadar farklı uygulama alanlarına sahiptir. Yapay zekanın, çevre algısı geliştirmesinde önemli bir yere sahiptir. Bu aktivite ile, öğrencilerin yapay zekanın uygulama alanları hakkında bilgi sahibi olmasını, temel algoritmaları geliştirebilmelerini, çeşitli yapay zeka ürünlerini deneyimleyebilmelerini ve toplum için yapay zeka hakkında fikir yürütmelerini amaçladık.";
const _module_3_title = "Bilgisayarlar Nasıl Duyar: Duyduklarını Nasıl Anlar?";
const _module_3_sub = "Yapay zeka müfredatının son modülü bilgisayarların sesleri nasıl tanıdığını ve cümleleri nasıl anlamlandırabileceğini göstermeyi hedefler. Bu modülde öğrenciler, yapay zekanın farklı uygulama alanları hakkında bilgi sahibi olur, ses tanıma, sınıflandırma ve doğal dil işleme konusunda temel algoritmaları geliştirir, çeşitli yapay zeka ürünlerini deneyimler ve toplum için yapay zeka hakkında fikir yürütür.";

// Module 0 : Intelligent User Interfaces
const _module_0_content =
    " <p>\n" +
    "        Yapay zekayı öğrencilere hızlı bir şekilde aktarmak için hazırladığımız bu iki saatlik atölye çalışmasında:\n" +
    "    </p>\n" +
    "    <ol>\n" +
    "        <li>Yapay Zeka Nedir?</li>\n" +
    "        <li>Yapay Zekanın Kullanım Alanları Nelerdir?</li>\n" +
    "        <li>Yapay Zeka Kodlama ile Normal Kodlama Arasındaki Farklar Nelerdir?</li>\n" +
    "    </ol>\n" +
    "    <p>gibi soruların cevaplarını tartışmaya çalışalım. Örnek bir anlatım videosuna <a href='twing.html'>Twing\n" +
    "        YZ Konu Anlatımı</a> videosundan erişebilirsiniz.</p>\n" +
    "    <p>Yapay Zekanın araştırma alanlarından biri olan kamera ile görüntüleri tanıma ve bu görüntüler\n" +
    "        yardımı ile bir oyun kodlama için:</p>\n" +
    "    <ol>\n" +
    "        <li><a href='https://teachablemachine.withgoogle.com/'>Teachable Machine</a> adresine gidelim.</li>\n" +
    "        <li>Image Project oluşturalım.</li>\n" +
    "        <li>Oluşturduğumuz modelin linkini kopyalayalım.</li>\n" +
    "        <li><a href='https://teachable-arcade-remix.glitch.me/'>Teachable Arcade</a> oyununda bu linki kullanalım.</li>\n" +
    "    </ol>";

// Module 1
const _module_1_content =
    " <p>\n" +
    "   Yapay zekanın temel tanımını ve uygulama alanlarını aktardıktan sonra kodlama müfredatındaki önceki konularla bağlantılar kurmak için Akıllı Arayüzler modülü ile devam ediyoruz. Bu modülde:\n" +
    "   </p>\n" +
    "   <ol>\n" +
    "        <li>İnsan ile bilgisayarın etkileşimi için tasarlanan yeni arayüzlerin bilgisayar ve yapay zeka tarihine nasıl yön verdiğini,</li>\n" +
    "        <li>Kendi teknolojimizi geliştirmek için prototipleme yapmanın temellerini,</li>\n" +
    "        <li>Prototip oluşturma sürecinde tasarım odaklı düşünme yönteminin nasıl kullanılabileceğini,</li>\n" +
    "        <li>Tasarladığımı ürüne yapay zeka yerleştirirken hangi konularda dikkatli olmamız gerektiğini ve</li>\n" +
    "        <li>Toplum için yapay zeka geliştirirken hangi örneklerden yola çıkabileceğimi</li>\n" +
    "   </ol>\n" +
    "   <p>öğreneceğiz. Yapay zeka kullanarak insanlara ve topluma katkı sağlamayı amaçlayan projelere hızlıca göz atmak istersen, " +
    "   <a href='https://experiments.withgoogle.com/'>Experiments with Google</a> sayfasındaki " +
    "   <a href='https://experiments.withgoogle.com/collection/startwithone'>Start with One</a> koleksiyonuna göz atabilirsin." +
    "Bu koleksiyonda senin gibi işe öğrenerek ve en temelden başlayan insanların, toplumu değiştirebilecek projelerini bulacaksın.</p>\n";

// Module 2
const _module_2_content =
    "<p class='inner-text'>\n" +
    "        Yapay zeka (YZ) müfredatının ikinci aktivitesi bilgisayarlı görü ile başlamaktadır.\n" +
    "        Bilgisayarlı görü, sinemadaki yeşil ekran tekniğinden, tıpta tümörlerin belirlenmesine kadar farklı uygulama alanlarına sahiptir.\n" +
    "        Yapay zekanın, çevre algısı geliştirmesinde önemli bir yere sahiptir.\n" +
    "        Bu aktivite ile, öğrencilerin yapay zekanın uygulama alanları hakkında bilgi sahibi olmasını, temel algoritmaları geliştirebilmelerini, çeşitli yapay zeka ürünlerini deneyimleyebilmelerini ve toplum için yapay zeka hakkında fikir yürütmelerini amaçladık.\n" +
    "        Modül içindeki aktiviteleri aşağıdaki başlıklar altında topladık:\n" +
    "    </p>\n" +
    "    <ol>\n" +
    "        <li><a href='#'>Önce ışığı tanıyalım, sonuçta görmek için ışığa ihtiyaç vardır.</a></li>\n" +
    "        <li><a href='#'>Bilgisayarların kamerası ile gözlerimiz arasındaki benzerlikler</a></li>\n" +
    "        <li><a href='#'>Kameralardan gelen görüntü, algoritmalarda nasıl kullanılır.</a></li>\n" +
    "        <li><a href='#_dataset_title'>Yeni nesil algoritmalar verilerden öğrenebilir.</a></li>\n" +
    "        <li><a href='#_ethics_title'>Bu yeni teknoloji nasıl kullanılmalı</a></li>\n" +
    "    </ol>\n" +
    "    <h2 id='_dataset_title'>Veri Setleri</h2>\n" +
    "    <div class='grid'>\n" +
    "        <div class='item item-a'>\n" +
    "            <p class='light'>Bilgisayarlar aracılığı ile çizim yapıtığımızda bu çizimleri tanıyabilen algoritmalar\n" +
    "                yapay zekanın bir başka örneğidir.</p>\n" +
    "        </div>\n" +
    "        <div class='card item item-b'>\n" +
    "            <div class='card-content white-text'>\n" +
    "                <p class='info'>Önerilen Süre: 1 saat</p>\n" +
    "                <h2 class='inner-title'>Quick, Draw!</h2>\n" +
    "                <p class='inner-text'>Bu oyun tarzı uygulamada bilgisayar sizin yaptığınız çizimleri tahmin etmeye\n" +
    "                    çalışır. Peki, bu çizimleri nasıl tanıyor olabilir?</p>\n" +
    "            </div>\n" +
    "            <a class='card-link' href='https://quickdraw.withgoogle.com/'>Siteyi ziyaret et</a>\n" +
    "        </div>\n" +
    "        <div class='card item item-c'>\n" +
    "            <div class='card-content white-text'>\n" +
    "                <p class='info'>Önerilen Süre: 1 saat</p>\n" +
    "                <h2 class='inner-title'>Iconary</h2>\n" +
    "                <p class='inner-text'>Çizimler ile bir cümleyi nasıl anlatabilirsin? Peki bu cümlerleri bilgisayar\n" +
    "                    nasıl tanıyabilir?</p>\n" +
    "\n" +
    "                <a class='card-link' href='https://iconary.allenai.org/'>Siteyi ziyaret et</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <h2 id='_ethics_title'>Toplum ve Etik</h2>\n" +
    "    <div class='grid'>\n" +
    "        <div class='item item-a'>\n" +
    "            <p class='light'>Yapay zeka ile ilgili neden bu kadar fazla endişe var? Bu endişeler bizim\n" +
    "                yetersizliğimizden kaynaklanıyor olabilir mi? Yapay zeka öğrenirken birçok farklı veriye ihtiyaç\n" +
    "                duyduğu için, bu verileri sağlayacak insanların dikkatli olmaları gerekmektedir. Tüm bu süreçteki\n" +
    "                farklı vakaları incelemek ister misin?</p>\n" +
    "        </div>\n" +
    "        <div id='case1' class='card item item-b'>\n" +
    "            <div class='card-content white-text'>\n" +
    "                <p class='info'>Önerilen Süre: 2 saat</p>\n" +
    "                <h2 class='inner-title'>Bir Şehrin Geleceği</h2>\n" +
    "                <p class='inner-text'>Bilgisayarlı görü teknolojileri geliştikçe, şehirlerin farklı noktalarında bu\n" +
    "                    teknolojiler kendine uygulama alanı buluyor. Peki, bu teknolojilerin varlığını nasıl\n" +
    "                    değerlendirmek gerekir?</p>\n" +
    "                <a class='card-link' href='https://densitydesign.github.io/teaching-dd15/course-results/es03/group10/'>Siteyi ziyaret et</a>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div id='case2' class='card item item-c'>\n" +
    "            <div class='card-content white-text'>\n" +
    "                <p class='info'>Önerilen Süre: 2 saat</p>\n" +
    "                <h2 class='inner-title'>Nasıl Veri Toplanır?</h2>\n" +
    "                <p class='inner-text'>Farklı durumlar için farklı veri kaynakları gerekir. Bu verileri toplarken,\n" +
    "                    tüm durumları düşündüğümüzden nasıl emin olabiliriz?</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div id='case3' class='card item item-d'>\n" +
    "            <div class='card-content white-text'>\n" +
    "                <p class='info'>Önerilen Süre: 2 saat</p>\n" +
    "                <h2 class='inner-title'>Projelerimiz İnsanları Nasıl Etkiliyor?</h2>\n" +
    "                <p class='inner-text'>Bilgisayarlı görü sayesinde, insanların duygularını bile anlamak mümkün\n" +
    "                    olabiliyor. Reklamcılar, bu teknolojiyi kullanarak, yeni ürünlerin insanların algısında neler\n" +
    "                    değiştirdiğini merak ediyor.</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>";

// Module 3
const _module_3_content =
    "    <p class='inner-text'>\n" +
    "        Müfredatımızdaki her modül bilgisayarların çevrelerindeki fiziksel değişimleri nasıl algıladığı üzerine\n" +
    "        yapılan çalışmaları toparlar. Yukarıdaki sunum, 12 haftalık içeriğimizin özeti niteliğindedir. Bu modülün 5\n" +
    "        ana parçası aşağıdaki gibidir:\n" +
    "    </p>\n" +
    "    <ol>\n" +
    "        <li><a href='#'>Sesler nasıl oluşur, kulağımız sesleri nasıl algılar?</a> </li>\n" +
    "        <li><a href='#'>Mikrofonlar kulağımızdan nasıl ilham alır?</a> </li>\n" +
    "        <li><a href='#'>Mikrofonlardan gelen veri, algoritmalarda nasıl kullanılır.</a> </li>\n" +
    "        <li><a href='#'>Yeni nesil algoritmalar verilerden öğrenebilir.</a> </li>\n" +
    "        <li><a href='#'>Bu yeni teknoloji nasıl kullanılmalı</a> </li>\n" +
    "    </ol>\n" +
    "    <p>gibi soruların cevaplarını tartışmaya çalışalım.</p>";

// Helper Methods



// String Formatting
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
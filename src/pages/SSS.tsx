import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import heroFaq from "@/assets/hero-faq-fitness.jpg";

const SSS = () => {
  const faqs = [
    {
      question: "Sipariş ne kadar sürede teslim edilir?",
      answer: "Siparişleriniz, ödeme onayından sonra 1-3 iş günü içinde kargoya verilir. Kargo teslimat süresi bölgenize göre 1-3 iş günü arasında değişmektedir. Toplam teslimat süresi ortalama 2-6 iş günüdür."
    },
    {
      question: "Kargo ücreti ne kadardır?",
      answer: "500₺ ve üzeri alışverişlerinizde kargo ücretsizdir. 500₺ altı alışverişlerde kargo ücreti 29.90₺'dir. Kampanya dönemlerinde kargo ücreti farklılık gösterebilir."
    },
    {
      question: "Ürünler orijinal mi?",
      answer: "Evet, tüm ürünlerimiz %100 orijinal ve yetkili distribütörlerden temin edilmektedir. Her ürünün hologram etiketi ve orijinallik sertifikası bulunmaktadır. Sahte ürün satışı yapmıyoruz."
    },
    {
      question: "İade ve değişim şartları nelerdir?",
      answer: "Ürünlerinizi teslim aldığınız tarihten itibaren 14 gün içinde iade edebilirsiniz. Ürün kullanılmamış, ambalajı açılmamış ve faturası ile birlikte olmalıdır. Gıda takviyeleri ve hijyen ürünlerinde ambalaj açılmışsa iade kabul edilmez."
    },
    {
      question: "Hangi ödeme yöntemlerini kabul ediyorsunuz?",
      answer: "Kredi kartı (Visa, Mastercard, Troy), banka kartı, havale/EFT ve kapıda ödeme seçeneklerini kullanabilirsiniz. Kredi kartına taksit imkanı da sunuyoruz. Tüm ödemeleriniz SSL güvenlik sertifikası ile korunmaktadır."
    },
    {
      question: "Protein tozu nasıl kullanılır?",
      answer: "Protein tozu genellikle antrenman sonrası 30 dakika içinde, 250-300ml su veya süt ile karıştırılarak tüketilir. Günlük protein ihtiyacınıza göre 1-3 servis alabilirsiniz. Detaylı kullanım talimatları için ürün etiketine bakınız."
    },
    {
      question: "Ürünlerin son kullanma tarihi ne kadardır?",
      answer: "Tüm ürünlerimiz minimum 6 ay son kullanma tarihli olarak gönderilmektedir. Her üründe son kullanma tarihi açıkça belirtilmiştir. Kısa tarihli ürünler varsa ürün sayfasında belirtilir ve indirimli fiyatla sunulur."
    },
    {
      question: "Sipariş iptali nasıl yapılır?",
      answer: "Kargoya verilmeden önce siparişinizi ücretsiz iptal edebilirsiniz. Bunun için müşteri hizmetlerimizle iletişime geçmeniz yeterlidir. Kargoya verildikten sonra iptaller için ürünü iade sürecini başlatmanız gerekmektedir."
    },
    {
      question: "Toplu alımlarda indirim var mı?",
      answer: "Evet, toplu alımlarda özel indirimler sunuyoruz. Kurumsal alımlar, spor kulübü üyelikleri ve 5.000₺ üzeri siparişler için özel fiyat teklifi alabilirsiniz. info@promarkt7.com adresinden bizimle iletişime geçin."
    },
    {
      question: "Hangi bölgelere kargo gönderimi yapıyorsunuz?",
      answer: "Türkiye'nin tüm illerine kargo gönderimi yapıyoruz. Yurtdışı gönderim için lütfen müşteri hizmetlerimizle iletişime geçin."
    },
    {
      question: "Ürün kullanımı hakkında danışmanlık hizmeti veriyor musunuz?",
      answer: "Evet, uzman ekibimiz ürün seçimi ve kullanımı konusunda size yardımcı olmaya hazır. WhatsApp: +90 (555) 123 45 67 veya info@promarkt7.com üzerinden bize ulaşabilirsiniz."
    },
    {
      question: "BCAA ne zaman kullanılmalı?",
      answer: "BCAA (Dallanmış Zincirli Amino Asitler) antrenman öncesi, sırası veya sonrasında kullanılabilir. Antrenman öncesi kas yıkımını önler, antrenman sırasında enerji verir, sonrasında kas onarımını destekler. Günde 1-3 servis önerilir."
    },
    {
      question: "Kreatin nasıl kullanılır?",
      answer: "Kreatin genellikle günde 5 gram olarak, antrenman sonrası veya herhangi bir zamanda su veya meyve suyu ile alınır. İlk hafta yükleme fazı yapılabilir (günde 20 gram, 4'e bölünmüş dozlar). Kreatin kullanırken bol su tüketilmelidir."
    },
    {
      question: "Kadınlar protein tozu kullanabilir mi?",
      answer: "Evet, protein tozları kadınlar için de son derece faydalıdır. Kas gelişimi, tokluk hissi ve kilo yönetimi için ideal bir takviyedir. Kadınlara özel formüle edilmiş protein tozları da mevcuttur."
    },
    {
      question: "Ürün fotoğrafları gerçek mi?",
      answer: "Evet, web sitemizde gösterilen tüm ürün fotoğrafları gerçek ürünlere aittir. Bazı fotoğraflar üretici firma tarafından sağlanmaktadır. Aldığınız ürün, sitede gördüğünüz ürünün aynısıdır."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroFaq} 
            alt="Spor yapan erkek ve kadın" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-primary">Sık Sorulan</span> Sorular
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              Merak ettiğiniz her şey burada! Sorularınızın cevaplarını bulun.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border rounded-lg px-6 bg-card hover-lift"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-6">
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-muted">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Sorunuz mu var?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Aradığınız soruyu bulamadınız mı? Müşteri hizmetlerimiz size yardımcı olmak için burada!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/905551234567" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              WhatsApp ile İletişim
            </a>
            <a 
              href="mailto:info@promarkt7.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-secondary text-secondary-foreground rounded-lg hover:opacity-90 transition-opacity font-semibold"
            >
              E-posta Gönder
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SSS;

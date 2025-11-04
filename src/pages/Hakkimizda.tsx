import { Award, Package, Truck, CreditCard, Gift, Headphones, Smartphone, CheckCircle } from 'lucide-react';
import heroGym from '@/assets/hero-gym-hakkimizda.jpg';

const Hakkimizda = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative text-white py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroGym} 
            alt="Spor salonu" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">🏋️ HAKKIMIZDA</h1>
            <p className="text-xl md:text-2xl font-semibold mb-4">
              PROMARKT7 - SPOR YAŞAMININ ADRESİ
            </p>
            <p className="text-lg opacity-90">
              Fitness tutkunu, sporcu ve sağlıklı yaşam arayışındaki herkes için doğru adrestesiniz!
            </p>
          </div>
        </div>
      </section>

      {/* Hikayemiz */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">BİZ KİMİZ?</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                ProMarkt7, 2022 yılında spor ve fitness tutkusuyla yola çıkan, Türkiye'nin güvenilir sporcu gıdaları ve spor ekipmanları platformudur. Kuruluşumuzdan bu yana tek bir hedefimiz var: Sporcuların ve fitness meraklılarının hedeflerine ulaşması için en kaliteli ürünleri, en uygun fiyatlarla sunmak.
              </p>
              <p>
                Spor sadece bir aktivite değil, yaşam tarzıdır. Biz de bu yaşam tarzının her anında yanınızda olmak için buradayız. Protein tozlarından vitaminlere, spor ekipmanlarından sağlıklı atıştırmalıklara kadar geniş ürün yelpazemizle spor yaşamınızı destekliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Misyon & Vizyon */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4">MİSYONUMUZ</h2>
              <p className="text-muted-foreground">
                Türkiye'de spor yapan herkesin kaliteli, orijinal ve uygun fiyatlı sporcu gıdalarına kolayca ulaşabilmesini sağlamak. Müşterilerimize güvenilir, hızlı ve profesyonel hizmet sunarak spor hedeflerine giden yolda en iyi destekçileri olmak.
              </p>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-4">VİZYONUMUZ</h2>
              <p className="text-muted-foreground">
                Türkiye'nin en çok tercih edilen, güvenilir ve yenilikçi spor ürünleri platformu olmak. Sporcuların ilk tercihi haline gelerek, sağlıklı yaşam ve fitness kültürünün yaygınlaşmasına katkıda bulunmak.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Değerlerimiz */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">DEĞERLERİMİZ</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <CheckCircle className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">ORİJİNALLİK</h3>
              <p className="text-muted-foreground text-sm">
                Sadece orijinal, lisanslı ve güvenilir markaların ürünlerini sunuyoruz. Her ürünümüz kalite güvencesi altındadır.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <Award className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">MÜŞTERİ MEMNUNİYETİ</h3>
              <p className="text-muted-foreground text-sm">
                Müşterilerimizin memnuniyeti bizim için her şeyden önce gelir. 7/24 destek ekibimizle her zaman yanınızdayız.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <Truck className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">HIZLI TESLİMAT</h3>
              <p className="text-muted-foreground text-sm">
                Siparişleriniz en kısa sürede ve güvenli paketleme ile kapınıza ulaşır. Türkiye'nin her yerine hızlı kargo imkanı.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
              <CreditCard className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">UYGUN FİYAT</h3>
              <p className="text-muted-foreground text-sm">
                Kaliteden ödün vermeden, en rekabetçi fiyatlarla ürünlerimizi sunuyoruz. Düzenli kampanyalarımızı takip edin!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Neden ProMarkt7 */}
      <section className="py-16 bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">NEDEN PROMARKT7'Yİ TERCİH ETMELİSİNİZ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <Award className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-lg font-bold mb-2">🏆 GÜVENİLİR MARKALAR</h3>
              <p className="text-muted-foreground text-sm">
                Dünya çapında tanınmış ve güvenilir sporcu gıdası markalarının Türkiye distribütörüyüz. Optimum Nutrition, MyProtein, Scitec Nutrition, MuscleTech ve daha fazlası...
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <Package className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-lg font-bold mb-2">📦 GENİŞ ÜRÜN YELPAZESİ</h3>
              <p className="text-muted-foreground text-sm">
                Protein tozları, amino asitler, vitaminler, spor ekipmanları, sağlıklı atıştırmalıklar ve daha fazlası. Her ihtiyacınız için tek adres.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <Truck className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-lg font-bold mb-2">🚚 HIZLI & ÜCRETSİZ KARGO</h3>
              <p className="text-muted-foreground text-sm">
                500₺ ve üzeri alışverişlerinizde kargo bizden! Siparişleriniz 1-3 iş günü içinde kapınızda.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <CreditCard className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-lg font-bold mb-2">💳 GÜVENLİ ÖDEME</h3>
              <p className="text-muted-foreground text-sm">
                SSL sertifikalı altyapımızla tüm ödeme bilgileriniz güvende. Kredi kartı, havale/EFT ve kapıda ödeme seçenekleri.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <Gift className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-lg font-bold mb-2">🎁 ÖZEL KAMPANYALAR</h3>
              <p className="text-muted-foreground text-sm">
                Düzenli indirimler, kampanyalar ve sadakat programımızla kazanmaya devam edin.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <Headphones className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-lg font-bold mb-2">💬 PROFESYONEL DESTEK</h3>
              <p className="text-muted-foreground text-sm">
                Ürün seçiminden kullanım önerilerine kadar uzman ekibimiz size yardımcı olmaya hazır. WhatsApp, telefon ve e-posta ile 7/24 ulaşın.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm md:col-span-2 lg:col-span-1">
              <Smartphone className="w-10 h-10 text-primary mb-3" />
              <h3 className="text-lg font-bold mb-2">📱 KOLAY ALIŞVERİŞ</h3>
              <p className="text-muted-foreground text-sm">
                Kullanıcı dostu web sitemiz ve mobil uyumlu tasarımımızla her yerden kolayca alışveriş yapın.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sayılarla ProMarkt7 */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-12 text-center">SAYILARLA PROMARKT7</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
            <div>
              <div className="text-5xl font-bold mb-2">50.000+</div>
              <div className="text-lg opacity-90">Mutlu Müşteri</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5.000+</div>
              <div className="text-lg opacity-90">Ürün Çeşidi</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-lg opacity-90">Dünya Markası</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">99.8%</div>
              <div className="text-lg opacity-90">Müşteri Memnuniyeti</div>
            </div>
          </div>
        </div>
      </section>

      {/* Sürdürülebilirlik */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-center">SÜRDÜRÜLEBİLİRLİK VE SOSYAL SORUMLULUK</h2>
            <p className="text-muted-foreground mb-6 text-center">
              ProMarkt7 olarak sadece ürün satmıyoruz, aynı zamanda sağlıklı yaşam kültürünü yaymayı amaçlıyoruz.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Çevre dostu paketleme malzemeleri kullanıyoruz</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Geri dönüşüme önem veren markalarla çalışıyoruz</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Spor kulüpleri ve sporculara sponsorluk desteği sağlıyoruz</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Fitness ve sağlıklı beslenme konusunda ücretsiz içerik ve rehberler sunuyoruz</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hakkimizda;

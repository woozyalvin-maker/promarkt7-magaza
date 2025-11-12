import { Package, Clock, MapPin, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Kargo = () => {
  return (
    <>
      <Helmet>
        <title>Kargo ve Teslimat | ProMarkt7</title>
        <meta name="description" content="ProMarkt7 kargo ve teslimat koşulları. Hızlı ve güvenli teslimat seçenekleri hakkında detaylı bilgi." />
      </Helmet>

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8"><span className="text-primary">Kargo</span> ve Teslimat</h1>

          <div className="space-y-8">
            {/* Teslimat Süreleri */}
            <section className="bg-card p-6 rounded-lg border">
              <div className="flex items-start gap-4">
                <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Teslimat Süreleri</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Standart Kargo:</strong> Siparişiniz 1-3 iş günü içinde kargoya teslim edilir ve 2-5 iş günü içinde adresinize ulaşır.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Aynı Gün Kargo:</strong> İstanbul içi belirli bölgelere, saat 12:00'ye kadar verilen siparişler aynı gün teslim edilir.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Hafta Sonu:</strong> Cumartesi günleri verilen siparişler Pazartesi günü kargoya verilir.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Kargo Ücretleri */}
            <section className="bg-card p-6 rounded-lg border">
              <div className="flex items-start gap-4">
                <Package className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Kargo Ücretleri</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Ücretsiz Kargo:</strong> 500 TL ve üzeri alışverişlerde kargo ücretsizdir.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Standart Kargo:</strong> 500 TL altı siparişlerde kargo ücreti 49,90 TL'dir.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Aynı Gün Teslimat:</strong> İstanbul içi aynı gün teslimat ücreti 79,90 TL'dir.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Teslimat Bölgeleri */}
            <section className="bg-card p-6 rounded-lg border">
              <div className="flex items-start gap-4">
                <MapPin className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Teslimat Bölgeleri</h2>
                  <p className="text-muted-foreground mb-4">
                    Türkiye'nin tüm illerine teslimat yapıyoruz. Kargo firmaları:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Aras Kargo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>Yurtiçi Kargo</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                      <span>MNG Kargo</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Önemli Notlar */}
            <section className="bg-muted/50 p-6 rounded-lg border border-border">
              <h2 className="text-xl font-semibold mb-4">Önemli Notlar</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Kargo takip numaranız, ürün kargoya verildikten sonra e-posta ve SMS ile tarafınıza iletilecektir.</li>
                <li>• Teslimat süresi, bölgesel ve mevsimsel koşullara göre değişiklik gösterebilir.</li>
                <li>• Adres bilgilerinizin eksiksiz ve doğru olduğundan emin olunuz.</li>
                <li>• Ürün teslimatı sırasında mutlaka kimlik kontrolü yapılmaktadır.</li>
                <li>• Hasarlı veya açılmış paketleri teslim almayınız.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kargo;

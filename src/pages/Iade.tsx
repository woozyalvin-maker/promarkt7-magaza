import { RefreshCw, Clock, CheckCircle, AlertCircle, Package } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Iade = () => {
  return (
    <>
      <Helmet>
        <title>İade ve Değişim | ProMarkt7</title>
        <meta name="description" content="ProMarkt7 iade ve değişim koşulları. Kolay iade süreci ve müşteri memnuniyeti odaklı hizmet anlayışı." />
      </Helmet>

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8"><span className="text-primary">İade</span> ve Değişim</h1>

          <div className="space-y-8">
            {/* İade Koşulları */}
            <section className="bg-card p-6 rounded-lg border hover-lift">
              <div className="flex items-start gap-4">
                <RefreshCw className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">İade Koşulları</h2>
                  <p className="text-muted-foreground mb-4">
                    Ürünlerinizi teslim aldığınız tarihten itibaren 14 gün içerisinde, kullanılmamış ve ambalajı açılmamış olması koşuluyla iade edebilirsiniz.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Ürün ambalajı açılmamış ve hasarsız olmalıdır</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Ürün faturası ile birlikte iade edilmelidir</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Ürün kampanyalı veya hediye olarak alınmış olabilir</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>İade kargo ücreti tarafımızca karşılanır</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* İade Edilemeyen Ürünler */}
            <section className="bg-card p-6 rounded-lg border hover-lift">
              <div className="flex items-start gap-4">
                <AlertCircle className="h-8 w-8 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">İade Edilemeyen Ürünler</h2>
                  <p className="text-muted-foreground mb-4">
                    Hijyen ve sağlık kuralları gereği aşağıdaki ürünler iade kabul edilmemektedir:
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span>Ambalajı açılmış gıda takviyeleri (protein tozu, amino asit vb.)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span>Açılmış vitamin ve mineraller</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span>Hasarlı veya kullanılmış spor ekipmanları</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Değişim Süreci */}
            <section className="bg-card p-6 rounded-lg border hover-lift">
              <div className="flex items-start gap-4">
                <Package className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Değişim Süreci</h2>
                  <p className="text-muted-foreground mb-4">
                    Ürün değişimi için aşağıdaki adımları izleyebilirsiniz:
                  </p>
                  <ol className="space-y-3 text-muted-foreground list-decimal list-inside">
                    <li>İletişim sayfamızdan bize ulaşın</li>
                    <li>Sipariş numaranızı ve değişim sebebinizi belirtin</li>
                    <li>Ürünü orijinal ambalajı ile kargoya verin</li>
                    <li>Ürün tarafımıza ulaştıktan sonra değişim işleminiz başlatılır</li>
                    <li>Yeni ürün 2-3 iş günü içinde kargoya verilir</li>
                  </ol>
                </div>
              </div>
            </section>

            {/* İade Süresi */}
            <section className="bg-card p-6 rounded-lg border hover-lift">
              <div className="flex items-start gap-4">
                <Clock className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">İade Süresi ve Ödeme</h2>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>İade ürün tarafımıza ulaştıktan sonra 3 iş günü içinde kontrol edilir</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Uygun görülmesi halinde ödeme iadeniz başlatılır</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Kredi kartı ödemeleri 2-8 iş günü içinde hesabınıza iade edilir</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Havale/EFT ödemeleri için IBAN bilgileriniz istenir ve 1-2 iş günü içinde gönderilir</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* İletişim Bilgisi */}
            <section className="bg-muted/50 p-6 rounded-lg border border-border">
              <h2 className="text-xl font-semibold mb-4">İade ve Değişim İçin İletişim</h2>
              <p className="text-muted-foreground mb-4">
                İade ve değişim işlemleriniz için bizimle iletişime geçebilirsiniz:
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>E-posta:</strong> iade@promarkt7.com</li>
                <li>• <strong>Telefon:</strong> +90 (555) 123 45 67</li>
                <li>• <strong>WhatsApp:</strong> +90 (555) 123 45 67</li>
                <li>• <strong>Çalışma Saatleri:</strong> Hafta içi 09:00 - 18:00</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Iade;

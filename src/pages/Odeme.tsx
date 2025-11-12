import { CreditCard, Wallet, Shield, CheckCircle, Building2 } from 'lucide-react';
import { Helmet } from 'react-helmet';

const Odeme = () => {
  return (
    <>
      <Helmet>
        <title>Ödeme Seçenekleri | ProMarkt7</title>
        <meta name="description" content="ProMarkt7 güvenli ödeme seçenekleri. Kredi kartı, havale/EFT ile kolay ve güvenli alışveriş imkanı." />
      </Helmet>

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8"><span className="text-primary">Ödeme</span> Seçenekleri</h1>

          <div className="space-y-8">
            {/* Kredi Kartı */}
            <section className="bg-card p-6 rounded-lg border hover-lift">
              <div className="flex items-start gap-4">
                <CreditCard className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold mb-4">Kredi Kartı ile Ödeme</h2>
                  <p className="text-muted-foreground mb-4">
                    Tüm kredi kartlarınızla güvenli alışveriş yapabilirsiniz. Tek çekim veya taksit seçeneklerinden yararlanabilirsiniz.
                  </p>
                  
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">Kabul Edilen Kartlar:</h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="px-4 py-2 bg-primary/10 rounded-lg font-medium">Visa</span>
                      <span className="px-4 py-2 bg-primary/10 rounded-lg font-medium">Mastercard</span>
                      <span className="px-4 py-2 bg-primary/10 rounded-lg font-medium">Troy</span>
                      <span className="px-4 py-2 bg-primary/10 rounded-lg font-medium">American Express</span>
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h3 className="font-semibold mb-3">Taksit Seçenekleri:</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex justify-between items-center">
                        <span>250 TL - 500 TL arası</span>
                        <span className="font-semibold text-foreground">2 Taksit</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>500 TL - 1.000 TL arası</span>
                        <span className="font-semibold text-foreground">3 Taksit</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>1.000 TL - 2.000 TL arası</span>
                        <span className="font-semibold text-foreground">6 Taksit</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>2.000 TL ve üzeri</span>
                        <span className="font-semibold text-foreground">9 Taksit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Havale/EFT */}
            <section className="bg-card p-6 rounded-lg border hover-lift">
              <div className="flex items-start gap-4">
                <Building2 className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Havale / EFT ile Ödeme</h2>
                  <p className="text-muted-foreground mb-4">
                    Havale veya EFT ile ödeme yaparak %5 indirimden faydalanabilirsiniz.
                  </p>
                  
                  <div className="bg-muted/50 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold mb-3">Banka Hesap Bilgileri:</h3>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-medium">Ziraat Bankası</p>
                        <p className="text-muted-foreground">IBAN: TR00 0001 0000 0000 0000 0000 01</p>
                        <p className="text-muted-foreground">Hesap Sahibi: ProMarkt7 Spor ve Beslenme Ltd. Şti.</p>
                      </div>
                      <div>
                        <p className="font-medium">Garanti BBVA</p>
                        <p className="text-muted-foreground">IBAN: TR00 0006 2000 0000 0000 0000 01</p>
                        <p className="text-muted-foreground">Hesap Sahibi: ProMarkt7 Spor ve Beslenme Ltd. Şti.</p>
                      </div>
                      <div>
                        <p className="font-medium">İş Bankası</p>
                        <p className="text-muted-foreground">IBAN: TR00 0006 4000 0000 0000 0000 01</p>
                        <p className="text-muted-foreground">Hesap Sahibi: ProMarkt7 Spor ve Beslenme Ltd. Şti.</p>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Açıklama kısmına sipariş numaranızı yazmayı unutmayın</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Ödeme dekontu info@promarkt7.com adresine gönderilmelidir</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Ödemeniz onaylandıktan sonra siparişiniz kargoya verilir</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Kapıda Ödeme */}
            <section className="bg-card p-6 rounded-lg border hover-lift">
              <div className="flex items-start gap-4">
                <Wallet className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Kapıda Ödeme</h2>
                  <p className="text-muted-foreground mb-4">
                    Ürününüz teslim edilirken nakit veya kredi kartı ile ödeme yapabilirsiniz.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Kapıda ödeme seçeneği tüm siparişler için geçerlidir</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Nakit ödeme için kargocunun üstünü vermesi gerektiğini unutmayın</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Kredi kartı ile ödeme için kargocunun POS cihazı bulunmaktadır</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Güvenlik */}
            <section className="bg-card p-6 rounded-lg border hover-lift">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Güvenli Ödeme</h2>
                  <p className="text-muted-foreground mb-4">
                    Tüm ödeme işlemleriniz 256-bit SSL sertifikası ile şifrelenir ve güvenli bir şekilde işlenir.
                  </p>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Kart bilgileriniz sistemimizde saklanmaz</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>3D Secure ile ekstra güvenlik katmanı</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>PCI DSS uyumlu ödeme altyapısı</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Tüm işlemler gerçek zamanlı olarak izlenir</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Önemli Notlar */}
            <section className="bg-muted/50 p-6 rounded-lg border border-border">
              <h2 className="text-xl font-semibold mb-4">Önemli Notlar</h2>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Taksit seçenekleri banka ve kart türüne göre değişiklik gösterebilir.</li>
                <li>• Havale/EFT ödemelerinde sipariş numaranızı mutlaka belirtiniz.</li>
                <li>• Kampanyalı ürünlerde taksit seçenekleri sınırlandırılabilir.</li>
                <li>• Ödeme ile ilgili sorunlarınız için müşteri hizmetlerimizle iletişime geçebilirsiniz.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Odeme;

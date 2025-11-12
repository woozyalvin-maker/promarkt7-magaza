import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GizlilikPolitikasi = () => {
  return (
    <div className="container-custom py-12">
      <h1 className="text-4xl font-bold mb-8"><span className="text-primary">Gizlilik</span> Politikası</h1>
      
      <div className="space-y-6">
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle>1. Kişisel Verilerin Korunması</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              ProMarkt7 olarak, müşterilerimizin gizliliğine önem veriyor ve kişisel verilerinizi 
              6698 sayılı Kişisel Verilerin Korunması Kanunu (KVKK) kapsamında korumayı taahhüt ediyoruz.
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardHeader>
            <CardTitle>2. Toplanan Bilgiler</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Web sitemizi kullanırken aşağıdaki bilgiler toplanabilir:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Ad, soyad ve iletişim bilgileri</li>
              <li>Teslimat adresi bilgileri</li>
              <li>E-posta adresi ve telefon numarası</li>
              <li>Sipariş ve ödeme bilgileri</li>
              <li>Çerez ve kullanım verileri</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardHeader>
            <CardTitle>3. Bilgilerin Kullanımı</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Topladığımız bilgiler aşağıdaki amaçlarla kullanılır:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Siparişlerinizi işleme almak ve teslim etmek</li>
              <li>Müşteri hizmetleri sağlamak</li>
              <li>İletişim kurmak ve bilgilendirmek</li>
              <li>Ürün ve hizmetlerimizi geliştirmek</li>
              <li>Yasal yükümlülüklerimizi yerine getirmek</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardHeader>
            <CardTitle>4. Bilgi Güvenliği</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Kişisel verilerinizin güvenliğini sağlamak için gerekli teknik ve idari tedbirleri alıyoruz. 
              Verileriniz şifreli bağlantılar (SSL) üzerinden iletilir ve güvenli sunucularda saklanır.
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardHeader>
            <CardTitle>5. Çerezler</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Web sitemiz, kullanıcı deneyimini geliştirmek için çerezler kullanır. 
              Tarayıcınızın ayarlarından çerezleri yönetebilir veya devre dışı bırakabilirsiniz.
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardHeader>
            <CardTitle>6. Üçüncü Taraflarla Paylaşım</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Kişisel bilgileriniz, yasal zorunluluklar dışında üçüncü taraflarla paylaşılmaz. 
              Kargo firmaları gibi hizmet sağlayıcılarla yalnızca sipariş teslimatı için gerekli bilgiler paylaşılır.
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardHeader>
            <CardTitle>7. Haklarınız</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>KVKK kapsamında aşağıdaki haklara sahipsiniz:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Kişisel verilerinizin işlenip işlenmediğini öğrenme</li>
              <li>İşlenmişse buna ilişkin bilgi talep etme</li>
              <li>İşlenme amacını ve amacına uygun kullanılıp kullanılmadığını öğrenme</li>
              <li>Yurt içinde veya yurt dışında aktarıldığı üçüncü kişileri bilme</li>
              <li>Eksik veya yanlış işlenmiş olması halinde düzeltilmesini isteme</li>
              <li>Silinmesini veya yok edilmesini isteme</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardHeader>
            <CardTitle>8. İletişim</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Gizlilik politikamız hakkında sorularınız için bizimle iletişime geçebilirsiniz:
            </p>
            <p className="font-semibold mt-4">
              E-posta: info@promarkt7.com<br />
              Telefon: +90 (555) 123 45 67
            </p>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardHeader>
            <CardTitle>9. Politika Güncellemeleri</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
              Bu gizlilik politikası gerektiğinde güncellenebilir. 
              Önemli değişiklikler olduğunda sizi bilgilendireceğiz.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              Son güncelleme: {new Date().toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default GizlilikPolitikasi;

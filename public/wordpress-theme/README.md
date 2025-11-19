# ProMarkt7 WordPress Teması

Modern, responsive ve WooCommerce uyumlu e-ticaret teması.

## Kurulum Talimatları

### 1. WordPress Kurulumu
- WordPress'in en son sürümünü yükleyin
- PHP 7.4 veya üzeri gereklidir
- MySQL 5.7 veya üzeri gereklidir

### 2. Tema Yükleme
1. `wordpress-theme` klasörünü WordPress yükleme dizininizde `wp-content/themes/promarkt7` olarak yükleyin
2. WordPress admin panelinde **Görünüm > Temalar**'a gidin
3. ProMarkt7 temasını etkinleştirin

### 3. Gerekli Eklentiler
Aşağıdaki eklentileri yükleyin ve etkinleştirin:

**Zorunlu:**
- **WooCommerce** - E-ticaret işlevselliği için
- **Contact Form 7** - İletişim formu için

**Önerilen:**
- **Yoast SEO** - SEO optimizasyonu için
- **WP Super Cache** - Hız optimizasyonu için
- **Smush** - Görsel optimizasyonu için
- **Wordfence Security** - Güvenlik için

### 4. WooCommerce Kurulumu
1. WooCommerce'i etkinleştirin
2. Kurulum sihirbazını takip edin:
   - Mağaza detaylarını girin (adres, para birimi: TRY)
   - Ödeme yöntemlerini ayarlayın (Kredi Kartı, Havale/EFT, Kapıda Ödeme)
   - Kargo ayarlarını yapın (ücretsiz kargo limiti: 500 TL)

### 5. Tema Ayarları
**Görünüm > Özelleştir**'e gidin:

**İletişim Bilgileri:**
- Telefon: +90 (538) 258 21 58
- E-posta: info@promarkt7.com
- Adres: Mahmutlar mahallesi Barbaros Caddesi No 31/B Alanya
- WhatsApp: +905382582158
- Instagram: [Instagram URL'niz]

**Menüler:**
- Ana Menü oluşturun: Ana Sayfa, Ürünler, Blog, Hakkımızda, İletişim
- Footer menüleri oluşturun

### 6. Sayfalar
Aşağıdaki sayfaları oluşturun:

- **Ana Sayfa** (index.php otomatik kullanılır)
- **Hakkımızda** (/hakkimizda)
- **İletişim** (/iletisim)
- **SSS** (/sss)
- **Gizlilik Politikası** (/gizlilik-politikasi)
- **Kargo ve Teslimat** (/kargo-teslimat)
- **İade ve Değişim** (/iade-degisim)
- **Ödeme Seçenekleri** (/odeme-secenekleri)

**WordPress Ayarları > Okuma** bölümünden "Ana Sayfa" olarak index.php'yi gösterir şekilde ayarlayın.

### 7. Ürün Kategorileri
WooCommerce > Ürünler > Kategoriler'den şu kategorileri oluşturun:

- Protein Tozları
- Amino Asitler
- Vitaminler
- Spor Ekipmanları

### 8. Ürün Ekleme
Her ürün için:
1. **Ürünler > Yeni Ekle**
2. Ürün adı, açıklama, fiyat ekleyin
3. Kategori seçin
4. Öne çıkan görsel ekleyin
5. Galeri resimleri ekleyin
6. Stok bilgilerini girin

**Özel Alanlar:**
- `_product_brand` - Marka adı için özel alan ekleyin (Advanced Custom Fields eklentisi ile)

### 9. Widget Alanları
**Görünüm > Widget'lar**'dan:

**Footer 1-4:**
- Menüler veya özel HTML widget'ları ekleyin
- İletişim bilgilerini girin

### 10. Permalink Ayarları
**Ayarlar > Kalıcı Bağlantılar**:
- "Yazı adı" seçeneğini seçin
- Kaydet

### 11. SEO Ayarları (Yoast SEO ile)
- Site başlığı: "ProMarkt7 - Spor Gıdası ve Fitness Ürünleri"
- Meta açıklama: "En kaliteli protein tozları, amino asitler ve spor ekipmanları. Hızlı kargo ve güvenli alışveriş."
- Sosyal medya ayarlarını yapın

## Özelleştirme

### Renkler
`style.css` dosyasındaki CSS değişkenlerini düzenleyin:
```css
:root {
  --primary: #FF7A3D;
  --secondary: #000000;
  /* ... */
}
```

### Logolar
- **Görünüm > Özelleştir > Site Kimliği**'nden logo yükleyin

### Özel CSS
- **Görünüm > Özelleştir > Ek CSS** bölümünden özel CSS ekleyin

## Güvenlik
1. Güçlü şifreler kullanın
2. SSL sertifikası yükleyin (Let's Encrypt ücretsiz)
3. Düzenli yedekleme yapın
4. WordPress ve eklentileri güncel tutun
5. Wordfence veya benzer güvenlik eklentisi kullanın

## Performans
1. Caching eklentisi kullanın (WP Super Cache)
2. Görsel optimizasyonu yapın (Smush)
3. CDN kullanın (Cloudflare ücretsiz)
4. Gereksiz eklentileri kaldırın

## Destek
Sorun yaşarsanız:
- WordPress Codex: https://codex.wordpress.org/
- WooCommerce Docs: https://woocommerce.com/documentation/
- Tema destek e-posta: info@promarkt7.com

## Lisans
GPL v2 veya üzeri

## Versiyon
1.0.0 - İlk sürüm
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground mt-16">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Kurumsal */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kurumsal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/hakkimizda" className="hover:text-primary transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link to="/iletisim" className="hover:text-primary transition-colors">
                  İletişim
                </Link>
              </li>
              <li>
                <Link to="/sss" className="hover:text-primary transition-colors">
                  Sık Sorulan Sorular
                </Link>
              </li>
              <li>
                <Link to="/gizlilik" className="hover:text-primary transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
            </ul>
          </div>

          {/* Müşteri Hizmetleri */}
          <div>
            <h3 className="font-bold text-lg mb-4">Müşteri Hizmetleri</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/kargo" className="hover:text-primary transition-colors">
                  Kargo ve Teslimat
                </Link>
              </li>
              <li>
                <Link to="/iade" className="hover:text-primary transition-colors">
                  İade ve Değişim
                </Link>
              </li>
              <li>
                <Link to="/odeme" className="hover:text-primary transition-colors">
                  Ödeme Seçenekleri
                </Link>
              </li>
              <li>
                <Link to="/garanti" className="hover:text-primary transition-colors">
                  Orijinallik Garantisi
                </Link>
              </li>
            </ul>
          </div>

          {/* Kategoriler */}
          <div>
            <h3 className="font-bold text-lg mb-4">Kategoriler</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/urunler?kategori=Protein%20Tozları" className="hover:text-primary transition-colors">
                  Protein Tozları
                </Link>
              </li>
              <li>
                <Link to="/urunler?kategori=Amino%20Asitler" className="hover:text-primary transition-colors">
                  Amino Asitler
                </Link>
              </li>
              <li>
                <Link to="/urunler?kategori=Vitaminler" className="hover:text-primary transition-colors">
                  Vitaminler
                </Link>
              </li>
              <li>
                <Link to="/urunler?kategori=Spor%20Ekipmanları" className="hover:text-primary transition-colors">
                  Spor Ekipmanları
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div>
            <h3 className="font-bold text-lg mb-4">İletişim</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span className="text-sm">
                  Atatürk Caddesi No:123<br />
                  Çankaya, Ankara
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">+90 (555) 123 45 67</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span className="text-sm">info@promarkt7.com</span>
              </li>
            </ul>

            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/promarkt7?igsh=MXMyZW02M2E2aGZjcg=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left">
              © {currentYear} ProMarkt7. Tüm hakları saklıdır.
            </p>
            
            <div className="flex gap-4 text-xs">
              <span>Visa</span>
              <span>Mastercard</span>
              <span>Troy</span>
              <span>PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

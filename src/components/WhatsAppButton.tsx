import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppButton = () => {
  const phoneNumber = '905382582158'; // Format: country code + number (no + or spaces)
  const message = encodeURIComponent('Merhaba, ProMarkt7 hakkında bilgi almak istiyorum.');

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg hover:scale-110 transition-transform z-50"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
};

export default WhatsAppButton;

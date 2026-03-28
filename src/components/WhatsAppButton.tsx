const WHATSAPP_NUMBER = "919894354432";

export const getWhatsAppUrl = (message = "Hi! I'm interested in Divya Crackers products.") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const WhatsAppButton = () => {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <span className="text-2xl">💬</span>
    </a>
  );
};

export default WhatsAppButton;

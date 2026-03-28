import heroBg from "@/assets/hero/hero-bg.jpg";
import { getWhatsAppUrl } from "@/components/WhatsAppButton";

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Banner */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Fireworks" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/70" />
        <h1 className="relative z-10 text-4xl md:text-5xl font-display font-black text-gradient-festive">Contact Us</h1>
      </section>

      <section className="section-darker py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="sparkle-border rounded-xl p-8 space-y-6">
              <h2 className="text-2xl font-display font-bold text-accent">Get in Touch</h2>

              <div className="space-y-4">
                <div className="bg-muted rounded-lg p-4">
                  <h3 className="font-bold text-foreground mb-1">📞 Phone</h3>
                  <a href="tel:9894354432" className="text-primary hover:underline">9894354432</a>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <h3 className="font-bold text-foreground mb-1">✉️ Email</h3>
                  <a href="mailto:jkenterprises_hsr@yahoo.co.in" className="text-primary hover:underline">
                    jkenterprises_hsr@yahoo.co.in
                  </a>
                </div>

                <div className="bg-muted rounded-lg p-4">
                  <h3 className="font-bold text-foreground mb-1">📍 Address</h3>
                  <p className="text-muted-foreground">
                    74/A, 27/1, Bagalur Road, Next to GoColors, Hosur - 635109
                  </p>
                </div>

                <div className="bg-primary/10 border border-primary/30 rounded-lg p-4">
                  <h3 className="font-bold text-accent mb-1">🕘 Business Hours</h3>
                  <p className="text-foreground font-semibold">9:00 AM – 9:00 PM</p>
                  <p className="text-muted-foreground text-sm">Open all 365 days a year!</p>
                </div>
              </div>

              <div className="flex gap-4">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-[#25D366] text-primary-foreground font-bold hover:opacity-90 transition-all"
                >
                  WhatsApp Us
                </a>
                <a
                  href="https://facebook.com/divyacrackers2005"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-lg bg-festive-blue text-primary-foreground font-bold hover:opacity-90 transition-all"
                >
                  Facebook
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="sparkle-border rounded-xl overflow-hidden h-[400px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.5!2d77.8292!3d12.73814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae70ce79f3d365%3A0xe6c2700efd2cab06!2sDIVYA%20CRACKERS!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Divya Crackers Location"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

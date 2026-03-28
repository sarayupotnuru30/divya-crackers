import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import enquiryBanner from "@/assets/enquiry/enquiry-banner.jpg";
import { products } from "@/data/products";

const WHATSAPP_NUMBER = "919894354432";

const Enquiry = () => {
  const [searchParams] = useSearchParams();
  const productId = searchParams.get("product");
  const selectedProduct = productId ? products.find((p) => p.id === productId) : null;

  const [form, setForm] = useState({ name: "", address: "", phone: "", productId: "" });

  useEffect(() => {
    if (productId) {
      setForm((prev) => ({ ...prev, productId }));
    }
  }, [productId]);

  const chosenProduct = form.productId ? products.find((p) => p.id === form.productId) : null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const productName = chosenProduct?.name || "your products";
    const message = `Hi! I'd like to place an order.\n\nName: ${form.name}\nAddress: ${form.address}\nPhone: ${form.phone}\nProduct: ${productName}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <div className="pt-20">
      {/* Banner */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <img src={enquiryBanner} alt="Enquiry" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={600} />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-black text-gradient-festive">Place Your Order</h1>
          <p className="text-muted-foreground mt-2">Fill in your details and we'll connect via WhatsApp</p>
        </div>
      </section>

      <section className="section-darker py-16">
        <div className="container mx-auto px-4 max-w-2xl">
          {/* Selected Product Preview */}
          {selectedProduct && (
            <div className="sparkle-border rounded-xl p-4 mb-8 flex items-center gap-4">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-24 h-24 rounded-lg object-cover"
              />
              <div>
                <h3 className="font-display text-lg font-bold text-accent">{selectedProduct.name}</h3>
                <p className="text-muted-foreground text-sm">{selectedProduct.description}</p>
                <span className="text-xs text-primary mt-1 inline-block">{selectedProduct.category}</span>
              </div>
            </div>
          )}

          <div className="sparkle-border rounded-xl p-8">
            <p className="text-muted-foreground mb-6 text-center">
              Interested in our products? Fill out the form below and submit to connect with us on WhatsApp. We'll get back to you
              with pricing and availability!
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Address</label>
                <input
                  type="text"
                  required
                  value={form.address}
                  onChange={(e) => setForm({ ...form, address: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your delivery address"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Your phone number"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">Select Product</label>
                <select
                  value={form.productId}
                  onChange={(e) => setForm({ ...form, productId: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">-- Select a product (optional) --</option>
                  {products.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} — {p.category}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-gradient-festive text-primary-foreground font-bold text-lg hover:opacity-90 transition-all festive-glow-sm"
              >
                Submit via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Enquiry;

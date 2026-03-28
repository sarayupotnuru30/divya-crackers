import { Link } from "react-router-dom";
import heroBg from "@/assets/hero/hero-bg.jpg";
import logo from "@/assets/logo/divya-crackers-logo.jpeg";
import { getWhatsAppUrl } from "@/components/WhatsAppButton";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Index = () => {
  const featuredProducts = products.slice(0, 6);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Fireworks display" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-background/60" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <img
            src={logo}
            alt="Divya Crackers Logo"
            className="w-32 h-32 mx-auto rounded-full object-cover mb-6 festive-glow animate-float"
          />
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-black mb-4 animate-fade-in-up">
            <span className="text-gradient-festive">Celebrate Every Moment</span>
            <br />
            <span className="text-foreground">with Divya Crackers</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Premium Fireworks Since 2005
          </p>
          <div className="flex flex-wrap gap-4 justify-center opacity-0 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link
              to="/products"
              className="px-8 py-3 rounded-lg bg-gradient-festive text-primary-foreground font-bold text-lg hover:opacity-90 transition-all festive-glow-sm"
            >
              Explore Products
            </Link>
            <Link
              to="/enquiry"
              className="px-8 py-3 rounded-lg border-2 border-accent text-accent font-bold text-lg hover:bg-accent hover:text-accent-foreground transition-all"
            >
              Enquire Now
            </Link>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg bg-[#25D366] text-primary-foreground font-bold text-lg hover:opacity-90 transition-all"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="section-darker py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-black text-center mb-4 text-gradient-festive">
            Featured Products
          </h2>
          <p className="text-center text-muted-foreground mb-12">Our best-selling fireworks for your celebration</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-block px-8 py-3 rounded-lg bg-gradient-festive text-primary-foreground font-bold hover:opacity-90 transition-all"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-dark py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display font-black text-center mb-12 text-gradient-festive">
            Why Choose Divya Crackers?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Since 2005", desc: "Two decades of trusted service and quality fireworks" },
              { title: "Premium Quality", desc: "Authorized dealers for Standard & Ellis Fireworks" },
              { title: "365 Days Open", desc: "We're always here for your celebrations" },
            ].map((item) => (
              <div key={item.title} className="sparkle-border rounded-xl p-8 text-center card-glow transition-all duration-300">
                <h3 className="font-display text-2xl font-bold text-accent mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

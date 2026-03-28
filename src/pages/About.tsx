import heroBg from "@/assets/hero/hero-bg.jpg";

const About = () => {
  return (
    <div className="pt-20">
      {/* Banner */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Fireworks" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/70" />
        <h1 className="relative z-10 text-4xl md:text-5xl font-display font-black text-gradient-festive">About Us</h1>
      </section>

      <section className="section-darker py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="sparkle-border rounded-xl p-8 md:p-12 space-y-6">
            <h2 className="text-3xl font-display font-bold text-accent">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed">
              Established in <span className="text-accent font-bold">2005</span>, Divya Crackers has been lighting up celebrations
              across Hosur and beyond for nearly two decades. What started as a small fireworks shop has grown into one of the
              most trusted names in the fireworks industry.
            </p>

            <h2 className="text-3xl font-display font-bold text-accent pt-4">Authorized Dealers</h2>
            <p className="text-muted-foreground leading-relaxed">
              We are proud authorized dealers for two of India's most renowned fireworks manufacturers:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-muted rounded-lg p-6 text-center">
                <h3 className="font-display text-xl font-bold text-festive-gold">Standard Fireworks</h3>
                <p className="text-muted-foreground text-sm mt-2">India's leading fireworks brand</p>
              </div>
              <div className="bg-muted rounded-lg p-6 text-center">
                <h3 className="font-display text-xl font-bold text-festive-gold">Ellis Fireworks</h3>
                <p className="text-muted-foreground text-sm mt-2">Premium quality crackers</p>
              </div>
            </div>

            <h2 className="text-3xl font-display font-bold text-accent pt-4">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Quality", desc: "Only the finest products from certified manufacturers" },
                { title: "Safety", desc: "Strict safety standards in storage and handling" },
                { title: "Variety", desc: "500+ products across 15+ categories" },
              ].map((v) => (
                <div key={v.title} className="bg-muted rounded-lg p-6 text-center card-glow transition-all duration-300">
                  <h3 className="font-display text-lg font-bold text-primary mb-2">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

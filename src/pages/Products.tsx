import { useState } from "react";
import heroBg from "@/assets/hero/hero-bg.jpg";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

import heroBg from "@/assets/hero/hero-bg.jpg";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Products = () => {
  return (
    <div className="pt-20">
      {/* Banner */}
      <section className="relative h-64 md:h-80 flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Fireworks" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-background/70" />
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-black text-gradient-festive">Our Products</h1>
          <p className="text-muted-foreground mt-2">Explore our complete range of fireworks</p>
        </div>
      </section>

      <section className="section-darker py-16">
        <div className="container mx-auto px-4">
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default Products;

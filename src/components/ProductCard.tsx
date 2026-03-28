import { Link } from "react-router-dom";

interface ProductCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
}

const ProductCard = ({ id, name, description, image }: ProductCardProps) => {
  return (
    <div className="group sparkle-border rounded-xl overflow-hidden transition-all duration-300 card-glow">
      <div className="relative overflow-hidden aspect-square">
        <img
          src={image}
          alt={name}
          loading="lazy"
          width={400}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 bg-card">
        <h3 className="font-display text-lg font-bold text-accent mb-1">{name}</h3>
        <p className="text-muted-foreground text-sm mb-3">{description}</p>
        <Link
          to={`/enquiry?product=${encodeURIComponent(id)}`}
          className="inline-block px-4 py-2 rounded-lg bg-gradient-festive text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Enquire Now
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;

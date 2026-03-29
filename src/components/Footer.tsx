// import { Link } from "react-router-dom";
// import logo from "@/assets/logo/divya-crackers-logo.jpeg";

// const Footer = () => {
//   return (
//     <footer className="bg-card border-t border-border">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div>
//             <div className="flex items-center gap-3 mb-4">
//               <img src={logo} alt="Divya Crackers" className="h-12 w-12 rounded-full object-cover" />
//               <span className="text-xl font-display font-bold text-gradient-festive">Divya Crackers</span>
//             </div>
//             <p className="text-muted-foreground text-sm leading-relaxed">
//               Premium fireworks dealer since 2005. Authorized dealers for Standard & Ellis Fireworks.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-display text-lg font-bold text-accent mb-4">Quick Links</h4>
//             <div className="flex flex-col gap-2">
//               {[
//                 { name: "Home", path: "/" },
//                 { name: "About", path: "/about" },
//                 { name: "Products", path: "/products" },
//                 { name: "Enquiry", path: "/enquiry" },
//                 { name: "Contact", path: "/contact" },
//               ].map((link) => (
//                 <Link key={link.path} to={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm">
//                   {link.name}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Product Categories */}
//           <div>
//             <h4 className="font-display text-lg font-bold text-accent mb-4">Categories</h4>
//             <div className="flex flex-col gap-2">
//               {["Multi Color Shots", "Rockets", "Flower Pots", "Sparklers", "Kids Special", "Fountains"].map((cat) => (
//                 <Link key={cat} to="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">
//                   {cat}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-display text-lg font-bold text-accent mb-4">Contact Us</h4>
//             <div className="flex flex-col gap-3 text-sm text-muted-foreground">
//               <p>📞 9894354432</p>
//               <p>✉️ jkenterprises_hsr@yahoo.co.in</p>
//               <p>📍 74/A, 27/1, Bagalur Road, Next to GoColors, Hosur - 635109</p>
//               <p>🕘 9:00 AM – 9:00 PM (All 365 days)</p>
//               <div className="flex gap-4 mt-2">
//                 <a href="https://facebook.com/divyacrackers2005" target="_blank" rel="noopener noreferrer" className="text-festive-blue hover:text-primary transition-colors">
//                   Facebook
//                 </a>
//                 <a href="https://instagram.com/divyacrackers2005" target="_blank" rel="noopener noreferrer" className="text-festive-orange hover:text-primary transition-colors">
//                   Instagram
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-border mt-8 pt-6 text-center text-sm text-muted-foreground">
//           © {new Date().getFullYear()} Divya Crackers. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;






import { Link } from "react-router-dom";
import { Heart } from "lucide-react"; // Added for the Heart icon
import logo from "@/assets/logo/divya-crackers-logo.jpeg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Divya Crackers" className="h-12 w-12 rounded-full object-cover" />
              <span className="text-xl font-display font-bold text-gradient-festive">Divya Crackers</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Premium fireworks dealer since 2005. Authorized dealers for Standard & Ellis Fireworks.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-bold text-accent mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Products", path: "/products" },
                { name: "Enquiry", path: "/enquiry" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <Link key={link.path} to={link.path} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="font-display text-lg font-bold text-accent mb-4">Categories</h4>
            <div className="flex flex-col gap-2">
              {["Multi Color Shots", "Rockets", "Flower Pots", "Sparklers", "Kids Special", "Fountains"].map((cat) => (
                <Link key={cat} to="/products" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {cat}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-bold text-accent mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <p>📞 9894354432</p>
              <p>✉️ jkenterprises_hsr@yahoo.co.in</p>
              <p>📍 74/A, 27/1, Bagalur Road, Next to GoColors, Hosur - 635109</p>
              <p>🕘 9:00 AM – 9:00 PM (All 365 days)</p>
              <div className="flex gap-4 mt-2">
                <a href="https://facebook.com/divyacrackers2005" target="_blank" rel="noopener noreferrer" className="text-festive-blue hover:text-primary transition-colors">
                  Facebook
                </a>
                <a href="https://instagram.com/divyacrackers2005" target="_blank" rel="noopener noreferrer" className="text-festive-orange hover:text-primary transition-colors">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-border mt-8 pt-6 flex flex-col items-center gap-4 text-sm text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Divya Crackers. All rights reserved.
          </div>
          
          <div className="flex justify-center items-center gap-1">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-red-500" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-600 hover:underline font-medium"
            >
              <img
                src="https://www.staffarc.in/images/Staffarc-logo.png"
                alt="StaffArc logo"
                className="h-5 w-5 object-contain"
              />
              StaffArc
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
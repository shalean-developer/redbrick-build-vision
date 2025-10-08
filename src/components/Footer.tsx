import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-primary">TEAM</span> EDLICK
            </h3>
            <p className="text-sm mb-4 opacity-90">
              Building South Africa's Future with Integrity and Innovation.
            </p>
            <p className="text-xs opacity-75">
              © 2025 Team Edlick Construction. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-primary transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <div>
                  <p>Bishop: +27 82 758 7466</p>
                  <p>Sam: +27 68 594 3091</p>
                  <p>Lehan: +27 72 674 6457</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <p>The Watershed, D03 Dock Road<br />Waterfront, South Africa</p>
              </li>
            </ul>
          </div>

          {/* Banking Info */}
          <div>
            <h4 className="font-semibold mb-4">Banking Details</h4>
            <div className="text-sm space-y-1 opacity-90">
              <p><strong>Bank:</strong> Nedbank</p>
              <p><strong>Account:</strong> 1211383040</p>
              <p><strong>Branch:</strong> 10690900</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm opacity-75">
          <p>
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            {" | "}
            <Link to="#" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

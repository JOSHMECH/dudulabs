import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-muted border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 gradient-hero bg-clip-text text-transparent">
              DuduLabs
            </h3>
            <p className="text-muted-foreground">
              Africa's leading creative hub connecting talented freelancers with global opportunities.
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/waitlist" className="text-muted-foreground hover:text-primary transition-colors">
                  Join Waitlist
                </Link>
              </li>
              <li>
                <Link to="/coming-soon" className="text-muted-foreground hover:text-primary transition-colors">
                  Coming Soon
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4">Get In Touch</h4>
            <p className="text-muted-foreground">
              Ready to join Africa's creative revolution? Connect with us today.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DuduLabs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

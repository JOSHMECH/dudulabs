import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Rocket, Clock, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const ComingSoon = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <div className="w-24 h-24 rounded-full gradient-hero flex items-center justify-center mx-auto mb-6">
              <Rocket className="text-primary-foreground" size={48} />
            </div>
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Exciting Things
              <span className="block gradient-hero bg-clip-text text-transparent">
                Coming Soon
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              We're building something amazing for Africa's creative community. 
              Stay tuned for incredible features and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Project Matching</h3>
              <p className="text-muted-foreground">
                AI-powered matching between talents and perfect project opportunities
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <Sparkles className="text-secondary" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Portfolio Builder</h3>
              <p className="text-muted-foreground">
                Showcase your work with beautiful, customizable portfolio templates
              </p>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-2">Learning Hub</h3>
              <p className="text-muted-foreground">
                Access courses, mentorship, and resources to level up your skills
              </p>
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="text-lg text-muted-foreground mb-8">
              Want to be the first to know when we launch these features?
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/waitlist">Join the Waitlist</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ComingSoon;

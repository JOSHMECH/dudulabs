import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MessageCircle, Users, Rocket } from "lucide-react";
import { useEffect } from "react";

const WaitingArea = () => {
  useEffect(() => {
    // Auto-redirect to WhatsApp after 3 seconds if user doesn't click
    const timer = setTimeout(() => {
      window.open("https://chat.whatsapp.com/your-freelancer-waiting-group-link", "_blank");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleJoinGroup = () => {
    window.open("https://chat.whatsapp.com/your-freelancer-waiting-group-link", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center">
        <div className="container mx-auto max-w-3xl text-center">
          <div className="mb-8 animate-fade-in">
            <div className="w-24 h-24 rounded-full gradient-hero flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="text-primary-foreground" size={48} />
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Welcome to the
              <span className="block gradient-hero bg-clip-text text-transparent">
                Waiting Area
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              You're almost there! Join our WhatsApp community to connect with fellow creatives, 
              get early updates, and be first in line when we launch.
            </p>
          </div>

          <Card className="p-8 mb-8 animate-fade-in">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <Users className="text-primary-foreground" size={24} />
                </div>
                <div className="text-left">
                  <h3 className="font-heading font-semibold mb-2">Connect with Creatives</h3>
                  <p className="text-muted-foreground">
                    Network with fellow designers, developers, and storytellers in our community
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-secondary flex items-center justify-center flex-shrink-0">
                  <Rocket className="text-secondary-foreground" size={24} />
                </div>
                <div className="text-left">
                  <h3 className="font-heading font-semibold mb-2">Get Early Access</h3>
                  <p className="text-muted-foreground">
                    Be among the first to access new features, projects, and opportunities
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="text-primary-foreground" size={24} />
                </div>
                <div className="text-left">
                  <h3 className="font-heading font-semibold mb-2">Stay Updated</h3>
                  <p className="text-muted-foreground">
                    Receive exclusive updates, tips, and announcements directly in the group
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <div className="animate-fade-in">
            <Button 
              variant="hero" 
              size="lg"
              onClick={handleJoinGroup}
              className="mb-4"
            >
              <MessageCircle className="mr-2" size={20} />
              Join WhatsApp Group Now
            </Button>
            <p className="text-sm text-muted-foreground">
              Redirecting automatically in a few seconds...
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WaitingArea;

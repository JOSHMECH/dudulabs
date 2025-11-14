import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Briefcase } from "lucide-react";

const Waitlist = () => {
  const handleTalentClick = () => {
    // Replace with your actual WhatsApp group link for talents
    window.open("https://chat.whatsapp.com/your-talent-group-link", "_blank");
  };

  const handleBusinessClick = () => {
    // Replace with your actual WhatsApp group link for businesses
    window.open("https://chat.whatsapp.com/your-business-group-link", "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6 animate-fade-in">
              Join the
              <span className="block gradient-hero bg-clip-text text-transparent">
                Waitlist
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Be part of Africa's creative revolution. Choose your path and join our community today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Talent Card */}
            <Card className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full gradient-primary flex items-center justify-center mx-auto mb-6">
                  <Users className="text-primary-foreground" size={40} />
                </div>
                <h2 className="text-3xl font-heading font-bold mb-4">For Talents</h2>
                <p className="text-muted-foreground mb-6">
                  Are you a designer, developer, or creative storyteller? Join our talent collective 
                  to access real projects, build your portfolio, and connect with clients directly.
                </p>
                <ul className="text-left space-y-3 mb-8 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Access to paid projects
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Portfolio building opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Mentorship and skill development
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    Community collaboration
                  </li>
                </ul>
                <Button 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={handleTalentClick}
                >
                  Join as Talent
                </Button>
              </div>
            </Card>

            {/* Business Card */}
            <Card className="p-8 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full gradient-secondary flex items-center justify-center mx-auto mb-6">
                  <Briefcase className="text-secondary-foreground" size={40} />
                </div>
                <h2 className="text-3xl font-heading font-bold mb-4">For Businesses</h2>
                <p className="text-muted-foreground mb-6">
                  Looking for world-class African talent? Connect with verified creatives who can 
                  bring your vision to life with quality work and unique perspectives.
                </p>
                <ul className="text-left space-y-3 mb-8 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    Verified, skilled professionals
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    Direct communication with talent
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    Quality work, competitive rates
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">✓</span>
                    Support African innovation
                  </li>
                </ul>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full"
                  onClick={handleBusinessClick}
                >
                  Join as Business
                </Button>
              </div>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <p className="text-muted-foreground">
              By joining the waitlist, you'll be among the first to access DuduLabs when we launch. 
              We'll keep you updated on our progress and exciting opportunities.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Waitlist;

import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Users, Briefcase, TrendingUp, Globe, Rocket, Heart } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in">
            Africa's Leading
            <span className="block gradient-hero bg-clip-text text-transparent">
              Creative Hub
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Connecting African freelancers directly to clients. Build portfolios, work on paid projects, 
            and access mentorship opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button variant="hero" size="lg" asChild>
              <Link to="/waitlist">Join as Talent</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/waitlist">Join as Business</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <Users className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Talent Collective</h3>
              <p className="text-muted-foreground">
                A vibrant community where designers, developers, and storytellers connect, collaborate, 
                and grow together.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 rounded-lg gradient-secondary flex items-center justify-center mb-4">
                <Briefcase className="text-secondary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Marketplace</h3>
              <p className="text-muted-foreground">
                Access real paid projects from verified clients. Build your portfolio while earning 
                from your creative skills.
              </p>
            </Card>

            <Card className="p-6 hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
                <TrendingUp className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Growth Platform</h3>
              <p className="text-muted-foreground">
                Mentorship opportunities, skill development, and resources to help you build 
                a sustainable digital career.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
            About DuduLabs
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              <strong className="text-foreground">DuduLabs is a creative-tech startup</strong> that connects 
              African freelancers directly to clients, eliminating middlemen and empowering creatives to grow 
              through real projects, collaboration, and monetization.
            </p>
            <p>
              We function as both a <strong className="text-foreground">talent collective and a marketplace</strong>, 
              where designers, developers, and storytellers can build portfolios, work on paid projects, and access 
              mentorship opportunities.
            </p>
            <p>
              Our goal is to make DuduLabs <strong className="text-foreground">Africa's leading creative hub</strong> — 
              a space where brands find verified, world-class African talent and creatives build sustainable digital careers.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-center mb-12">
            Why Choose DuduLabs?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                <Globe className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">No Middlemen</h3>
              <p className="text-muted-foreground">
                Connect directly with clients and keep more of what you earn
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full gradient-secondary flex items-center justify-center mx-auto mb-4">
                <Rocket className="text-secondary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Real Projects</h3>
              <p className="text-muted-foreground">
                Work on actual paid projects that build your portfolio and skills
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary-foreground" size={32} />
              </div>
              <h3 className="text-xl font-heading font-semibold mb-3">Community Support</h3>
              <p className="text-muted-foreground">
                Access mentorship and collaborate with fellow African creatives
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ready to Join the Revolution?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you're a talented creative or a business looking for world-class African talent, 
            DuduLabs is your platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

export default Index;

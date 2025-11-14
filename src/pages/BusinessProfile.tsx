import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Users, Briefcase, Globe } from "lucide-react";

const BusinessProfile = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          {/* Profile Header */}
          <Card className="p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-lg gradient-secondary flex items-center justify-center text-secondary-foreground text-2xl font-bold">
                  TC
                </div>
              </div>
              
              <div className="flex-grow">
                <h1 className="text-3xl font-heading font-bold mb-2">TechCorp Solutions</h1>
                <p className="text-xl text-muted-foreground mb-3">Digital Agency & Consulting</p>
                <div className="flex items-center gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>Nairobi, Kenya</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>50-100 employees</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>Web Development</Badge>
                  <Badge>Mobile Apps</Badge>
                  <Badge>UI/UX Design</Badge>
                  <Badge>Branding</Badge>
                </div>
                <div className="flex gap-3">
                  <Button variant="hero">Contact Us</Button>
                  <Button variant="outline">View Projects</Button>
                </div>
              </div>
            </div>
          </Card>

          {/* About Section */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-heading font-bold mb-4">About Our Company</h2>
            <p className="text-muted-foreground mb-4">
              TechCorp Solutions is a leading digital agency specializing in creating innovative 
              digital experiences for businesses across Africa. We work with talented freelancers 
              through DuduLabs to deliver world-class projects.
            </p>
            <p className="text-muted-foreground">
              Our mission is to empower businesses with cutting-edge technology solutions while 
              supporting the growth of African creative talent.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Services */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                  <Briefcase className="text-primary-foreground" size={20} />
                </div>
                <h2 className="text-2xl font-heading font-bold">Services</h2>
              </div>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Custom Web Development
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Mobile App Development
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  UI/UX Design Services
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Brand Identity & Strategy
                </li>
              </ul>
            </Card>

            {/* Company Stats */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg gradient-secondary flex items-center justify-center">
                  <Globe className="text-secondary-foreground" size={20} />
                </div>
                <h2 className="text-2xl font-heading font-bold">Our Impact</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-1">200+</h3>
                  <p className="text-muted-foreground">Projects Completed</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-secondary mb-1">50+</h3>
                  <p className="text-muted-foreground">Talents Collaborated With</p>
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-primary mb-1">15+</h3>
                  <p className="text-muted-foreground">Countries Served</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Active Projects */}
          <Card className="p-8 mt-8">
            <h2 className="text-2xl font-heading font-bold mb-6">Current Opportunities</h2>
            <div className="space-y-4">
              <div className="p-4 border border-border rounded-lg hover:shadow-sm transition-all">
                <h3 className="font-semibold mb-2">UI Designer for E-commerce Platform</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Looking for an experienced UI designer to redesign our e-commerce platform
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">UI Design</Badge>
                  <Badge variant="secondary">Figma</Badge>
                  <Badge variant="secondary">E-commerce</Badge>
                </div>
              </div>
              
              <div className="p-4 border border-border rounded-lg hover:shadow-sm transition-all">
                <h3 className="font-semibold mb-2">React Developer for Mobile App</h3>
                <p className="text-muted-foreground text-sm mb-3">
                  Seeking a React Native developer for a new fintech mobile application
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">React Native</Badge>
                  <Badge variant="secondary">TypeScript</Badge>
                  <Badge variant="secondary">Mobile</Badge>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessProfile;

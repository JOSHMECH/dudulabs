import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { MapPin, Star, Briefcase, Award } from "lucide-react";

const FreelancerProfile = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          {/* Profile Header */}
          <Card className="p-8 mb-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full gradient-primary flex items-center justify-center text-primary-foreground text-4xl font-bold">
                  JD
                </div>
              </div>
              
              <div className="flex-grow">
                <h1 className="text-3xl font-heading font-bold mb-2">John Doe</h1>
                <p className="text-xl text-muted-foreground mb-3">UI/UX Designer & Developer</p>
                <div className="flex items-center gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>Lagos, Nigeria</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="fill-secondary text-secondary" />
                    <span>4.9 (24 reviews)</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge>UI Design</Badge>
                  <Badge>React</Badge>
                  <Badge>Figma</Badge>
                  <Badge>Tailwind CSS</Badge>
                  <Badge>TypeScript</Badge>
                </div>
                <Button variant="hero">Contact Me</Button>
              </div>
            </div>
          </Card>

          {/* About Section */}
          <Card className="p-8 mb-8">
            <h2 className="text-2xl font-heading font-bold mb-4">About Me</h2>
            <p className="text-muted-foreground">
              I'm a passionate UI/UX designer and frontend developer with 5+ years of experience 
              creating beautiful, user-friendly digital experiences. I specialize in building 
              modern web applications with React and designing intuitive interfaces in Figma.
            </p>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Experience */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                  <Briefcase className="text-primary-foreground" size={20} />
                </div>
                <h2 className="text-2xl font-heading font-bold">Experience</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Senior UI Designer</h3>
                  <p className="text-muted-foreground text-sm">TechCorp Ltd • 2021 - Present</p>
                </div>
                <div>
                  <h3 className="font-semibold">Frontend Developer</h3>
                  <p className="text-muted-foreground text-sm">StartupHub • 2019 - 2021</p>
                </div>
              </div>
            </Card>

            {/* Achievements */}
            <Card className="p-8">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg gradient-secondary flex items-center justify-center">
                  <Award className="text-secondary-foreground" size={20} />
                </div>
                <h2 className="text-2xl font-heading font-bold">Achievements</h2>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Top Rated Designer</h3>
                  <p className="text-muted-foreground text-sm">DuduLabs 2024</p>
                </div>
                <div>
                  <h3 className="font-semibold">100+ Projects Completed</h3>
                  <p className="text-muted-foreground text-sm">With 98% satisfaction rate</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Portfolio Section */}
          <Card className="p-8 mt-8">
            <h2 className="text-2xl font-heading font-bold mb-6">Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((item) => (
                <div key={item} className="aspect-video bg-muted rounded-lg hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer" />
              ))}
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FreelancerProfile;

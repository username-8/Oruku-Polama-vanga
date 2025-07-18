import { WaitlistForm } from "@/components/WaitlistForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TreePine, 
  Users, 
  Home, 
  Heart, 
  Leaf, 
  MapPin, 
  Phone, 
  Mail,
  ArrowRight,
  Star,
  Award,
  Coffee
} from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 village-panorama-loop opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-transparent to-background/80"></div>
        <div className="absolute inset-0 bg-grain-texture opacity-20"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-primary leading-tight drop-shadow-lg">
              Oruku Polama
            </h1>
            
            <p className="text-lg md:text-xl text-primary/90 mb-6 italic font-medium drop-shadow-md">
              foot in mud & harts in homes: a road to roots to sow sustainability
            </p>
            
            <p className="text-xl md:text-2xl text-foreground/90 mb-8 leading-relaxed drop-shadow-sm backdrop-blur-sm bg-background/30 px-6 py-3 rounded-lg border border-primary/20">
              Experience authentic village life, sustainable farming, and Tamil Nadu's rich heritage 
              through carefully curated agri-tourism stays
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="rustic-button text-primary-foreground px-8 py-4 text-lg hover:shadow-lg transition-all duration-300">
                Join as Guest
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary/60 text-primary hover:bg-primary/90 hover:text-primary-foreground px-8 py-4 text-lg backdrop-blur-sm bg-background/40 hover:shadow-lg transition-all duration-300">
                Become a Host
                <Home className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="text-center backdrop-blur-sm bg-background/40 p-6 rounded-xl border border-primary/20 hover:bg-background/60 transition-all duration-300">
                <div className="bg-accent/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-accent/40">
                  <Heart className="h-8 w-8 text-primary drop-shadow-sm" />
                </div>
                <h3 className="font-semibold mb-2 text-primary">Authentic Experiences</h3>
                <p className="text-foreground/80 text-sm">Live with local families, participate in farm activities, and experience genuine village culture</p>
              </div>
              
              <div className="text-center backdrop-blur-sm bg-background/40 p-6 rounded-xl border border-primary/20 hover:bg-background/60 transition-all duration-300">
                <div className="bg-accent/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-accent/40">
                  <Leaf className="h-8 w-8 text-primary drop-shadow-sm" />
                </div>
                <h3 className="font-semibold mb-2 text-primary">Sustainable Tourism</h3>
                <p className="text-foreground/80 text-sm">Support rural communities while enjoying eco-friendly and culturally immersive experiences</p>
              </div>
              
              <div className="text-center backdrop-blur-sm bg-background/40 p-6 rounded-xl border border-primary/20 hover:bg-background/60 transition-all duration-300">
                <div className="bg-accent/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-accent/40">
                  <Users className="h-8 w-8 text-primary drop-shadow-sm" />
                </div>
                <h3 className="font-semibold mb-2 text-primary">Community Impact</h3>
                <p className="text-foreground/80 text-sm">Every stay directly empowers local families and preserves traditional Tamil Nadu heritage</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-card">
        <div className="container mx-auto relative z-10">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
              Bridging Urban & Rural Tamil Nadu
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Oruku Polama transforms rural homes into premium agri-tourism destinations, 
              offering city dwellers authentic village experiences while creating sustainable 
              income streams for farming communities across Tamil Nadu.
            </p>
            
            {/* Problem Statement Section */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-4">The Challenge We Address</h3>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Rural Communities Face:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Limited diversified income streams with farmers earning below ₹5,502 per month
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Lack of structured, quality-controlled infrastructure to access growing tourism markets
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Rich agricultural heritage and cultural traditions underutilized economically
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-primary">Urban Travelers Struggle With:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Finding authentic, high-quality rural getaways for genuine cultural immersion
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      IT professionals from India's 5.4 million-strong sector seeking unique stress-reduction experiences
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      Families wanting meaningful domestic alternatives to international travel
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Mission Statement */}
            <div className="bg-primary/5 rounded-2xl p-8 mb-12 border border-primary/20">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower rural communities in Tamil Nadu by transforming their homes and farms into meticulously curated, 
                high-quality agri-tourism destinations. We provide expert architectural consultation and direct on-site setup 
                for hospitality, meals, and activities, fostering economic growth, preserving cultural heritage, and creating 
                a direct bridge for meaningful connection between urban and rural life. We support local micro-entrepreneurs 
                by integrating their products into our guest offerings, tapping into India's experiential travel market 
                projected to reach <strong className="text-primary">USD 45 billion by 2027</strong>.
              </p>
            </div>
            
            {/* Vision Statement */}
            <div className="bg-accent/10 rounded-2xl p-8 mb-12 border border-accent/30">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading and most trusted platform for authentic village agri-tourism in Tamil Nadu, 
                recognized globally for setting the standard in sustainable rural development and cultural exchange. 
                We envision a future where vibrant village economies thrive through responsible tourism, significantly 
                augmenting rural incomes and empowering local entrepreneurs, while every traveler—from corporate teams 
                to families seeking genuine connection—discovers a deeper appreciation for the beauty, wisdom, and 
                sustainable practices of rural life.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-colors">
                <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Architectural Excellence</h3>
                <p className="text-muted-foreground">
                  Professional renovation services and expert consultants ensure every host home meets premium 
                  comfort and safety standards while preserving authentic village charm and character.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-colors">
                <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                  <Coffee className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Curated Experiences</h3>
                <p className="text-muted-foreground">
                  From farm-to-table meals and traditional games to cultural activities and hands-on farming, 
                  every experience is thoughtfully designed and professionally managed for authenticity.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-colors">
                <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Economic Empowerment</h3>
                <p className="text-muted-foreground">
                  We integrate local Self-Help Groups and micro-entrepreneurs, ensuring tourism revenue 
                  directly benefits entire village communities and creates sustainable livelihood opportunities.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-colors">
                <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Corporate Solutions</h3>
                <p className="text-muted-foreground">
                  Specialized team-building and stress-reduction experiences for IT professionals and corporate 
                  groups seeking meaningful alternatives to conventional retreat destinations.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-colors">
                <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                  <Leaf className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Sustainable Tourism</h3>
                <p className="text-muted-foreground">
                  Responsible travel practices that preserve cultural heritage, protect natural environments, 
                  and ensure long-term benefits for rural communities and their traditions.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-primary/20 hover:border-primary/40 transition-colors">
                <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Cultural Bridge</h3>
                <p className="text-muted-foreground">
                  Creating meaningful connections between urban and rural India through authentic cultural 
                  exchange, storytelling, and shared experiences that foster mutual understanding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary">
              What Makes Us Special
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We're not just another booking platform. We're community builders, 
              culture preservers, and sustainable tourism pioneers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="rustic-card hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-primary/30">
                  <Home className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Architectural Consultation</h3>
                <p className="text-muted-foreground">
                  Professional renovation services to transform rural homes into comfortable, 
                  safe, and beautiful guest accommodations.
                </p>
              </CardContent>
            </Card>

            <Card className="rustic-card hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-primary/30">
                  <TreePine className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Farm Activities</h3>
                <p className="text-muted-foreground">
                  Hands-on farming experiences including vegetable plucking, traditional cooking, 
                  and learning sustainable agricultural practices.
                </p>
              </CardContent>
            </Card>

            <Card className="rustic-card hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-primary/30">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Cultural Immersion</h3>
                <p className="text-muted-foreground">
                  Traditional games, local dance, storytelling sessions, and authentic 
                  interactions with village families and communities.
                </p>
              </CardContent>
            </Card>

            <Card className="rustic-card hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-primary/30">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Corporate Retreats</h3>
                <p className="text-muted-foreground">
                  Unique team-building experiences for IT professionals and corporate groups 
                  seeking stress relief and meaningful connection.
                </p>
              </CardContent>
            </Card>

            <Card className="rustic-card hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-primary/30">
                  <Leaf className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Slow Living</h3>
                <p className="text-muted-foreground">
                  Escape the fast pace of urban life with mindful, peaceful experiences 
                  that reconnect you with nature and simpler living.
                </p>
              </CardContent>
            </Card>

            <Card className="rustic-card hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 border-2 border-primary/30">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-primary">Local Products</h3>
                <p className="text-muted-foreground">
                  Take home curated hampers featuring authentic village products 
                  made by local Self-Help Groups and artisans.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section className="py-20 px-4 bg-red-soil">
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 soil-text-strong">
              Join Our Community
            </h2>
            <p className="text-lg soil-text">
              Be among the first to experience authentic Tamil Nadu village tourism. 
              Whether you're seeking adventure or wanting to share your home, we'd love to connect.
            </p>
          </div>
          
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto relative z-10">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Oruku Polama</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md mx-auto">
              Bridging urban and rural Tamil Nadu through authentic, sustainable village tourism experiences.
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-sm">contact@orukupolama.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-sm">+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">Tamil Nadu, India</span>
              </div>
            </div>
            
            <div className="text-center text-primary-foreground/60 text-sm">
              <p>&copy; 2024 Oruku Polama. Empowering rural communities through sustainable tourism.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
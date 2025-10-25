import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ValueCard from "@/components/ValueCard";
import TeamMember from "@/components/TeamMember";
import { Shield, Award, Target, Lightbulb, Users, TrendingUp, CheckCircle } from "lucide-react";
import teamImage from "@/assets/about-team.jpg";
const About = () => {
  const values = [{
    title: "Safety",
    description: "We prioritize the safety of our team, clients, and communities in every project we undertake.",
    icon: Shield
  }, {
    title: "Excellence",
    description: "Committed to delivering superior quality and exceeding expectations in all our work.",
    icon: Award
  }, {
    title: "Integrity",
    description: "Building trust through honest communication, transparency, and ethical business practices.",
    icon: Target
  }, {
    title: "Innovation",
    description: "Embracing new technologies and methods to continuously improve our services and efficiency.",
    icon: Lightbulb
  }, {
    title: "Accountability",
    description: "Taking full responsibility for our commitments and delivering on our promises.",
    icon: Users
  }, {
    title: "Potential",
    description: "Investing in our people's growth and unlocking their full potential through development.",
    icon: TrendingUp
  }, {
    title: "Results",
    description: "Focused on achieving measurable outcomes and creating lasting value for our clients.",
    icon: CheckCircle
  }];
  const team = [{
    name: "Bishop",
    role: "Site Manager",
    phone: "+27 82 758 7466"
  }, {
    name: "Sam",
    role: "Site Manager",
    phone: "+27 68 594 3091"
  }, {
    name: "Lehan Lynch",
    role: "Operations Manager",
    phone: "+27 72 674 6457"
  }, {
    name: "Duane Chiles",
    role: "Supervisor"
  }, {
    name: "Stuart Chiles",
    role: "Supervisor"
  }];
  return <div className="min-h-screen">
      <Helmet>
        <title>About Us | Team Edlick Construction - Building South Africa's Future</title>
        <meta name="description" content="Learn about Team Edlick Construction, a premier contractor operating across 5 provinces in South Africa. Discover our vision, mission, core values, and commitment to excellence." />
        <meta name="keywords" content="about Team Edlick, construction company South Africa, our values, vision mission, construction team" />
        <link rel="canonical" href="https://www.team-edlick.co.za/about" />
        <meta property="og:title" content="About Us | Team Edlick Construction" />
        <meta property="og:description" content="Learn about Team Edlick Construction, a premier contractor operating across 5 provinces in South Africa." />
        <meta property="og:url" content="https://www.team-edlick.co.za/about" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      
      <Hero title="About Team Edlick" subtitle="Building South Africa's Future with Expertise and Dedication" height="medium" />

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Team Edlick Construction is a premier contractor operating across five provinces in South Africa. 
                With a strong focus on infrastructure development and housing construction, we have established 
                ourselves as a trusted partner for projects of all scales.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our growth and success are built on a foundation of skilled professionals, innovative approaches, 
                and an unwavering commitment to quality. From residential developments to large-scale infrastructure 
                projects, we bring expertise, dedication, and integrity to every job.
              </p>
              <p className="text-lg text-muted-foreground">
                We don't just build structures—we create reality, shaping the communities and spaces where 
                South Africans live, work, and thrive.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-elevated">
              <img src={teamImage} alt="Team Edlick team meeting" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-background p-8 rounded-lg shadow-card">
              <div className="text-primary text-4xl font-bold mb-4">Vision</div>
              <p className="text-lg">
                To be the preferred contractor our customers want to work with and our employees are proud to work for.
              </p>
            </div>
            <div className="bg-background p-8 rounded-lg shadow-card">
              <div className="text-primary text-4xl font-bold mb-4">Mission</div>
              <p className="text-lg">
                To deliver high-quality, cost-effective projects through a motivated and skilled team, 
                consistently exceeding client expectations while maintaining the highest standards of safety and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide our decisions, actions, and relationships every day
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => <ValueCard key={index} {...value} />)}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted">
        
      </section>

      <Footer />
    </div>;
};
export default About;
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap, Users, TrendingUp } from "lucide-react";

const Careers = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you soon.",
      });
      setFormData({ name: "", email: "", phone: "", position: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const benefits = [
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Continuous training and skills development programs to advance your career.",
    },
    {
      icon: Users,
      title: "Team Environment",
      description: "Work with experienced professionals in a collaborative and supportive culture.",
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Clear career progression paths and opportunities to take on leadership roles.",
    },
    {
      icon: Briefcase,
      title: "Competitive Compensation",
      description: "Fair remuneration packages that recognize and reward your contributions.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Careers | Join Team Edlick Construction - Job Opportunities</title>
        <meta name="description" content="Join Team Edlick Construction. View current job openings for site managers, carpenters, and supervisors. Build your career with professional development and growth opportunities." />
        <meta name="keywords" content="construction jobs South Africa, careers, site manager jobs, carpenter jobs, construction supervisor, employment opportunities" />
        <link rel="canonical" href="https://www.team-edlick.co.za/careers" />
        <meta property="og:title" content="Careers | Join Team Edlick Construction" />
        <meta property="og:description" content="Join Team Edlick Construction. View current job openings and build your career with professional development opportunities." />
        <meta property="og:url" content="https://www.team-edlick.co.za/careers" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      
      <Hero
        title="Join Our Team"
        subtitle="Build Your Career with Team Edlick Construction"
        height="medium"
      />

      {/* Intro Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="mb-6">Why Work With Us?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              At Team Edlick Construction, we believe in developing potential and rewarding excellence. 
              We're always looking for talented, motivated individuals who share our commitment to quality, 
              safety, and innovation.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-3">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-center mb-12">Current Opportunities</h2>
            
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>Site Manager</span>
                    <span className="text-sm font-normal text-primary">Full-time</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Location: Various sites across South Africa</p>
                  <p className="text-sm">
                    Oversee construction projects, manage site operations, ensure safety compliance, 
                    and coordinate with teams to deliver projects on time and within budget.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>Skilled Carpenter</span>
                    <span className="text-sm font-normal text-primary">Full-time</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Location: Gauteng Province</p>
                  <p className="text-sm">
                    Execute high-quality carpentry work on residential and commercial projects. 
                    Must have experience with framing, finishing, and custom woodwork.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span>Construction Supervisor</span>
                    <span className="text-sm font-normal text-primary">Full-time</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-2">Location: Western Cape</p>
                  <p className="text-sm">
                    Lead on-site teams, ensure quality standards, maintain safety protocols, 
                    and report progress to project managers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="mb-4">Apply Now</h2>
              <p className="text-lg text-muted-foreground">
                Don't see the right position? Send us your details anyway—we're always 
                interested in hearing from talented professionals.
              </p>
            </div>

            <div className="bg-muted p-8 rounded-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="position">Position of Interest</Label>
                  <Input
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    placeholder="e.g., Site Manager, Carpenter, General Labor"
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Tell Us About Yourself *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Share your experience, skills, and why you want to join Team Edlick..."
                    rows={6}
                    className="mt-2"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Note: For resume submissions, please include your CV details in the message 
                  or email directly to our recruitment team.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;

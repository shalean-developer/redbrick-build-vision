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
import { Phone, Mail, MapPin, Building2 } from "lucide-react";
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible."
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 1000);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="min-h-screen">
      <Helmet>
        <title>Contact Us | Team Edlick Construction - Get a Free Quote</title>
        <meta name="description" content="Contact Team Edlick Construction for a free consultation. Call +27 68 594 3091 or +27 82 758 7466. Located at The Watershed, Waterfront, South Africa." />
        <meta name="keywords" content="contact Team Edlick, construction quote, free consultation, construction services South Africa, get in touch" />
        <link rel="canonical" href="https://www.team-edlick.co.za/contact" />
        <meta property="og:title" content="Contact Us | Team Edlick Construction" />
        <meta property="og:description" content="Contact Team Edlick Construction for a free consultation. Call +27 68 594 3091 or +27 82 758 7466." />
        <meta property="og:url" content="https://www.team-edlick.co.za/contact" />
        <meta property="og:type" content="website" />
      </Helmet>
      <Navbar />
      
      <Hero title="Contact Us" subtitle="Let's Start Building Your Vision Together" height="medium" />

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="mb-6">Get In Touch</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to discuss your construction project? Contact our team today 
                for a free consultation and quote.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Phone Numbers</h3>
                    <div className="space-y-1 text-muted-foreground">
                      <p>Sam: <a href="tel:+27685943091" className="hover:text-primary">+27 68 594 3091</a></p>
                      <p>Bishop: <a href="tel:+27827587466" className="hover:text-primary">+27 82 758 7466</a></p>
                      
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Office Location</h3>
                    <p className="text-muted-foreground">
                      The Watershed, D03 Dock Road<br />
                      Waterfront, South Africa
                    </p>
                  </div>
                </div>

                
              </div>

              {/* Map Embed */}
              <div className="mt-8 rounded-lg overflow-hidden shadow-card h-64">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.5897488894873!2d18.41932!3d-33.905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU0JzE4LjAiUyAxOMKwMjUnMDkuNiJF!5e0!3m2!1sen!2sza!4v1234567890" width="100%" height="100%" style={{
                border: 0
              }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Team Edlick Office Location" />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-muted p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+27 82 123 4567" className="mt-2" />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required placeholder="Tell us about your project..." rows={6} className="mt-2" />
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Contact;
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, Calendar } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (888) LUXE-123",
    subtext: "Mon-Fri from 8am to 6pm",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@luxe.com",
    subtext: "We'll respond within 24 hours",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "1 Luxury Tower, NYC",
    subtext: "By appointment only",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon - Sat: 9am - 7pm",
    subtext: "Sunday by appointment",
  },
];

const offices = [
  { city: "New York", address: "1 Luxury Tower, 5th Avenue", phone: "+1 (212) 555-0100" },
  { city: "London", address: "100 Mayfair Lane", phone: "+44 20 7123 4567" },
  { city: "Dubai", address: "Palm Jumeirah Tower", phone: "+971 4 123 4567" },
  { city: "Hong Kong", address: "88 Victoria Peak Road", phone: "+852 1234 5678" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    budget: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent!",
      description: "A LUXE advisor will contact you within 24 hours.",
    });
    
    setFormData({ name: "", email: "", phone: "", interest: "", budget: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero */}
        <section className="py-24 lg:py-32 bg-secondary/30">
          <div className="container mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="caption">Get in Touch</span>
              <h1 className="mt-4 mb-6">
                Let's Find Your <span className="text-gradient-gold">Dream Property</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Our team of luxury property specialists is ready to assist you 
                with personalized guidance and exclusive access.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="luxury-card bg-card p-6 text-center"
                >
                  <info.icon className="w-8 h-8 mx-auto mb-4 text-accent" />
                  <p className="font-medium mb-1">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.subtext}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Map */}
        <section className="py-24 lg:py-32">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Form */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-light mb-8">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="interest">I'm Interested In</Label>
                      <Select
                        value={formData.interest}
                        onValueChange={(value) => setFormData({ ...formData, interest: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select..." />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="buying">Buying a Property</SelectItem>
                          <SelectItem value="selling">Selling a Property</SelectItem>
                          <SelectItem value="investing">Investment Opportunities</SelectItem>
                          <SelectItem value="renting">Luxury Rentals</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget Range</Label>
                    <Select
                      value={formData.budget}
                      onValueChange={(value) => setFormData({ ...formData, budget: value })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select budget range..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5m">$1M - $5M</SelectItem>
                        <SelectItem value="5-10m">$5M - $10M</SelectItem>
                        <SelectItem value="10-25m">$10M - $25M</SelectItem>
                        <SelectItem value="25-50m">$25M - $50M</SelectItem>
                        <SelectItem value="50m+">$50M+</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your ideal property..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="luxury"
                    size="lg"
                    className="w-full md:w-auto"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : (
                      <>
                        Send Message
                        <Send size={18} className="ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              {/* Schedule & Offices */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-12"
              >
                {/* Book Consultation */}
                <div className="luxury-card bg-card p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Calendar className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium">Book a Consultation</h3>
                      <p className="text-sm text-muted-foreground">Meet with a luxury property advisor</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-6">
                    Schedule a one-on-one virtual or in-person consultation with 
                    our expert advisors to discuss your property goals.
                  </p>
                  <Button variant="outline" className="w-full">
                    Schedule Now
                  </Button>
                </div>

                {/* Global Offices */}
                <div>
                  <h3 className="text-lg font-medium mb-6">Global Offices</h3>
                  <div className="space-y-4">
                    {offices.map((office) => (
                      <div
                        key={office.city}
                        className="p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        <h4 className="font-medium mb-1">{office.city}</h4>
                        <p className="text-sm text-muted-foreground">{office.address}</p>
                        <p className="text-sm text-accent">{office.phone}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function ContactSection() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["123 Coffee Street", "Roastery District", "City, State 12345"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+1 (555) 123-4567"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["hello@pedjoangcoffee.com", "orders@pedjoangcoffee.com"]
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon - Fri: 7:00 AM - 6:00 PM", "Sat - Sun: 8:00 AM - 5:00 PM"]
    }
  ];

  return (
    <section id="contact" className="py-20 bg-light-stone">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-brown mb-4">
            Get in Touch
          </h2>
          <p className="text-charcoal text-lg max-w-2xl mx-auto">
            Have questions about our coffee or want to place a custom order? 
            We'd love to hear from you. Reach out and let's talk coffee!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-coffee-brown mb-6">
              Contact Information
            </h3>
            
            <div className="grid gap-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <Card className="bg-white border-soft-mocha">
                    <CardHeader className="pb-3">
                      <div className="flex items-center space-x-3">
                        <motion.div 
                          className="bg-warm-tan p-2 rounded-lg"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <item.icon className="h-5 w-5 text-coffee-brown" />
                        </motion.div>
                        <CardTitle className="text-coffee-brown text-lg">
                          {item.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      {item.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-charcoal">
                          {detail}
                        </p>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="bg-white border-soft-mocha">
              <CardHeader>
                <CardTitle className="text-coffee-brown">Send us a Message</CardTitle>
                <CardDescription className="text-charcoal">
                  Fill out the form below and we'll get back to you within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <motion.div 
                  className="grid grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-coffee-brown">First Name</Label>
                    <Input 
                      id="firstName" 
                      placeholder="John"
                      className="border-soft-mocha focus:border-muted-olive transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-coffee-brown">Last Name</Label>
                    <Input 
                      id="lastName" 
                      placeholder="Doe"
                      className="border-soft-mocha focus:border-muted-olive transition-all duration-300"
                    />
                  </div>
                </motion.div>
                
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Label htmlFor="email" className="text-coffee-brown">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@example.com"
                    className="border-soft-mocha focus:border-muted-olive transition-all duration-300"
                  />
                </motion.div>
                
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Label htmlFor="subject" className="text-coffee-brown">Subject</Label>
                  <Input 
                    id="subject" 
                    placeholder="Coffee inquiry"
                    className="border-soft-mocha focus:border-muted-olive transition-all duration-300"
                  />
                </motion.div>
                
                <motion.div 
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Label htmlFor="message" className="text-coffee-brown">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your coffee needs..."
                    rows={4}
                    className="border-soft-mocha focus:border-muted-olive resize-none transition-all duration-300"
                  />
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button 
                    className="w-full bg-coffee-brown hover:bg-muted-olive text-cream-beige transition-all duration-300"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
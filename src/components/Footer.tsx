import { Coffee, Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';

export function Footer() {
  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const footerLinks = {
    Products: ['Single Origin', 'Blends', 'Decaf', 'Cold Brew'],
    Company: ['About Us', 'Our Story', 'Careers', 'Press'],
    Support: ['Contact', 'FAQ', 'Shipping', 'Returns'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy']
  };

  return (
    <footer className="bg-coffee-brown text-cream-beige">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Coffee className="h-8 w-8 text-warm-tan" />
              <span className="text-xl font-semibold">Pedjoang Coffee Roastery</span>
            </div>
            <p className="text-cream-beige/80 mb-6 max-w-sm">
              Crafting exceptional coffee experiences since 2010. 
              From bean to cup, we're passionate about delivering the perfect roast.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-cream-beige hover:text-warm-tan hover:bg-muted-olive/20 transition-all duration-300"
                    asChild
                  >
                    <a href={social.href} aria-label={social.label}>
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-warm-tan mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-cream-beige/80 hover:text-cream-beige transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-muted-olive/30 pt-8 mb-8">
          <div className="max-w-md">
            <h3 className="font-semibold text-warm-tan mb-2">Stay Updated</h3>
            <p className="text-cream-beige/80 mb-4">
              Subscribe to our newsletter for coffee tips, new roasts, and exclusive offers.
            </p>
            <div className="flex gap-2">
              <motion.input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-muted-olive/20 border border-muted-olive/30 text-cream-beige placeholder-cream-beige/60 focus:outline-none focus:border-warm-tan transition-all duration-300"
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button className="bg-warm-tan hover:bg-soft-mocha text-coffee-brown transition-all duration-300">
                  Subscribe
                </Button>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-muted-olive/30 pt-6 text-center">
          <p className="text-cream-beige/60">
            © 2024 Pedjoang Coffee Roastery. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
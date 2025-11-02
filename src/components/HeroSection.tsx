import { Button } from './ui/button';
import { ArrowDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';

export function HeroSection() {
  const scrollToCoffeeBeans = () => {
    const element = document.getElementById('coffee-beans');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-cream-beige to-light-stone flex items-center justify-center relative">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div 
            className="text-center lg:text-left space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-coffee-brown leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              From Bean to
              <span className="block text-muted-olive">Perfect Cup</span>
              <span className="block">Every Time</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-charcoal max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Experience the finest coffee beans sourced directly from the world's premier growing regions. 
              Each bean is carefully selected, expertly roasted, and crafted to deliver exceptional flavors 
              that celebrate the unique terroir of its origin.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  size="lg" 
                  className="bg-coffee-brown hover:bg-muted-olive text-cream-beige px-8 py-3 transition-all duration-300"
                  onClick={scrollToCoffeeBeans}
                >
                  Explore Our Coffee Beans
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-soft-mocha text-coffee-brown hover:bg-warm-tan/20 px-8 py-3 transition-all duration-300"
                  onClick={scrollToAbout}
                >
                  Bean Journey
                </Button>
              </motion.div>
            </motion.div>

            {/* Coffee Bean Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-4 pt-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                { number: "15+", label: "Origin Countries" },
                { number: "50+", label: "Partner Farms" },
                { number: "1000+", label: "Beans Cupped Weekly" }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-2xl md:text-3xl font-bold text-coffee-brown">{stat.number}</div>
                  <div className="text-sm text-charcoal">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="rounded-lg overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2061&q=80"
                alt="Coffee beans being roasted"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </motion.div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -top-4 -left-4 w-24 h-24 bg-warm-tan rounded-full opacity-70"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 180, 360] 
              }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                ease: "linear" 
              }}
            ></motion.div>
            <motion.div 
              className="absolute -bottom-4 -right-4 w-32 h-32 bg-soft-mocha rounded-full opacity-50"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [360, 180, 0] 
              }}
              transition={{ 
                duration: 10,
                repeat: Infinity,
                ease: "linear" 
              }}
            ></motion.div>
            
            {/* Floating bean info card */}
            <motion.div 
              className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-sm font-medium text-coffee-brown">Today's Roast</div>
              <div className="text-xs text-charcoal">Ethiopia Yirgacheffe</div>
              <div className="text-xs text-muted-olive">Light Roast • Floral Notes</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      >
        <ArrowDown className="h-6 w-6 text-muted-olive" />
      </motion.div>
    </section>
  );
}
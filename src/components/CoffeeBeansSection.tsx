import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Thermometer, Droplets, Sun } from 'lucide-react';
import { motion } from 'motion/react';

export function CoffeeBeansSection() {
  const beanOrigins = [
    {
      region: "Central America",
      countries: ["Guatemala", "Costa Rica", "Honduras"],
      characteristics: "Bright acidity, chocolate notes, balanced body",
      altitude: "1,200-2,000m",
      image: "https://images.unsplash.com/photo-1587743123877-de7cc564ba73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      region: "South America",
      countries: ["Colombia", "Brazil", "Peru"],
      characteristics: "Full body, nutty sweetness, low acidity",
      altitude: "800-1,800m",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      region: "Africa",
      countries: ["Ethiopia", "Kenya", "Rwanda"],
      characteristics: "Floral, fruity, wine-like acidity",
      altitude: "1,400-2,200m",
      image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    {
      region: "Asia Pacific",
      countries: ["Indonesia", "Papua New Guinea", "Yemen"],
      characteristics: "Earthy, herbal, full body with low acidity",
      altitude: "1,000-1,700m",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2134&q=80"
    }
  ];

  const processingMethods = [
    {
      method: "Washed (Wet Process)",
      description: "Clean, bright flavors with pronounced acidity",
      icon: Droplets,
      steps: ["Cherry harvesting", "Pulping", "Fermentation", "Washing", "Drying"]
    },
    {
      method: "Natural (Dry Process)",
      description: "Fruity, sweet flavors with full body",
      icon: Sun,
      steps: ["Cherry harvesting", "Sun drying", "Hull removal", "Sorting", "Grading"]
    },
    {
      method: "Honey Process",
      description: "Balanced sweetness between washed and natural",
      icon: Thermometer,
      steps: ["Cherry harvesting", "Partial pulping", "Controlled drying", "Hull removal", "Sorting"]
    }
  ];

  const roastProfiles = [
    {
      level: "Light Roast",
      temperature: "356°F - 401°F",
      time: "9-11 minutes",
      characteristics: "Bright acidity, floral notes, original bean flavors",
      color: "bg-warm-tan",
      textColor: "text-coffee-brown"
    },
    {
      level: "Medium Roast",
      temperature: "410°F - 428°F",
      time: "11-13 minutes",
      characteristics: "Balanced flavor, moderate acidity, caramelized sugars",
      color: "bg-soft-mocha",
      textColor: "text-cream-beige"
    },
    {
      level: "Dark Roast",
      temperature: "437°F - 446°F",
      time: "13-15 minutes",
      characteristics: "Bold, smoky flavors, low acidity, oil on surface",
      color: "bg-coffee-brown",
      textColor: "text-cream-beige"
    }
  ];

  return (
    <section id="coffee-beans" className="py-20 bg-cream-beige">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-brown mb-4">
            The Art &amp; Science of Coffee Beans
          </h2>
          <p className="text-charcoal text-lg max-w-3xl mx-auto">
            Every great cup of coffee starts with exceptional beans. Discover the journey from farm to cup, 
            understanding how origin, processing, and roasting create the unique flavors in every bean.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Tabs defaultValue="origins" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-light-stone">
              <TabsTrigger value="origins" className="data-[state=active]:bg-coffee-brown data-[state=active]:text-cream-beige">
                Bean Origins
              </TabsTrigger>
              <TabsTrigger value="processing" className="data-[state=active]:bg-coffee-brown data-[state=active]:text-cream-beige">
                Processing Methods
              </TabsTrigger>
              <TabsTrigger value="roasting" className="data-[state=active]:bg-coffee-brown data-[state=active]:text-cream-beige">
                Roast Profiles
              </TabsTrigger>
            </TabsList>

            <TabsContent value="origins" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {beanOrigins.map((origin, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white border-soft-mocha h-full">
                      <div className="relative">
                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ImageWithFallback
                            src={origin.image}
                            alt={`Coffee beans from ${origin.region}`}
                            className="w-full h-48 object-cover"
                          />
                        </motion.div>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                        >
                          <Badge className="absolute top-3 left-3 bg-coffee-brown text-cream-beige">
                            <MapPin className="h-3 w-3 mr-1" />
                            {origin.altitude}
                          </Badge>
                        </motion.div>
                      </div>
                      
                      <CardHeader className="pb-3">
                        <CardTitle className="text-coffee-brown">{origin.region}</CardTitle>
                        <CardDescription className="text-charcoal">
                          {origin.countries.join(", ")}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-sm text-charcoal">
                          {origin.characteristics}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="processing" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {processingMethods.map((method, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="bg-white border-soft-mocha h-full">
                      <CardHeader className="text-center">
                        <motion.div 
                          className="flex justify-center mb-4"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="bg-warm-tan p-4 rounded-full">
                            <method.icon className="h-8 w-8 text-coffee-brown" />
                          </div>
                        </motion.div>
                        <CardTitle className="text-coffee-brown">{method.method}</CardTitle>
                        <CardDescription className="text-charcoal">
                          {method.description}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <h4 className="font-semibold text-coffee-brown mb-3">Process Steps:</h4>
                        <ol className="space-y-2">
                          {method.steps.map((step, stepIndex) => (
                            <motion.li 
                              key={stepIndex} 
                              className="flex items-center text-sm text-charcoal"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: stepIndex * 0.1 }}
                            >
                              <span className="bg-muted-olive text-cream-beige rounded-full w-6 h-6 flex items-center justify-center text-xs mr-3">
                                {stepIndex + 1}
                              </span>
                              {step}
                            </motion.li>
                          ))}
                        </ol>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="roasting" className="space-y-8">
              <div className="grid lg:grid-cols-3 gap-8">
                {roastProfiles.map((roast, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                  >
                    <Card className="bg-white border-soft-mocha overflow-hidden h-full">
                      <motion.div 
                        className={`h-4 ${roast.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                      ></motion.div>
                      
                      <CardHeader>
                        <CardTitle className="text-coffee-brown flex items-center justify-between">
                          {roast.level}
                          <motion.div
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Thermometer className="h-5 w-5 text-muted-olive" />
                          </motion.div>
                        </CardTitle>
                        <CardDescription className="text-charcoal">
                          {roast.temperature} • {roast.time}
                        </CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <p className="text-charcoal mb-4">
                          {roast.characteristics}
                        </p>
                        
                        <div className="space-y-2">
                          <div className="text-xs text-muted-olive">Roast Development</div>
                          <div className="w-full bg-light-stone rounded-full h-2">
                            <motion.div 
                              className={`h-2 rounded-full ${roast.color}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${(index + 1) * 33.33}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.5 }}
                            ></motion.div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>

        {/* Bean Quality Standards */}
        <motion.div 
          className="mt-16 bg-light-stone rounded-lg p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-coffee-brown mb-6 text-center">
            Our Bean Quality Standards
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { emoji: "🌱", title: "Sustainably Sourced", desc: "Direct trade relationships with farmers" },
              { emoji: "🔬", title: "Quality Tested", desc: "Every batch cupped and graded" },
              { emoji: "📅", title: "Fresh Roasted", desc: "Roasted within 24 hours of shipping" },
              { emoji: "🏆", title: "Award Winning", desc: "Multiple specialty coffee awards" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div 
                  className="bg-warm-tan rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="text-2xl">{item.emoji}</span>
                </motion.div>
                <h4 className="font-semibold text-coffee-brown mb-2">{item.title}</h4>
                <p className="text-sm text-charcoal">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Mountain, Thermometer, Calendar } from 'lucide-react';
import { motion } from 'motion/react';

export function CoffeeSection() {
  const coffeeProducts = [
    {
      name: "Ethiopia Yirgacheffe",
      description: "Bright and floral with notes of citrus and tea-like finish",
      roastLevel: "Light",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      origin: "Yirgacheffe, Ethiopia",
      altitude: "1,700-2,200m",
      process: "Washed",
      variety: "Heirloom",
      harvest: "October - December",
      notes: ["Bergamot", "Lemon", "Black Tea", "Floral"],
      farm: "Kochere Cooperative"
    },
    {
      name: "Colombian Supremo",
      description: "Rich, full-bodied with chocolate and caramel undertones",
      roastLevel: "Medium",
      price: "$22.99",
      image: "https://images.unsplash.com/photo-1587743123877-de7cc564ba73?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      origin: "Huila, Colombia",
      altitude: "1,500-1,800m",
      process: "Washed",
      variety: "Caturra, Castillo",
      harvest: "March - June",
      notes: ["Dark Chocolate", "Caramel", "Orange", "Nuts"],
      farm: "Finca La Esperanza"
    },
    {
      name: "Guatemala Antigua",
      description: "Complex flavor with smoky finish and spicy notes",
      roastLevel: "Dark",
      price: "$26.99",
      image: "https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80",
      origin: "Antigua Valley, Guatemala",
      altitude: "1,200-1,600m",
      process: "Washed",
      variety: "Bourbon, Typica",
      harvest: "December - March",
      notes: ["Smoky", "Spice", "Dark Chocolate", "Cedar"],
      farm: "Finca El Portal"
    },
    {
      name: "House Blend",
      description: "Our signature blend with balanced flavor and smooth finish",
      roastLevel: "Medium",
      price: "$19.99",
      image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2134&q=80",
      origin: "Multi-Origin Blend",
      altitude: "1,200-1,800m",
      process: "Mixed",
      variety: "Arabica Blend",
      harvest: "Year Round",
      notes: ["Balanced", "Smooth", "Chocolate", "Nutty"],
      farm: "Multiple Partners"
    }
  ];

  const getRoastColor = (roastLevel: string) => {
    switch (roastLevel) {
      case 'Light': return 'bg-warm-tan text-coffee-brown';
      case 'Medium': return 'bg-soft-mocha text-cream-beige';
      case 'Dark': return 'bg-coffee-brown text-cream-beige';
      default: return 'bg-muted-olive text-cream-beige';
    }
  };

  return (
    <section id="coffee" className="py-20 bg-cream-beige">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-coffee-brown mb-4">
            Premium Coffee Bean Collection
          </h2>
          <p className="text-charcoal text-lg max-w-3xl mx-auto">
            Each coffee in our collection tells a unique story of origin, processing, and craft. 
            From single-origin beans that showcase terroir to carefully crafted blends, 
            every bag represents our commitment to exceptional quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {coffeeProducts.map((coffee, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white border-soft-mocha h-full">
                <div className="grid md:grid-cols-2">
                  {/* Image Section */}
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ImageWithFallback
                        src={coffee.image}
                        alt={coffee.name}
                        className="w-full h-64 md:h-full object-cover"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                    >
                      <Badge 
                        className={`absolute top-3 right-3 ${getRoastColor(coffee.roastLevel)}`}
                      >
                        {coffee.roastLevel}
                      </Badge>
                    </motion.div>
                  </div>
                  
                  {/* Content Section */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <CardTitle className="text-coffee-brown text-xl">{coffee.name}</CardTitle>
                      <motion.span 
                        className="text-muted-olive font-semibold text-lg"
                        whileHover={{ scale: 1.1 }}
                      >
                        {coffee.price}
                      </motion.span>
                    </div>
                    
                    <p className="text-charcoal mb-4 text-sm leading-relaxed">
                      {coffee.description}
                    </p>

                    {/* Bean Details */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-xs text-charcoal">
                        <MapPin className="h-3 w-3 mr-2 text-muted-olive" />
                        <span className="font-medium mr-2">Origin:</span>
                        <span>{coffee.origin}</span>
                      </div>
                      
                      <div className="flex items-center text-xs text-charcoal">
                        <Mountain className="h-3 w-3 mr-2 text-muted-olive" />
                        <span className="font-medium mr-2">Altitude:</span>
                        <span>{coffee.altitude}</span>
                      </div>
                      
                      <div className="flex items-center text-xs text-charcoal">
                        <Thermometer className="h-3 w-3 mr-2 text-muted-olive" />
                        <span className="font-medium mr-2">Process:</span>
                        <span>{coffee.process}</span>
                      </div>
                      
                      <div className="flex items-center text-xs text-charcoal">
                        <Calendar className="h-3 w-3 mr-2 text-muted-olive" />
                        <span className="font-medium mr-2">Harvest:</span>
                        <span>{coffee.harvest}</span>
                      </div>
                    </div>

                    {/* Tasting Notes */}
                    <div className="mb-4">
                      <h4 className="text-xs font-medium text-coffee-brown mb-2">Tasting Notes:</h4>
                      <div className="flex flex-wrap gap-1">
                        {coffee.notes.map((note, noteIndex) => (
                          <motion.div
                            key={noteIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 * noteIndex }}
                            whileHover={{ scale: 1.1 }}
                          >
                            <Badge 
                              variant="secondary" 
                              className="text-xs bg-light-stone text-charcoal"
                            >
                              {note}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Farm Info */}
                    <p className="text-xs text-muted-olive mb-4">
                      <span className="font-medium">Farm:</span> {coffee.farm}
                    </p>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <Button 
                        className="w-full bg-muted-olive hover:bg-coffee-brown text-cream-beige transition-all duration-300"
                        size="sm"
                      >
                        Add to Cart
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Button 
              variant="outline" 
              size="lg"
              className="border-soft-mocha text-coffee-brown hover:bg-warm-tan/20 px-8 py-3 transition-all duration-300"
            >
              Explore All Single Origins
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
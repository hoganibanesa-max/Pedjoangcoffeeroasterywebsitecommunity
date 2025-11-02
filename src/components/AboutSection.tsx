import { ImageWithFallback } from './figma/ImageWithFallback';
import { Coffee, Heart, Award } from 'lucide-react';

export function AboutSection() {
  const features = [
    {
      icon: Coffee,
      title: "Premium Quality",
      description: "We source only the finest coffee beans from sustainable farms around the world."
    },
    {
      icon: Heart,
      title: "Passionate Roasting",
      description: "Every batch is roasted with care and precision to bring out the unique flavors."
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in coffee roasting and exceptional customer service."
    }
  ];

  return (
    <section id="about" className="py-20 bg-light-stone">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1559947486-a67f2d171bef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Coffee roasting process"
                className="w-full h-96 lg:h-[500px] object-cover"
              />
            </div>
            
            {/* Decorative border */}
            <div className="absolute inset-0 border-4 border-warm-tan rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-coffee-brown mb-4">
                Our Story
              </h2>
              <p className="text-charcoal text-lg leading-relaxed mb-6">
                Founded with a passion for exceptional coffee, Pedjoang Coffee Roastery has been 
                serving coffee enthusiasts for over a decade. We believe that great coffee starts 
                with great beans, and every cup should tell a story.
              </p>
              <p className="text-charcoal text-lg leading-relaxed">
                From our state-of-the-art roasting facility, we carefully craft each blend to 
                highlight the unique characteristics of the beans, ensuring every sip is a 
                memorable experience.
              </p>
            </div>

            <div className="grid gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-warm-tan p-3 rounded-lg">
                    <feature.icon className="h-6 w-6 text-coffee-brown" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-coffee-brown mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-charcoal">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
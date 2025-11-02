import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CoffeeBeansSection } from './components/CoffeeBeansSection';
import { CoffeeSection } from './components/CoffeeSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <CoffeeBeansSection />
        <CoffeeSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
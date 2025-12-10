import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import heroImage from "@assets/Untitled_design_1765408209329.png";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-secondary/10">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Bright healthy living space" 
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 md:px-8 pt-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl space-y-6"
        >
          <h1 className="font-heading text-5xl md:text-7xl font-bold text-foreground leading-[1.1]">
            Hey, You Deserve to Feel Amazing
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
            Let’s team up and make a plan that fits your real life with simple habits, personalized guidance, and support every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="xl" className="rounded-full text-lg px-8 h-14 bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all">
              <a href="https://calendly.com/youcandoithealth/free-discovery-call?back=1" target="_blank" rel="noopener noreferrer">
                Let’s Do This!
              </a>
            </Button>
            <Button asChild size="xl" variant="outline" className="rounded-full text-lg px-8 h-14 bg-background/50 backdrop-blur border-primary/20 text-primary hover:bg-primary/5">
              <a href="#meet">
                Meet Your Coach
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

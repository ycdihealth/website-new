import { Button } from "@/components/ui/button";
import { ArrowRight, AlertTriangle } from "lucide-react";
import badassImage from "@assets/badass_image.webp";

export function BadassSideEffects() {
  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="container px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Text Column - Left on Desktop */}
          <div className="space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Side Effects May Include… <br />
              <span className="text-accent">Feeling Like a Total Badass</span>
            </h2>
            
            <div className="bg-background p-8 rounded-2xl border-l-4 border-accent shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-wide text-sm">
                <AlertTriangle className="h-5 w-5" />
                Warning
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Working with me may cause more energy, better moods, improved confidence, and random bursts of <span className="italic text-foreground">“who even am I?”</span>.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Side effects may also include becoming someone who actually enjoys taking care of themselves. (You’ve been warned.)
              </p>
            </div>

            <div className="pt-4 flex justify-center md:justify-start">
              <Button asChild size="xl" className="rounded-full bg-primary hover:bg-primary/90 shadow-lg text-lg h-16 px-8 transition-all hover:-translate-y-1">
                <a href="https://calendly.com/youcandoithealth/free-discovery-call?back=1" target="_blank" rel="noopener noreferrer">
                  I Accept These Side Effects
                </a>
              </Button>
            </div>
          </div>

          {/* Image Column - Right on Desktop */}
          <div className="relative flex justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-background/50 rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-pulse"></div>
            <img 
              src={badassImage} 
              alt="Woman flexing feeling confident" 
              loading="lazy"
              decoding="async"
              className="relative z-10 w-full max-w-xl hover:scale-105 transition-transform duration-500 drop-shadow-xl"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}

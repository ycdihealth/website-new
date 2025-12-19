import { Button } from "@/components/ui/button";
import { MessageCircle, Calendar, Sun, ArrowRight } from "lucide-react";
import accountabilityImage from "@assets/youvegotthis_1764895849091.png";

export function Accountability() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Image Column - Left on Desktop */}
          <div className="order-2 md:order-1 relative flex justify-center">
            <div className="absolute -top-4 -right-4 w-48 h-48 bg-primary/10 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute bottom-8 -left-4 w-40 h-40 bg-accent/10 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
            <img 
              src={accountabilityImage} 
              alt="Supportive coach messaging 'You've got this!'" 
              loading="lazy"
              decoding="async"
              className="relative z-10 w-full max-w-xl hover:scale-105 transition-transform duration-500 drop-shadow-lg"
            />
          </div>

          {/* Text Column - Right on Desktop */}
          <div className="order-1 md:order-2 space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Weekly Calls, Daily Check-ins, <br />
              <span className="text-accent">Zero Ghosting</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Accountability is everything. You’ll get weekly coaching calls, daily check-ins, and support that doesn’t disappear after the first week.
              </p>
              
              <div className="flex flex-col gap-4 pt-2">
                <div className="flex items-start gap-3">
                   <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                     <Calendar className="w-4 h-4 text-accent" />
                   </div>
                   <p className="text-base text-foreground/80 pt-1">Weekly strategy calls to keep you on track.</p>
                </div>
                <div className="flex items-start gap-3">
                   <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                     <MessageCircle className="w-4 h-4 text-accent" />
                   </div>
                   <p className="text-base text-foreground/80 pt-1">Daily check-ins so you never feel alone.</p>
                </div>
                <div className="flex items-start gap-3">
                   <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                     <Sun className="w-4 h-4 text-accent" />
                   </div>
                   <p className="text-base text-foreground/80 pt-1">And yes, everything is 100% online. If you’re in San Diego, we can even meet for a walk during your session - sunshine included at no extra charge.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-center md:justify-start">
              <Button asChild size="xl" className="rounded-full bg-primary hover:bg-primary/90 shadow-lg text-lg h-16 px-8">
                <a href="https://calendly.com/youcandoithealth/free-discovery-call?back=1" target="_blank" rel="noopener noreferrer">
                  I Want That Accountability
                </a>
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

import { Button } from "@/components/ui/button";
import { Heart, Utensils } from "lucide-react";
import andreaLemonImage from "@assets/IMG_0624_(1)_1765409301444.jpeg";

export function PersonalizedCoaching() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Text Column */}
          <div className="space-y-8 order-2 md:order-1">
            <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-full mb-4">
              <Heart className="h-6 w-6 text-accent" />
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Personalized Coaching That <br />
              <span className="text-accent relative inline-block">
                Actually Fits Your Life
                <svg className="absolute -bottom-2 left-0 w-full h-2 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              You’re unique and your health coaching plan should be too. Your coaching program is built around your goals, your schedule, and your real life (yes, the one where you like carbs and have zero interest in giving up your favorite foods).
            </p>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              I support you through all phases of life, with nutrition guidance that fuels your body and still lets you enjoy the foods you love.
            </p>
            
            <div className="pt-4">
              <Button asChild size="xl" className="rounded-full text-lg px-10 h-16 bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                <a href="https://calendly.com/youcandoithealth/free-discovery-call?back=1" target="_blank" rel="noopener noreferrer">
                  <Utensils className="mr-2 h-5 w-5" />
                  Tell Me What You Love to Eat
                </a>
              </Button>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative order-1 md:order-2 flex justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-60"></div>
            <img 
              src={andreaLemonImage} 
              alt="Andrea smiling with lemon tree" 
              className="relative z-10 w-full max-w-md rounded-2xl shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 object-cover aspect-[4/5]"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

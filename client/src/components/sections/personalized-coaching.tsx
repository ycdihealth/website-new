import { Button } from "@/components/ui/button";
import { Heart, Utensils } from "lucide-react";

export function PersonalizedCoaching() {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-8">
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
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            You’re unique and your health coaching plan should be too. Your coaching program is built around your goals, your schedule, and your real life (yes, the one where you like carbs and have zero interest in giving up your favorite foods).
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            I support you through all phases of life, with nutrition guidance that fuels your body and still lets you enjoy the foods you love.
          </p>
          
          <div className="pt-8">
            <Button asChild size="xl" className="rounded-full text-lg px-10 h-16 bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
              <a href="https://calendly.com/youcandoithealth/free-discovery-call?back=1" target="_blank" rel="noopener noreferrer">
                <Utensils className="mr-2 h-5 w-5" />
                Tell Me What You Love to Eat
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

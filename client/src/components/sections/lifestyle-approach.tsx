import { Dumbbell, TrendingDown, Zap, Scale } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import blueberryImage from "@assets/noblueberrycounting_1764894130208.png";

const goals = [
  {
    icon: Zap,
    label: "More Energy",
  },
  {
    icon: TrendingDown,
    label: "Lose Fat",
  },
  {
    icon: Scale,
    label: "Break Plateaus",
  },
  {
    icon: Dumbbell,
    label: "Feel Strong",
  }
];

export function LifestyleApproach() {
  return (
    <section className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="container px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Image Column - Matching Feature Section Style */}
          <div className="order-2 relative flex justify-center">
            <div className="absolute -top-4 -left-4 w-48 h-48 bg-background rounded-full mix-blend-overlay filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute bottom-12 -right-4 w-40 h-40 bg-accent/20 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
            <img 
              src={blueberryImage} 
              alt="Cute blueberries saying No Blueberry Counting" 
              className="relative z-10 w-full max-w-xl hover:scale-105 transition-transform duration-500 drop-shadow-xl"
            />
          </div>

          {/* Text Column */}
          <div className="order-1 space-y-8">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Fat Loss, Muscle Gain, Motivation… <br />
              <span className="text-accent">Whatever You Need</span>
            </h2>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <div>
                <p className="first-letter:text-5xl first-letter:font-heading first-letter:font-bold first-letter:text-accent first-letter:mr-2 float-left">
                  W
                </p>
                <p>
                  hether you want more energy, to lose fat, to break a plateau, or to finally feel strong again, I’ve got you. My approach? <strong>Lifestyle changes over extremes.</strong>
                </p>
                <p className="mt-4">
                  Counting macros can help short-term, but nobody wants to spend the rest of their life logging every blueberry. You’ll learn the fundamentals that lead to lasting results - without needing to obsess over an app.
                </p>
              </div>
            </div>

            {/* Goals Grid */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              {goals.map((goal, i) => (
                <div key={i} className="flex items-center gap-3 bg-background p-4 rounded-xl shadow-sm border border-border/50 hover:border-accent/30 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                    <goal.icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="font-medium text-foreground">{goal.label}</span>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <Button asChild size="xl" className="w-full md:w-auto rounded-full bg-primary hover:bg-primary/90 shadow-lg text-lg h-16 px-8 transition-all hover:-translate-y-1">
                <a href="https://calendly.com/youcandoithealth/free-discovery-call?back=1" target="_blank" rel="noopener noreferrer">
                  I’m Ready for No More Blueberry Counting
                </a>
              </Button>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

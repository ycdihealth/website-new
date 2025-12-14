import { CheckCircle, Heart, Sun, Sprout, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import wholePersonImage from "@assets/nutrition-movement-sleep_1764895716054.png";

const features = [
  {
    icon: Heart,
    title: "Personalized Plans",
    description: "No cookie-cutter diets. We create a plan that fits your unique lifestyle and preferences."
  },
  {
    icon: Sun,
    title: "Holistic Approach",
    description: "We look beyond the plate. Sleep, stress, and movement are all part of the equation."
  },
  {
    icon: Sprout,
    title: "Sustainable Habits",
    description: "Focus on small, consistent changes that add up to lifelong transformation."
  }
];

export function Features() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 md:px-8">
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 md:order-1 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-secondary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <img 
              src={wholePersonImage} 
              alt="Nutrition, movement, and sleep illustration" 
              className="relative rounded-2xl shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 w-full object-cover aspect-[4/3]"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Whole-Person Coaching <br/>
              <span className="text-accent text-3xl md:text-4xl block mt-2">(Because You’re More Than Your Step Count)</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We work on the whole you:
            </p>
            <ul className="space-y-3 pt-2">
              {["Habits", "Nutrition", "Movement", "Stress", "Sleep", "And everything that plays into your well-being"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/80 font-medium">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg text-muted-foreground leading-relaxed pt-4">
              Plus, I support all dietary preferences - gluten free, dairy free, vegan, vegetarian, and <span className="italic text-foreground">“I swear I’m trying.”</span>
            </p>
            
            <div className="pt-4">
              <Button asChild size="xl" className="rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg h-14 px-8">
                <a href="https://calendly.com/youcandoithealth/free-discovery-call?back=1" target="_blank" rel="noopener noreferrer">
                  All of Me Matters
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-border/50">
          {features.map((feature, i) => (
            <div key={i} className="bg-secondary/20 p-8 rounded-xl hover:bg-secondary/40 transition-colors duration-300 group">
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

import { CheckCircle, Heart, Sun, Sprout } from "lucide-react";
import foodImage from "@assets/generated_images/fresh_healthy_food_ingredients.png";

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
              src={foodImage} 
              alt="Healthy fresh ingredients" 
              className="relative rounded-2xl shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-500 w-full object-cover aspect-[4/3]"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              Nourish Your Body, <br/>
              <span className="text-accent">Love Your Life</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Health isn't about deprivation or willpower. It's about finding joy in nourishment and creating a lifestyle that supports your goals naturally.
            </p>
            <ul className="space-y-3 pt-4">
              {["Evidence-based nutrition advice", "Mindset coaching & support", "Simple, delicious recipes", "Accountability that actually works"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground/80">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 pt-12 border-t border-border/50">
          {features.map((feature, i) => (
            <div key={i} className="bg-secondary/20 p-8 rounded-xl hover:bg-secondary/40 transition-colors duration-300 group">
              <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                <feature.icon className="h-6 w-6 text-primary" />
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

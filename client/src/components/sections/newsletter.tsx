import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    toast({
      title: "You're on the list!",
      description: "Thanks for subscribing to our wellness tips.",
      duration: 3000,
    });
    setEmail("");
  };

  return (
    <section id="newsletter" className="py-24 bg-primary/5">
      <div className="container px-4 md:px-8">
        <div className="max-w-4xl mx-auto bg-background rounded-3xl p-8 md:p-16 shadow-xl text-center border border-primary/10 relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/10 rounded-full translate-x-1/2 translate-y-1/2"></div>

          <div className="relative z-10 space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Wellness Tips Delivered to Your Inbox
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Join our community to receive weekly healthy recipes, mindset shifts, and exclusive coaching offers. No spam, just good vibes.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-4">
              <Input 
                type="email" 
                placeholder="Enter your email address" 
                className="h-12 rounded-full bg-secondary/20 border-transparent focus:border-primary focus:bg-background px-6"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" size="lg" className="rounded-full h-12 px-8 bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
            <p className="text-xs text-muted-foreground pt-2">
              Unsubscribe at any time. Read our <a href="/privacy" className="underline hover:text-primary">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Newsletter } from "@/components/sections/newsletter";
import { motion } from "framer-motion";
import coachImage from "@assets/generated_images/friendly_health_coach_portrait.png";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        
        {/* Meet Coach Teaser Section */}
        <section id="meet" className="py-24 bg-secondary/30">
          <div className="container px-4 md:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
              <div className="w-full md:w-1/2 relative group">
                <div className="absolute inset-0 bg-primary rounded-2xl rotate-3 group-hover:rotate-2 transition-transform duration-500 opacity-20"></div>
                <img 
                  src={coachImage} 
                  alt="Coach smiling" 
                  className="relative w-full rounded-2xl shadow-lg object-cover aspect-[4/5] filter sepia-[0.1]"
                />
              </div>
              <div className="w-full md:w-1/2 space-y-6">
                <span className="text-accent font-semibold tracking-wider uppercase text-sm">Behind the Brand</span>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                  Hi, I'm Sarah. <br/>
                  <span className="text-primary/80">Your Partner in Health.</span>
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I believe that everyone deserves to feel vibrant and alive in their own skin. My journey started when I realized that "perfect" health isn't about strict rules—it's about listening to your body.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  As a certified holistic health coach, I help busy professionals like you reclaim your energy and build habits that last a lifetime.
                </p>
                <div className="pt-4">
                  <Button asChild variant="link" className="text-xl p-0 h-auto font-heading italic text-primary hover:text-primary/80">
                    <Link href="/meet-coach">
                      Read my full story <ArrowRight className="ml-2 h-5 w-5 inline" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

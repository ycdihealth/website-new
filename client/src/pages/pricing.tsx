import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Calendar, Check, Star, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-secondary/20 py-20">
          <div className="container px-4 md:px-8 text-center max-w-3xl mx-auto space-y-6">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground">
              Invest in Your Health
            </h1>
            <p className="text-xl text-muted-foreground">
              Choosing to prioritize your well-being is one of the most empowering decisions you can make. Let's build a lifestyle that supports you and your goals.
            </p>
          </div>
        </div>

        <section className="py-16 container px-4 md:px-8">
          
          {/* Intro Section */}
          <div className="max-w-4xl mx-auto mb-16 text-center space-y-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              My coaching program gives you consistent support, accountability, and customized guidance without the overwhelm or one-size-fits-all advice you’ll find online. Together, we’ll build habits that actually stick.
            </p>
            
            <div className="bg-accent/5 border border-accent/20 rounded-2xl p-8 inline-block w-full max-w-2xl">
              <h3 className="font-heading text-xl font-bold mb-6 text-foreground">All Plans Include:</h3>
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                {[
                  "Weekly 1:1 sessions",
                  "Individualized nutrition coaching",
                  "Lifestyle & habit guidance",
                  "Accountability check-ins",
                  "Access to exclusive resources",
                  "Ongoing support"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <Check className="h-4 w-4 text-accent" />
                    </div>
                    <span className="font-medium text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            
            {/* 3-Month Plan */}
            <div className="flex flex-col bg-background border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative">
              <div className="p-8 space-y-6 flex-grow">
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-bold">3-Month Plan</h3>
                  <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide">Kickstart & Momentum</p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed min-h-[80px]">
                  Ideal for a kickstart, reset, or targeted goal. Helps you build early momentum and clarity around your goals.
                </p>

                <ul className="space-y-3">
                  {[
                    "Short-term guidance",
                    "Great 'test run' option",
                    "Build early momentum",
                    "Target specific goals"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary/10 p-8 space-y-6 mt-auto border-t border-border/50">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-border/50">
                    <span className="font-medium">Option A: Pay in Full</span>
                    <span className="font-bold text-xl">$660</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Option B: Monthly</span>
                    <span className="font-bold text-xl">$220<span className="text-sm font-normal text-muted-foreground">/mo</span></span>
                  </div>
                </div>
                <Button asChild className="w-full rounded-full" size="lg">
                   <a href="https://calendly.com/youcandoithealth/free-discovery-call?back=1" target="_blank" rel="noopener noreferrer">
                    Schedule Free Call
                  </a>
                </Button>
              </div>
            </div>

            {/* 6-Month Plan */}
            <div className="flex flex-col bg-background border border-border rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow relative">
              <div className="p-8 space-y-6 flex-grow">
                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-bold">6-Month Plan</h3>
                  <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide">Meaningful Shift</p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed min-h-[80px]">
                  For those ready to make a meaningful shift. Enough time to see clear progress in energy, confidence, and lifestyle changes.
                </p>

                <ul className="space-y-3">
                  {[
                    "Build strong consistent habits",
                    "See clear physical progress",
                    "Structured mid-length support",
                    "Great for specific health goals"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-secondary/10 p-8 space-y-6 mt-auto border-t border-border/50">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-border/50 relative">
                    <div>
                      <span className="font-medium block">Option A: Pay in Full</span>
                      <span className="text-xs text-green-600 font-bold">Save 10% ($126 off)</span>
                    </div>
                    <span className="font-bold text-xl">$1,134</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Option B: Monthly</span>
                    <span className="font-bold text-xl">$210<span className="text-sm font-normal text-muted-foreground">/mo</span></span>
                  </div>
                </div>
                <Button asChild className="w-full rounded-full" size="lg">
                   <a href="https://calendly.com/youcandoithealth/free-discovery-call?back=1" target="_blank" rel="noopener noreferrer">
                    Schedule Free Call
                  </a>
                </Button>
              </div>
            </div>

            {/* 12-Month Plan - Featured */}
            <div className="flex flex-col bg-background border-2 border-primary rounded-3xl overflow-hidden shadow-xl relative scale-105 z-10">
              <div className="absolute top-0 right-0 bg-primary text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                MOST POPULAR
              </div>
              
              <div className="p-8 space-y-6 flex-grow">
                <div className="space-y-2">
                  <h3 className="font-heading text-3xl font-bold text-primary">12-Month Plan</h3>
                  <p className="text-muted-foreground text-sm font-medium uppercase tracking-wide">Lasting Transformation</p>
                </div>
                
                <p className="text-muted-foreground leading-relaxed min-h-[80px]">
                  Recommended for deep lifestyle change. Supports you through a full year of real life - holidays, stress, setbacks, and wins.
                </p>

                <ul className="space-y-3">
                  {[
                    "Designed for lasting results",
                    "Build habits without overwhelm",
                    "Transform your relationship with food",
                    "Consistent, steady support",
                    "Highest long-term success rate"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm font-medium text-foreground">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                         <Star className="h-3 w-3 text-primary" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary/5 p-8 space-y-6 mt-auto border-t border-primary/20">
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-primary/20 relative">
                    <div>
                      <span className="font-medium block">Option A: Pay in Full</span>
                      <span className="text-xs text-green-600 font-bold">Save 10% ($240 off)</span>
                    </div>
                    <span className="font-bold text-xl">$2,160</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Option B: Monthly</span>
                    <span className="font-bold text-xl">$200<span className="text-sm font-normal text-muted-foreground">/mo</span></span>
                  </div>
                </div>
                <Button asChild className="w-full rounded-full" size="xl">
                   <a href="https://calendly.com/youcandoithealth/free-discovery-call?back=1" target="_blank" rel="noopener noreferrer">
                    Schedule Free Call
                  </a>
                </Button>
              </div>
            </div>

          </div>

          {/* Bottom CTA */}
          <div className="mt-24 text-center bg-accent/10 rounded-3xl p-12 max-w-4xl mx-auto border border-accent/20">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Not sure which plan is right for you?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              That's exactly what the discovery call is for. We'll chat about your goals and figure out the best path forward together - no strings attached!
            </p>
            <Button asChild size="xl" className="rounded-full bg-primary hover:bg-primary/90 shadow-lg text-lg h-16 px-10">
              <a href="https://calendly.com/youcandoithealth/free-discovery-call?back=1" target="_blank" rel="noopener noreferrer">
                Schedule My Free Call
              </a>
            </Button>
          </div>

        </section>
      </main>
      <Footer />
    </div>
  );
}

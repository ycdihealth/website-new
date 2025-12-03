import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import coachImage from "@assets/generated_images/friendly_health_coach_portrait.png";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function MeetCoach() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-secondary/20 py-20">
          <div className="container px-4 md:px-8 text-center max-w-3xl mx-auto space-y-6">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground">Meet Sarah</h1>
            <p className="text-xl text-muted-foreground">Founder, Certified Health Coach, and your biggest cheerleader.</p>
          </div>
        </div>

        <section className="py-20 container px-4 md:px-8">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <img 
                src={coachImage} 
                alt="Sarah Health Coach" 
                className="w-full rounded-lg shadow-xl mb-8"
              />
              <div className="bg-primary/5 p-8 rounded-xl border border-primary/10">
                <h3 className="font-heading text-xl font-bold mb-4">Credentials</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-background">IIN Certified</Badge>
                    <span className="text-sm text-muted-foreground">Integrative Nutrition</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-background">NASM CPT</Badge>
                    <span className="text-sm text-muted-foreground">Certified Personal Trainer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-background">RYT 200</Badge>
                    <span className="text-sm text-muted-foreground">Registered Yoga Teacher</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">My Philosophy</h2>
              <p>
                Welcome! I'm Sarah, and I founded <strong>You Can Do It Health Coaching</strong> with a simple mission: to make healthy living feel accessible, enjoyable, and empowering.
              </p>
              <p>
                For years, I struggled with restrictive diets and the "all or nothing" mentality. I thought health meant salads without dressing and hours on the treadmill. It left me exhausted, unhappy, and constantly starting over on Monday.
              </p>
              <p>
                It wasn't until I started listening to my body and focusing on <em>nourishment</em> rather than <em>deprivation</em> that everything clicked. I realized that true wellness is bio-individual—what works for one person might not work for another.
              </p>
              
              <h3 className="font-heading text-2xl font-bold text-foreground pt-6">How I Can Help You</h3>
              <p>
                My coaching isn't just about what you eat. We dive deep into the primary foods of life: your relationships, career, physical activity, and spirituality. When these are in balance, healthy eating comes naturally.
              </p>
              <p>
                Whether you're looking to boost your energy, manage stress, or simply feel more comfortable in your clothes, I'm here to guide you with compassion, accountability, and practical strategies that fit your busy life.
              </p>

              <div className="pt-8">
                <Button size="xl" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white">
                  <a href="https://calendly.com" target="_blank" rel="noreferrer">
                    Schedule Your Free Discovery Call
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

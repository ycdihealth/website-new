import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import coachImage from "@assets/IMG_0624_(1)_1765412338473.jpeg";
import pnBadge from "@assets/PN_badge_L1-N_225x225_1764896104490.png";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function MeetCoach() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-secondary/20 py-20">
          <div className="container px-4 md:px-8 text-center max-w-3xl mx-auto space-y-6">
            <h1 className="font-heading text-5xl md:text-6xl font-bold text-foreground">Meet Andrea</h1>
            <p className="text-xl text-muted-foreground">Mom, Survivor, Coach, and your biggest cheerleader.</p>
          </div>
        </div>

        <section className="py-20 container px-4 md:px-8">
          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <div className="relative">
                <img 
                  src={coachImage} 
                  alt="Coach Andrea" 
                  loading="lazy"
                  decoding="async"
                  className="w-3/4 mx-auto rounded-lg shadow-xl mb-8"
                />
              </div>

              <div className="bg-accent/5 p-8 rounded-xl border border-accent/10 mt-8 w-3/4 mx-auto">
                <h3 className="font-heading text-xl font-bold mb-4">Certifications & Training</h3>
                <ul className="space-y-4">
                  <li className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                       <img src={pnBadge} alt="Precision Nutrition Level 1 Certification Badge" loading="lazy" decoding="async" className="w-auto h-auto max-w-full object-contain" />
                    </div>
                    <span className="text-sm text-muted-foreground">Precision Nutrition Level 1 Nutrition Coaching Certification</span>
                  </li>
                  <li className="flex flex-col gap-1">
                    <span className="text-sm text-muted-foreground">Active member of the Fitness Advancement Mentorship program led by Alan Aragon</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="md:col-span-7 space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Hi, I’m Andrea - a 44-year-old mom of two, Certified Nutrition Coach, and someone who has collected more medical plot twists than most TV dramas. I’ve navigated a complicated pregnancy, treatment for a rare tumor, a hysterectomy, and even open-heart surgery for a congenital defect. (If you ever need someone to fill out complicated hospital paperwork quickly, I’m your girl.)
              </p>
              <p>
                Going through all of that completely reshaped how I think about health, stress, and self-care. Spoiler: it’s not about perfection, restriction, or pretending celery juice is a personality.
              </p>
              <p>
                With the help of my own coach, I rebuilt my habits from scratch. I left a high-stress career, healed my relationship with food, gave up alcohol, started resistance training, and even completed an 80-mile hike through the Cotswolds - yes, on purpose. And I learned one of the most life-changing truths out there: there are no “bad” foods, and fad diets deserve to retire permanently.
              </p>
              <p>
                Real change comes from building skills, self-compassion, and learning to choose what your body actually needs (instead of what the latest wellness trend told you to fear). Through loss, stress, and all the beautiful chaos of life, these skills helped me stay grounded instead of falling back into old patterns. That transformation inspired me to dive deep into nutrition science, behavior change, and sustainable habits…and eventually become a coach myself.
              </p>
              <p>
                Today, I’m here to support you with the same empathy, research-backed guidance, and cheerleading that helped me rebuild my own life. I’m your coach, your motivator, and the person who will remind you that you’re doing better than you think. Let’s help you feel strong, energized, and confident in your body, starting now.
              </p>
              
              <p className="font-heading text-2xl font-bold text-accent pt-2">
                Because truly… You Can Do It.
              </p>

              <div className="bg-accent/10 p-8 rounded-2xl mt-8 border border-accent/20">
                <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Ready to Start Your Journey?</h3>
                <p className="mb-6">
                  Let’s chat and see if we’re the right fit. Your free discovery call is a zero-pressure way to explore how coaching can help you feel your best.
                </p>
                <Button size="xl" className="rounded-full px-8 bg-primary hover:bg-primary/90 text-white w-full md:w-auto">
                  <a href="https://calendly.com/youcandoithealth/free-discovery-call?back=1" target="_blank" rel="noreferrer">
                    Book My Free Call
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

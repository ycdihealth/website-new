import { Link } from "wouter";
import { Facebook, Instagram, Youtube, Heart } from "lucide-react";
import logoImage from "@assets/logo_horizontal.webp";

// Custom TikTok icon since it might not be in this version of lucide
const TikTok = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border mt-auto">
      <div className="container px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand Column */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-2">
              <img src={logoImage} alt="You Can Do It Health Coaching" loading="lazy" decoding="async" className="h-24 w-auto object-contain" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering you to live your healthiest, happiest life through personalized coaching and sustainable habits.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="https://www.instagram.com/youcandoithealth" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors hover-elevate p-2 rounded-full bg-background border border-border/50">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/youcandoithealth" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors hover-elevate p-2 rounded-full bg-background border border-border/50">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://www.tiktok.com/@youcandoithealth" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors hover-elevate p-2 rounded-full bg-background border border-border/50">
                <TikTok className="h-5 w-5" />
              </a>
              <a href="https://www.youtube.com/@youcandoithealth" target="_blank" rel="noopener noreferrer" className="text-foreground/60 hover:text-primary transition-colors hover-elevate p-2 rounded-full bg-background border border-border/50">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/"><a className="hover:text-primary transition-colors">Home</a></Link></li>
              <li><Link href="/meet-coach"><a className="hover:text-primary transition-colors">Meet Your Coach</a></Link></li>
              <li><a href="https://calendly.com/youcandoithealth/free-discovery-call?back=1" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Discovery Call</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><Link href="/contact"><a className="hover:text-primary transition-colors">Contact</a></Link></li>
              <li><Link href="/privacy"><a className="hover:text-primary transition-colors">Privacy Policy</a></Link></li>
              <li><Link href="/disclaimer"><a className="hover:text-primary transition-colors">Disclaimer</a></Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Get in Touch</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Ready to start your journey?
            </p>
            <a href="mailto:youcandoithealth@gmail.com" className="text-primary font-medium hover:underline">
              youcandoithealth@gmail.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} You Can Do It Health Coaching. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-accent fill-accent" /> for wellness
          </p>
        </div>
      </div>
    </footer>
  );
}

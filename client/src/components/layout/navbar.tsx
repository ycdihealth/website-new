import { Link, useLocation } from "wouter";
import { Menu, X, Leaf } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Meet Your Coach", href: "/meet-coach" },
  ];

  const handleScrollToNewsletter = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById("newsletter");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between px-4 md:px-8">
        <Link href="/">
          <a className="flex items-center gap-2 font-heading text-2xl font-bold text-primary hover:opacity-90 transition-opacity">
            <Leaf className="h-6 w-6 fill-primary" />
            You Can Do It
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === link.href ? "text-primary" : "text-foreground/80"
              )}>
                {link.name}
              </a>
            </Link>
          ))}
          <button 
            onClick={handleScrollToNewsletter}
            className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Newsletter
          </button>
          <Button asChild variant="default" size="lg" className="rounded-full font-semibold shadow-md hover:shadow-lg transition-all">
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
              Free Discovery Call
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-background border-b border-border animate-in slide-in-from-top-5 fade-in duration-200">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a 
                  className={cn(
                    "text-lg font-medium py-2 border-b border-border/50",
                    location === link.href ? "text-primary" : "text-foreground/80"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
            <button 
              onClick={handleScrollToNewsletter}
              className="text-lg font-medium text-left py-2 text-foreground/80 border-b border-border/50"
            >
              Newsletter
            </button>
            <Button asChild className="w-full mt-4 rounded-full" size="lg">
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                Free Discovery Call
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

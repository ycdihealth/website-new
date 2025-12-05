import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Newsletter } from "@/components/sections/newsletter";
import { PersonalizedCoaching } from "@/components/sections/personalized-coaching";
import { LifestyleApproach } from "@/components/sections/lifestyle-approach";
import { Accountability } from "@/components/sections/accountability";
import { BadassSideEffects } from "@/components/sections/badass-side-effects";
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
        <PersonalizedCoaching />
        <LifestyleApproach />
        <Accountability />
        <BadassSideEffects />
        

        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

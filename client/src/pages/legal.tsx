import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { useLocation } from "wouter";

export default function LegalPage() {
  const [location] = useLocation();
  
  const getTitle = () => {
    if (location.includes("privacy")) return "Privacy Policy";
    if (location.includes("disclaimer")) return "Disclaimer";
    return "Contact Us";
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-20">
        <div className="container px-4 md:px-8 max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl font-bold mb-8">{getTitle()}</h1>
          
          <div className="prose prose-stone max-w-none">
            <p className="text-lg text-muted-foreground mb-6">
              This is a placeholder page for the <strong>{getTitle()}</strong> of You Can Do It Health Coaching.
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">General Information</h3>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            
            <h3 className="text-xl font-bold mt-8 mb-4">Your Rights</h3>
            <p className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            
            {location.includes("contact") && (
              <div className="bg-secondary/20 p-8 rounded-xl mt-8">
                <h3 className="font-heading text-2xl font-bold mb-4">Get in Touch</h3>
                <p className="mb-2"><strong>Email:</strong> hello@youcandoit.com</p>
                <p className="mb-2"><strong>Phone:</strong> (555) 123-4567</p>
                <p><strong>Address:</strong> 123 Wellness Way, Healthy City, HC 12345</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

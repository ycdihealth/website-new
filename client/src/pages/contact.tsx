import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function ContactPage() {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Construct the mailto link
    const subject = encodeURIComponent(`New Message from ${values.name}`);
    const body = encodeURIComponent(`${values.message}\n\nFrom: ${values.name} (${values.email})`);
    const mailtoLink = `mailto:youcandoithealth@gmail.com?subject=${subject}&body=${body}`;

    // Show success feedback
    toast({
      title: "Opening Email Client...",
      description: "Drafting your message to Andrea!",
      duration: 3000,
    });

    // Reset form
    form.reset();

    // Open default email client
    window.location.href = mailtoLink;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24 pb-16">
        <div className="container px-4 md:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-6 mb-12">
              <div className="inline-flex items-center justify-center p-3 bg-accent/10 rounded-full mb-4">
                <Mail className="h-6 w-6 text-accent" />
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Wanna chat? Fill out this form and I’ll get back to you in a jiffy.
              </p>
            </div>

            <div className="bg-card border border-border/50 rounded-2xl shadow-sm p-6 md:p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your name" {...field} className="h-12 bg-background/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} className="h-12 bg-background/50" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="How can I help you?" 
                            className="min-h-[150px] resize-y bg-background/50" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" size="lg" className="w-full text-lg h-12 rounded-full font-bold">
                    Send Message
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

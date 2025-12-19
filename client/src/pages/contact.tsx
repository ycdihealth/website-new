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
    // Show loading state
    const submitBtn = document.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.setAttribute('disabled', 'true');
      submitBtn.innerHTML = 'Sending...';
    }

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: "c9a136fb-cd4a-4aeb-a182-18b09b84f146",
        name: values.name,
        email: values.email,
        message: values.message,
        subject: `New Message from ${values.name}`,
        from_name: "You Can Do It Health Coaching Website"
      })
    })
    .then(async (response) => {
      const json = await response.json();
      if (response.status === 200) {
        toast({
          title: "Message Sent!",
          description: "Thanks for reaching out. I'll get back to you in a jiffy!",
          duration: 5000,
        });
        form.reset();
      } else {
        throw new Error(json.message || "Failed to send");
      }
    })
    .catch(error => {
      console.error("Form error:", error);
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again later or email me directly at youcandoithealth@gmail.com",
      });
    })
    .finally(() => {
      if (submitBtn) {
        submitBtn.removeAttribute('disabled');
        submitBtn.innerHTML = 'Send Message <svg class="ml-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>';
      }
    });
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

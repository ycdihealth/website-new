import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import MeetCoach from "@/pages/meet-coach";
import LegalPage from "@/pages/legal";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/meet-coach" component={MeetCoach} />
      <Route path="/privacy" component={LegalPage} />
      <Route path="/disclaimer" component={LegalPage} />
      <Route path="/contact" component={LegalPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Rooms from "@/pages/Rooms";
import Fees from "@/pages/Fees";
import Gallery from "@/pages/Gallery";
import Visit from "@/pages/Visit";
import Team from "@/pages/Team";
import Careers from "@/pages/Careers";
import Policies from "@/pages/Policies";
import PolicyPage from "@/pages/PolicyPage";
import Contact from "@/pages/Contact";
import Faqs from "@/pages/Faqs";
import NotFound from "@/pages/not-found";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/rooms" component={Rooms} />
      <Route path="/fees" component={Fees} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/visit" component={Visit} />
      <Route path="/team" component={Team} />
      <Route path="/careers" component={Careers} />
      <Route path="/policies" component={Policies} />
      <Route path="/policies/:slug" component={PolicyPage} />
      <Route path="/contact" component={Contact} />
      <Route path="/faqs" component={Faqs} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import { AuthProvider } from "@/hooks/use-auth";
import { ProtectedRoute } from "./lib/protected-route";
import AuthPage from "@/pages/auth-page";
import Dashboard from "@/pages/dashboard";
import AdminDashboard from "@/pages/admin/dashboard";
import Partners from "@/pages/admin/partners";
import NewPartner from "@/pages/admin/new-partner";
import { useAuth } from "@/hooks/use-auth";
import { Redirect, Route as WouterRoute } from "wouter";
import { Loader2 } from "lucide-react";

function AdminRoute({ 
  path, 
  component: Component 
}: { 
  path: string; 
  component: () => JSX.Element;
}) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <WouterRoute path={path}>
        <div className="flex items-center justify-center min-h-screen">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </WouterRoute>
    );
  }

  if (!user?.isAdmin) {
    return (
      <WouterRoute path={path}>
        <Redirect to="/" />
      </WouterRoute>
    );
  }

  return <WouterRoute path={path} component={Component} />;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/auth" component={AuthPage} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <AdminRoute path="/admin" component={AdminDashboard} />
      <AdminRoute path="/admin/partners" component={Partners} />
      <AdminRoute path="/admin/new-partner" component={NewPartner} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
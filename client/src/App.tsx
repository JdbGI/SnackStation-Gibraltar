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
import NewPartner from "@/pages/admin/new-partner";
import { useAuth } from "@/hooks/use-auth";
import { Redirect, Route as WouterRoute } from "wouter";

function AdminRoute({ 
  path, 
  component: Component 
}: { 
  path: string; 
  component: () => React.JSX.Element;
}) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return null;
  }

  if (!user?.isAdmin) {
    return <Redirect to="/" />;
  }

  return <WouterRoute path={path} component={Component} />;
}

function Router() {
  return (
    <Switch>
      <WouterRoute path="/" component={Home} />
      <WouterRoute path="/auth" component={AuthPage} />
      <ProtectedRoute path="/dashboard" component={Dashboard} />
      <AdminRoute path="/admin" component={AdminDashboard} />
      <AdminRoute path="/admin/partners/new" component={NewPartner} />
      <WouterRoute component={NotFound} />
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
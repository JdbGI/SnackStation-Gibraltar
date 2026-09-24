import React, { Suspense, lazy } from "react";
import { MotionConfig } from "framer-motion";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import { AuthProvider } from "@/hooks/use-auth";
import { ProtectedRoute } from "./lib/protected-route";
import { useAuth } from "@/hooks/use-auth";
import { Redirect, Route as WouterRoute } from "wouter";
import { usePageMeta } from "@/lib/seo";

// Everything off the marketing homepage is split out so the homepage ships
// without the dashboard/chart code.
const AuthPage = lazy(() => import("@/pages/auth-page"));
const Dashboard = lazy(() => import("@/pages/dashboard"));
const AdminDashboard = lazy(() => import("@/pages/admin/dashboard"));
const Catalogue = lazy(() => import("@/pages/catalogue"));

const DashboardPage = () => <Dashboard />;

function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-ink">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand border-t-transparent" />
    </div>
  );
}

function AdminRoute({
  path,
  component: Component
}: {
  path: string;
  component: React.ComponentType<any>;
}) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <WouterRoute path={path}>
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full" />
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

// Partner login and dashboards: the only routes that need the signed-in user,
// so the public pages never make the /api/user request. Kept out of search.
function PartnerArea() {
  usePageMeta({ noindex: true });
  return (
    <AuthProvider>
      <Switch>
        <Route path="/auth" component={AuthPage} />
        <ProtectedRoute path="/dashboard" component={DashboardPage} />
        <AdminRoute path="/admin" component={AdminDashboard} />
        <AdminRoute path="/admin/partners" component={() => <div>Partners Page (Coming Soon)</div>} />
        <AdminRoute path="/admin/machines" component={() => <div>Machines Page (Coming Soon)</div>} />
        <AdminRoute path="/admin/reports" component={() => <div>Reports Page (Coming Soon)</div>} />
        <AdminRoute path="/admin/settings" component={() => <div>Settings Page (Coming Soon)</div>} />
        <Route component={NotFound} />
      </Switch>
    </AuthProvider>
  );
}

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/catalogue" component={Catalogue} />
        <Route component={PartnerArea} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MotionConfig reducedMotion="user">
        <Router />
      </MotionConfig>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;

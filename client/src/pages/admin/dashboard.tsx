import { useAuth } from "@/hooks/use-auth";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Users,
  ShoppingBag,
  BarChart3,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const menuItems = [
  {
    title: "Partners",
    icon: Users,
    href: "/admin/partners",
  },
  {
    title: "Machines",
    icon: ShoppingBag,
    href: "/admin/machines",
  },
  {
    title: "Reports",
    icon: BarChart3,
    href: "/admin/reports",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/admin/settings",
  },
];

export default function AdminDashboard() {
  const { user, logoutMutation } = useAuth();
  const [, setLocation] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (!user?.isAdmin) {
    setLocation("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex h-16 items-center gap-4 px-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <img src="/logo.png" alt="SnackStation" className="h-8 w-auto" />
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-card/80 backdrop-blur-sm border-r transition-transform lg:translate-x-0",
          !sidebarOpen && "-translate-x-full"
        )}
      >
        {/* Sidebar Header */}
        <div className="border-b p-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="SnackStation" className="h-8 w-auto" />
            <span className="font-semibold">Admin</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 p-4">
          {menuItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              className="w-full justify-start gap-2"
              onClick={() => setLocation(item.href)}
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </Button>
          ))}
        </nav>

        {/* Footer */}
        <div className="border-t p-4">
          <Button
            variant="ghost"
            className="w-full justify-start gap-2"
            onClick={() => logoutMutation.mutate()}
          >
            <LogOut className="h-5 w-5" />
            Logout
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={cn(
          "min-h-screen transition-all duration-200",
          sidebarOpen ? "lg:pl-64" : ""
        )}
      >
        <div className="container mx-auto p-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold">Welcome back, {user.name}</h1>
            <p className="text-muted-foreground mt-2">
              Manage your vending machine network from here
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Total Partners", value: "24" },
              { label: "Active Machines", value: "156" },
              { label: "Monthly Revenue", value: "£24,500" },
              { label: "Total Sales", value: "2,450" },
            ].map((stat, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card p-6 shadow-sm"
              >
                <h3 className="text-sm font-medium text-muted-foreground">
                  {stat.label}
                </h3>
                <p className="mt-2 text-3xl font-bold">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
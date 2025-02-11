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
  Plus,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { User } from "@shared/schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Sidebar navigation items
const menuItems = [
  {
    title: "Partners",
    icon: Users,
    href: "/admin/partners",
    description: "Manage partner accounts and permissions",
  },
  {
    title: "Machines",
    icon: ShoppingBag,
    href: "/admin/machines",
    description: "View and manage vending machines",
  },
  {
    title: "Reports",
    icon: BarChart3,
    href: "/admin/reports",
    description: "View sales and performance reports",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/admin/settings",
    description: "Configure system settings",
  },
];

export default function AdminDashboard() {
  const { user, logoutMutation } = useAuth();
  const [, setLocation] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const { data: partners } = useQuery<User[]>({
    queryKey: ["/api/admin/partners"],
  });

  if (!user?.isAdmin) {
    setLocation("/");
    return null;
  }

  return (
    <div className="h-screen flex bg-background">
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 border-b bg-card/80 backdrop-blur-sm">
        <div className="flex h-16 items-center gap-4 px-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <span className="font-semibold">Admin Dashboard</span>
        </div>
      </div>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-40 w-72 flex flex-col bg-card/80 backdrop-blur-sm border-r transition-transform lg:translate-x-0",
          !sidebarOpen && "-translate-x-full"
        )}
      >
        {/* Sidebar Header */}
        <div className="flex items-center gap-2 h-16 px-6 border-b">
          <img src="/logo.png" alt="SnackStation" className="h-8 w-auto" />
          <span className="font-semibold">Admin</span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-2">
            {menuItems.map((item) => (
              <Button
                key={item.href}
                variant="ghost"
                className="w-full justify-start gap-4 h-auto py-4"
                onClick={() => setLocation(item.href)}
              >
                <item.icon className="h-5 w-5 shrink-0" />
                <div className="text-left">
                  <div>{item.title}</div>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Button>
            ))}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t">
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
          "flex-1 overflow-y-auto transition-all duration-200 pt-16 lg:pt-0",
          sidebarOpen ? "lg:pl-72" : ""
        )}
      >
        <div className="container mx-auto p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold">Welcome back, {user.name}</h1>
              <p className="text-muted-foreground mt-2">
                Manage your vending machine network from here
              </p>
            </div>
            <Button onClick={() => setLocation("/admin/new-partner")}>
              <Plus className="h-4 w-4 mr-2" />
              New Partner
            </Button>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            {[
              {
                label: "Total Partners",
                value: partners?.length || 0,
                href: "/admin/partners",
              },
              {
                label: "Active Machines",
                value: "156",
                href: "/admin/machines",
              },
              {
                label: "Monthly Revenue",
                value: "£24,500",
                href: "/admin/reports",
              },
              {
                label: "Total Sales",
                value: "2,450",
                href: "/admin/reports",
              },
            ].map((stat, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setLocation(stat.href)}
              >
                <CardContent className="p-6">
                  <p className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Partners</CardTitle>
                <CardDescription>
                  Latest partners to join the network
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {partners?.slice(0, 5).map((partner) => (
                    <div
                      key={partner.id}
                      className="flex items-center justify-between"
                    >
                      <div>
                        <p className="font-medium">{partner.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {partner.email}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setLocation(`/admin/partners/${partner.id}`)}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>
                  Common administrative tasks
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-2">
                {menuItems.map((item) => (
                  <Button
                    key={item.href}
                    variant="outline"
                    className="w-full justify-start gap-2"
                    onClick={() => setLocation(item.href)}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.title}
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
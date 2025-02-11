import { useAuth } from "@/hooks/use-auth";
import { useQuery } from "@tanstack/react-query";
import { User } from "@shared/schema";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, LogOut } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function AdminDashboard() {
  const { user, logoutMutation } = useAuth();
  const [, setLocation] = useLocation();

  const { data: partners, isLoading } = useQuery<User[]>({
    queryKey: ["/api/admin/partners"],
  });

  if (!user?.isAdmin) {
    setLocation("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src="/logo.png"
                alt="SnackStation" 
                className="h-8 w-auto"
              />
              <h1 className="text-xl font-bold">Admin Dashboard</h1>
            </div>

            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => logoutMutation.mutate()}
              >
                <LogOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold">Partner Management</h2>
            <p className="text-muted-foreground">
              Manage your vending machine partners and their locations
            </p>
          </div>
          <Button asChild>
            <Link href="/admin/new-partner" className="flex items-center gap-2">
              <UserPlus className="h-5 w-5" />
              Add Partner
            </Link>
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Active Partners</CardTitle>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-8">
                <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto" />
                <p className="text-muted-foreground mt-4">Loading partners...</p>
              </div>
            ) : !partners?.length ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserPlus className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">No Partners Yet</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Start by adding your first vending machine partner to manage their locations and track performance.
                </p>
                <Button asChild>
                  <Link href="/admin/new-partner">Add Your First Partner</Link>
                </Button>
              </div>
            ) : (
              <div className="divide-y">
                {partners.map((partner) => (
                  <div key={partner.id} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold text-lg">{partner.name}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span>{partner.email}</span>
                          <span className="text-muted-foreground/40">•</span>
                          <span>@{partner.username}</span>
                        </div>
                      </div>
                      <Button variant="outline" asChild>
                        <Link href={`/admin/partners/${partner.id}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
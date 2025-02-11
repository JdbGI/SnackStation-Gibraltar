import { useAuth } from "@/hooks/use-auth";
import { useQuery } from "@tanstack/react-query";
import { User } from "@shared/schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { UserPlus, LogOut } from "lucide-react";
import { Link, useLocation } from "wouter";

export default function AdminDashboard() {
  const { user, logoutMutation } = useAuth();
  const [, setLocation] = useLocation();

  // Fetch all partners (non-admin users)
  const { data: partners, isLoading } = useQuery<User[]>({
    queryKey: ["/api/admin/partners"],
  });

  if (!user?.isAdmin) {
    setLocation("/");
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with branding and logout */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/logo.png"
                alt="SnackStation" 
                className="h-8 w-auto"
              />
              <h1 className="text-xl font-semibold">Admin Dashboard</h1>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => logoutMutation.mutate()}
            >
              <LogOut className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Action Buttons */}
        <div className="mb-8">
          <Button asChild>
            <Link href="/admin/new-partner" className="flex items-center gap-2">
              <UserPlus className="h-5 w-5" />
              Add New Partner
            </Link>
          </Button>
        </div>

        {/* Partner List */}
        <Card>
          <CardHeader>
            <CardTitle>Partners</CardTitle>
            <CardDescription>
              Manage vending machine partners and their locations
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-4">Loading partners...</div>
            ) : !partners?.length ? (
              <div className="text-center py-4">
                <p className="text-muted-foreground">No partners yet</p>
              </div>
            ) : (
              <div className="divide-y">
                {partners.map((partner) => (
                  <div key={partner.id} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-semibold">{partner.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {partner.email}
                        </p>
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
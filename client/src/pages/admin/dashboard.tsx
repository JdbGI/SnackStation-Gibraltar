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
import { UserPlus, LogOut, Building2 } from "lucide-react";
import { Link, useLocation } from "wouter";
import Loader2 from "@/components/ui/loader2";

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

  if (isLoading) {
    return <Loader2 className="min-h-screen" />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Navigation */}
      <header className="border-b bg-card shadow-sm">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/logo.png"
                alt="SnackStation" 
                className="h-8"
              />
              <h1 className="text-xl font-semibold">Admin Portal</h1>
            </div>
            <div className="flex items-center space-x-4">
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

      <main className="container mx-auto px-4 py-8">
        {/* Quick Actions */}
        <div className="mb-8">
          <Button className="gap-2" asChild>
            <Link href="/admin/partners/new">
              <UserPlus className="h-5 w-5" />
              Add New Partner
            </Link>
          </Button>
        </div>

        {/* Partners Overview */}
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Partner Overview</CardTitle>
              <CardDescription>
                Manage your SnackStation partners and their machines
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!partners?.length ? (
                <div className="text-center py-12">
                  <Building2 className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <h3 className="text-lg font-semibold mb-2">No Partners Yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Get started by adding your first SnackStation partner
                  </p>
                  <Button asChild>
                    <Link href="/admin/partners/new">Add Your First Partner</Link>
                  </Button>
                </div>
              ) : (
                <div className="divide-y">
                  {partners.map((partner) => (
                    <div key={partner.id} className="py-4 first:pt-0 last:pb-0">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold">{partner.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {partner.email}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" asChild>
                            <Link href={`/admin/partners/${partner.id}`}>
                              View Details
                            </Link>
                          </Button>
                          <Button variant="outline" asChild>
                            <Link href={`/admin/partners/${partner.id}/machines`}>
                              Manage Machines
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
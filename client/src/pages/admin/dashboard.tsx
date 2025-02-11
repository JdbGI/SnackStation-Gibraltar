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
import { Loader2, UserPlus } from "lucide-react";
import { Link } from "wouter";

export default function AdminDashboard() {
  const { user } = useAuth();

  const { data: partners, isLoading: loadingPartners } = useQuery<User[]>({
    queryKey: ["/api/admin/partners"],
  });

  if (!user?.isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="w-full max-w-md mx-4">
          <CardContent className="pt-6">
            <h1 className="text-2xl font-bold text-center mb-4">Access Denied</h1>
            <p className="text-muted-foreground text-center">
              You don't have permission to access this page.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (loadingPartners) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-border" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <h1 className="text-xl font-semibold">Admin Dashboard</h1>
          <Button className="flex items-center gap-2">
            <UserPlus className="h-5 w-5" />
            <Link href="/admin/partners/new">Add New Partner</Link>
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>Partners</CardTitle>
            <CardDescription>
              Manage partner accounts and their vending machines
            </CardDescription>
          </CardHeader>
          <CardContent>
            {partners?.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground mb-4">No partners yet</p>
                <Button asChild>
                  <Link href="/admin/partners/new">Add Your First Partner</Link>
                </Button>
              </div>
            ) : (
              <div className="divide-y">
                {partners?.map((partner) => (
                  <div key={partner.id} className="py-4">
                    <div className="flex items-start justify-between">
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
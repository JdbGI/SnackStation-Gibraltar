import { useAuth } from "@/hooks/use-auth";
import { useQuery } from "@tanstack/react-query";
import { User, Machine } from "@shared/schema";
import { useLocation, useParams } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Loader2 from "@/components/ui/loader2";
import { ArrowLeft } from "lucide-react";

export default function PartnerDetails() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();
  const params = useParams();

  const { data, isLoading } = useQuery<{ partner: User; machines: Machine[] }>({
    queryKey: ["/api/admin/partners", params.id],
  });

  if (!user?.isAdmin) {
    setLocation("/");
    return null;
  }

  if (isLoading) {
    return <Loader2 className="min-h-screen" />;
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-background p-4">
        <Card>
          <CardContent className="pt-6">
            <p className="text-center text-muted-foreground">Partner not found</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b bg-card">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setLocation("/admin")}>
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-semibold">Partner Details</h1>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>{data.partner.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  {data.partner.email}
                </p>
                <p>
                  <span className="font-medium">Username:</span>{" "}
                  {data.partner.username}
                </p>
                <p>
                  <span className="font-medium">Number of Machines:</span>{" "}
                  {data.machines.length}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

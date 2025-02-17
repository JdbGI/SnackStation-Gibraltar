import { useAuth } from "@/hooks/use-auth";
import { useQuery } from "@tanstack/react-query";
import { User } from "@shared/schema";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, ArrowUpRight, ArrowLeft } from "lucide-react";
import { Loader2 } from "lucide-react";

export default function Partners() {
  const { user } = useAuth();
  const [, setLocation] = useLocation();

  const { data: partners, isLoading } = useQuery<User[]>({
    queryKey: ["/api/admin/partners"],
    staleTime: 0, // Always refetch when mounting
    refetchOnMount: true // Always refetch when mounting
  });

  if (!user?.isAdmin) {
    setLocation("/");
    return null;
  }

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">
      <Loader2 className="h-8 w-8 animate-spin" />
    </div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setLocation("/admin")}
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <h1 className="text-xl font-semibold">Partners</h1>
            </div>
            <Button onClick={() => setLocation("/admin/new-partner")}>
              <Plus className="h-4 w-4 mr-2" />
              New Partner
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle>All Partners</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Username</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {partners?.map((partner) => (
                  <TableRow key={partner.id}>
                    <TableCell>{partner.name}</TableCell>
                    <TableCell>{partner.username}</TableCell>
                    <TableCell>{partner.email}</TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => setLocation(`/admin/partners/${partner.id}`)}
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
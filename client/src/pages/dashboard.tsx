import { useAuth } from "@/hooks/use-auth";
import { useQuery } from "@tanstack/react-query";
import { Machine, Sales } from "@shared/schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, LogOut } from "lucide-react";
import { format } from "date-fns";

function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(amount);
}

export default function Dashboard() {
  const { user, logoutMutation } = useAuth();

  const { data: machines, isLoading: loadingMachines } = useQuery<Machine[]>({
    queryKey: ["/api/machines"],
  });

  if (loadingMachines) {
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
          <h1 className="text-xl font-semibold">Welcome, {user?.name}</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => logoutMutation.mutate()}
          >
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-8">
          {machines?.map((machine) => (
            <MachineCard key={machine.id} machine={machine} />
          ))}
        </div>
      </main>
    </div>
  );
}

function MachineCard({ machine }: { machine: Machine }) {
  const { data: sales, isLoading } = useQuery<Sales[]>({
    queryKey: ["/api/machines", machine.id, "sales"],
  });

  if (isLoading) {
    return (
      <Card>
        <CardContent className="p-8 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-border" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Machine #{machine.machineNumber}</CardTitle>
        <CardDescription>{machine.location}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {sales?.map((sale) => (
            <div key={sale.id} className="space-y-4">
              <h3 className="font-semibold">
                {format(new Date(sale.date), "MMMM yyyy")}
              </h3>
              <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <div className="text-sm text-muted-foreground">Total Sales</div>
                  <div className="text-2xl font-semibold">{sale.totalSales}</div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Revenue</div>
                  <div className="text-2xl font-semibold">
                    {formatCurrency(Number(sale.revenue))}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Card Commission (2.99%)
                  </div>
                  <div className="text-2xl font-semibold">
                    {formatCurrency(Number(sale.cardCommission))}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Profit Sharing
                  </div>
                  <div className="text-2xl font-semibold">
                    {formatCurrency(Number(sale.profitSharingEarnings))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

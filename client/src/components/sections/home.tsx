import { Button } from "@/components/ui/button";

export default function Home() {
  const handlePartnerLogin = () => {
    window.location.href = "https://partner.snackstation.gi";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="SnackStation" className="h-8 w-auto" />
              <span className="font-semibold">SnackStation</span>
            </div>
            <Button 
              variant="outline"
              onClick={handlePartnerLogin}
              className="font-medium"
            >
              Partner Login
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>
        {/* Your landing page content will go here */}
      </main>
    </div>
  );
}

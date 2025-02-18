import { Button } from "@/components/ui/button";

const Home = () => {
  const handlePartnerLogin = () => {
    window.location.href = "https://partner.snackstation.gi";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
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
      <main className="pt-16">
        {/* Your landing page content will go here */}
      </main>
    </div>
  );
};

export default Home;
import { useAuth } from "@/hooks/use-auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertUserSchema, type InsertUser } from "@shared/schema";
import { useLocation } from "wouter";
import { useEffect } from "react";

export default function AuthPage() {
  const { user, loginMutation } = useAuth();
  const [, setLocation] = useLocation();

  useEffect(() => {
    if (user) {
      setLocation("/dashboard");
    }
  }, [user, setLocation]);

  const loginForm = useForm<Pick<InsertUser, "username" | "password">>({
    resolver: zodResolver(
      insertUserSchema.pick({ username: true, password: true })
    ),
  });

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader>
              <CardTitle>Customer Login</CardTitle>
              <CardDescription>
                Access your vending machine statistics and reports
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={loginForm.handleSubmit((data) => loginMutation.mutate(data))}
                className="space-y-4"
              >
                <div className="space-y-2">
                  <Input
                    placeholder="Username"
                    {...loginForm.register("username")}
                    className={loginForm.formState.errors.username ? "border-destructive" : ""}
                  />
                  {loginForm.formState.errors.username && (
                    <p className="text-sm text-destructive">
                      {loginForm.formState.errors.username.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <Input
                    type="password"
                    placeholder="Password"
                    {...loginForm.register("password")}
                    className={loginForm.formState.errors.password ? "border-destructive" : ""}
                  />
                  {loginForm.formState.errors.password && (
                    <p className="text-sm text-destructive">
                      {loginForm.formState.errors.password.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={loginMutation.isPending}
                >
                  {loginMutation.isPending ? "Signing in..." : "Sign In"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="hidden md:flex bg-muted items-center justify-center p-8">
        <div className="max-w-md space-y-4 text-center">
          <h1 className="text-4xl font-bold">Welcome to SnackStation</h1>
          <p className="text-muted-foreground">
            Access your vending machine statistics, track sales, and monitor your revenue
            sharing earnings all in one place. Contact us to join our network and get
            your account credentials.
          </p>
          <Button variant="outline" size="lg" asChild>
            <a href="/#contact">Contact Us</a>
          </Button>
        </div>
      </div>
    </div>
  );
}
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
  const { user, loginMutation, registerMutation } = useAuth();
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

  const registerForm = useForm<InsertUser>({
    resolver: zodResolver(insertUserSchema),
  });

  return (
    <div className="min-h-screen grid md:grid-cols-2">
      <div className="flex items-center justify-center p-8">
        <div className="w-full max-w-md space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Access your vending machine statistics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={loginForm.handleSubmit((data) => loginMutation.mutate(data))}
                className="space-y-4"
              >
                <Input
                  placeholder="Username"
                  {...loginForm.register("username")}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  {...loginForm.register("password")}
                />
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

          <Card>
            <CardHeader>
              <CardTitle>Register</CardTitle>
              <CardDescription>
                Create a new account for your vending machine
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={registerForm.handleSubmit((data) =>
                  registerMutation.mutate(data)
                )}
                className="space-y-4"
              >
                <Input
                  placeholder="Name"
                  {...registerForm.register("name")}
                />
                <Input
                  placeholder="Email"
                  type="email"
                  {...registerForm.register("email")}
                />
                <Input
                  placeholder="Username"
                  {...registerForm.register("username")}
                />
                <Input
                  type="password"
                  placeholder="Password"
                  {...registerForm.register("password")}
                />
                <Button
                  type="submit"
                  className="w-full"
                  disabled={registerMutation.isPending}
                >
                  {registerMutation.isPending ? "Creating..." : "Create Account"}
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
            sharing earnings all in one place.
          </p>
        </div>
      </div>
    </div>
  );
}

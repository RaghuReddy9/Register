import { LoginForm } from "@/components/login-form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { HandHeart } from "lucide-react";

export default function AdminLoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-sm shadow-2xl">
        <CardHeader className="text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <HandHeart className="h-8 w-8 text-primary" />
            <CardTitle className="text-2xl font-headline">VolunteerConnect</CardTitle>
          </div>
          <CardDescription>Administrator Login</CardDescription>
        </CardHeader>
        <CardContent>
          <LoginForm />
        </CardContent>
      </Card>
    </div>
  );
}

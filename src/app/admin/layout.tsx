import Link from "next/link";
import { HandHeart, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { logout } from "@/lib/actions";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-secondary border-b">
        <Link href="/admin/dashboard" className="flex items-center justify-center gap-2" prefetch={false}>
          <HandHeart className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold text-primary-foreground font-headline">VolunteerConnect Admin</span>
        </Link>
        <div className="ml-auto">
          <form action={logout}>
            <Button variant="ghost" size="icon" type="submit">
              <LogOut className="h-5 w-5" />
              <span className="sr-only">Logout</span>
            </Button>
          </form>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  );
}

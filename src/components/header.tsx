import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HandHeart } from "lucide-react";

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background border-b sticky top-0 z-50">
      <Link href="/" className="flex items-center justify-center gap-2" prefetch={false}>
        <HandHeart className="h-6 w-6 text-primary" />
        <span className="text-lg font-semibold text-primary-foreground font-headline">VolunteerConnect</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Button variant="link" asChild>
          <Link href="/" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Home
          </Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="/register" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Register
          </Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="/admin" className="text-sm font-medium" prefetch={false}>
            Admin
          </Link>
        </Button>
      </nav>
    </header>
  );
}

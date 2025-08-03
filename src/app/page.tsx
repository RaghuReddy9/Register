import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Header } from "@/components/header";
import { Users, Target, HeartHandshake } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6">
              <div className="flex flex-col justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline">
                    Connect. Volunteer. Inspire.
                  </h1>
                  <p className="max-w-[600px] mx-auto text-muted-foreground md:text-xl">
                    VolunteerConnect is dedicated to bringing together passionate individuals with organizations that make a difference. Find your purpose and make an impact in your community.
                  </p>
                </div>
                <div className="flex justify-center flex-col gap-2 min-[400px]:flex-row max-w-sm mx-auto">
                  <Button asChild size="lg">
                    <Link href="/register">
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Why Volunteer With Us?</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We partner with a diverse range of non-profits and community projects, ensuring your skills and passion are matched with a meaningful cause.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-16 mt-12">
              <Card className="shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary rounded-md p-3">
                    <HeartHandshake className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-headline">Meaningful Connections</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Join a community of like-minded individuals and build lasting relationships while contributing to important causes.</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary rounded-md p-3">
                    <Users className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-headline">Diverse Opportunities</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">From event planning to community outreach, find a role that fits your skills and availability.</p>
                </CardContent>
              </Card>
              <Card className="shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="bg-primary rounded-md p-3">
                    <Target className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="font-headline">Make a Real Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Your contribution, big or small, directly supports organizations that are changing lives in your community.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 VolunteerConnect. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

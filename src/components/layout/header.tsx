"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, School } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { NavigationData, NavigationItem } from "@/lib/data";

interface HeaderProps {
  navigation: NavigationData;
}

export function Header({ navigation }: HeaderProps) {
  const pathname = usePathname();

  const filteredNavItems = navigation.items.filter(
    (item: NavigationItem) => item.label !== "Testimonials"
  );

  return (
    <header className="bg-card/80 backdrop-blur-sm sticky top-0 z-40 border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold text-card-foreground">
          <School className="h-7 w-7 text-accent" />
          <span>Alterman Tutoring</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {filteredNavItems.map((link) => (
            <Button key={link.href} variant="ghost" asChild>
              <Link href={link.href} className={cn(
                "font-semibold transition-colors",
                pathname === link.href ? "text-accent" : "text-card-foreground/80 hover:text-card-foreground"
              )}>
                {link.label}
              </Link>
            </Button>
          ))}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-8 pt-10">
                <Link href="/" className="flex items-center gap-2 font-headline text-2xl font-bold">
                  <School className="h-7 w-7 text-accent" />
                  <span>Alterman Tutoring</span>
                </Link>
                <nav className="flex flex-col gap-4">
                {filteredNavItems.map((link) => (
                    <Link key={link.href} href={link.href} className={cn(
                        "text-xl font-semibold hover:text-accent transition-colors",
                        pathname === link.href ? "text-accent" : "text-foreground"
                    )}>
                    {link.label}
                    </Link>
                ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

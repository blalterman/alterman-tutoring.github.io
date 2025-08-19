import { getSiteInfo } from "@/lib/data";
import { School } from 'lucide-react';
import Link from 'next/link';
import { CTAButton } from "../CTAButton";

export async function Footer() {
  const siteInfo = await getSiteInfo();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link href="/" className="flex items-center gap-2 font-headline text-xl font-bold text-card-foreground">
            <School className="h-6 w-6 text-accent" />
            <span>{siteInfo.name}</span>
          </Link>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {currentYear} {siteInfo.name}. All Rights Reserved.
            </p>
            <div className="hidden md:block">
              <CTAButton email={siteInfo.bookingEmail} label="Contact" />
            </div>
            <a href={`mailto:${siteInfo.email}`} className="text-sm font-semibold text-muted-foreground hover:text-accent transition-colors md:hidden">
              {siteInfo.email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

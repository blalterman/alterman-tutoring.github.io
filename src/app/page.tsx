
import { getSiteInfo, getTutoringStyle, getSeoData } from "@/lib/data";
import { KeyFact } from "@/components/KeyFact";
import { CTAButton } from "@/components/CTAButton";
import { BookOpen, MapPin, Users } from 'lucide-react';
import { type Metadata } from 'next';
import Link from "next/link";

export async function generateMetadata(): Promise<Metadata> {
    const seoData = await getSeoData();
    return {
        title: seoData.home.title,
        description: seoData.home.description,
    };
}

export default async function Home() {
  const siteInfo = await getSiteInfo();
  const tutoringStyle = await getTutoringStyle();

  const keyFacts = [
    {
      icon: <BookOpen className="h-8 w-8 text-accent" />,
      title: "Services",
      description: siteInfo.serviceSummary,
      href: "/services",
    },
    {
      icon: <Users className="h-8 w-8 text-accent" />,
      title: "Tutoring Style",
      description: tutoringStyle.styleDescription,
      href: "/about",
    },
    {
      icon: <MapPin className="h-8 w-8 text-accent" />,
      title: "Service Areas",
      description: siteInfo.serviceAreas.join(', '),
      href: "/services",
    },
  ];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
          {siteInfo.siteName}
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
          {siteInfo.valueProposition}
        </p>
        <div className="mt-8 flex gap-4 justify-center">
          <CTAButton email={siteInfo.bookingEmail} label={siteInfo.primaryCtaLabel} />
        </div>
      </section>

      {/* Key Facts Section */}
      <section>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {keyFacts.map((item, index) => (
            <Link key={index} href={item.href}>
              <KeyFact icon={item.icon} title={item.title} description={item.description} />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

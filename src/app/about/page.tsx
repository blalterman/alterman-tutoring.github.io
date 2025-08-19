import { getAboutContent, getSiteInfo, getSeoData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Metadata } from 'next';
import { LinkifiedText } from "@/components/LinkifiedText";
import { CTAButton } from "@/components/CTAButton";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
    const seoData = await getSeoData();
    const aboutContent = await getAboutContent();
    return {
        title: "About Ben",
        description: aboutContent.intro,
    };
}

export default async function AboutPage() {
    const about = await getAboutContent();
    const siteInfo = await getSiteInfo();

    return (
        <div className="space-y-12">
            <section className="text-center">
                <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight">About Ben</h1>
                <div className="mt-8 flex justify-center">
                    <Image
                        src="/images/headshot.jpg"
                        alt="A headshot of Ben Alterman"
                        width={150}
                        height={150}
                        className="rounded-full border-4 border-primary/20 shadow-lg"
                        data-ai-hint="headshot person"
                    />
                </div>
            </section>
            
            <div className="max-w-4xl mx-auto space-y-8">
                <Card>
                    <CardContent className="pt-6 space-y-4 text-lg">
                        <p>{about.intro}</p>
                        <p>{about.styleDescription}</p>
                        <p>{about.experience}</p>
                        <p>{about.ldPerspective}</p>
                        <p>{about.meetingFormat}</p>
                        <LinkifiedText text={about.professionalNote} className="text-lg" />
                        <p className="font-semibold">{about.consultCta}</p>
                    </CardContent>
                </Card>
                <div className="text-center">
                    <CTAButton email={siteInfo.bookingEmail} label="Schedule a Consultation" />
                </div>
            </div>
        </div>
    );
}

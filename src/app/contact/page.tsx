import { getSiteInfo, getSeoData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { type Metadata } from 'next';
import { CTAButton } from "@/components/CTAButton";

export async function generateMetadata(): Promise<Metadata> {
    const seoData = await getSeoData();
    return {
        title: "Contact Me",
        description: seoData.contact.description,
    };
}

export default async function ContactPage() {
    const siteInfo = await getSiteInfo();

    return (
        <div className="space-y-12">
            <section className="text-center">
                <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight">Contact Me</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Ready to get started? Reach out to schedule a consultation.
                </p>
            </section>
            
            <div className="max-w-4xl mx-auto">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-center">Scheduling Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-8 text-center">
                        <div className="space-y-4">
                             <p className="text-lg">
                                I provide tutoring for <span className="font-semibold">{siteInfo.levelsServed}</span> in <span className="font-semibold">{siteInfo.serviceAreas.join(', ')}</span>.
                            </p>
                        </div>

                        <CTAButton email={siteInfo.bookingEmail} label={siteInfo.primaryCtaLabel} />
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

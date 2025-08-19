import { getSubjects, getSiteInfo, getTutoringStyle, getSeoData } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { type Metadata } from 'next';
import { CTAButton } from "@/components/CTAButton";

export async function generateMetadata(): Promise<Metadata> {
    const seoData = await getSeoData();
    return {
        title: seoData.services.title,
        description: seoData.services.description,
    };
}

export default async function ServicesPage() {
    const subjects = await getSubjects();
    const siteInfo = await getSiteInfo();
    const tutoringStyle = await getTutoringStyle();

    return (
        <div className="space-y-12">
            <section className="text-center">
                <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight">Services</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    {tutoringStyle.styleDescription}
                </p>
            </section>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2 space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl">Math</CardTitle>
                            <CardDescription>{subjects.math.intro}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside">
                                {subjects.math.topics.map((topic, index) => (
                                    <li key={index}>{topic}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl">Physics</CardTitle>
                            <CardDescription>{subjects.physics.intro}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside">
                                {subjects.physics.topics.map((topic, index) => (
                                    <li key={index}>{topic}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle className="font-headline text-3xl">Latin</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>{subjects.latin.intro}</p>
                            {subjects.latin.topics && subjects.latin.topics.length > 0 && (
                                <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 list-disc list-inside">
                                    {subjects.latin.topics.map((topic, index) => (
                                        <li key={index}>{topic}</li>
                                    ))}
                                </ul>
                            )}
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card>
                        <CardHeader>
                            <CardTitle>Rate & Policy</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div>
                                <h3 className="font-semibold">Hourly Rate</h3>
                                <p className="text-muted-foreground">${siteInfo.ratePerHourUSD}/hour</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Cancellation Policy</h3>
                                <p className="text-muted-foreground">{siteInfo.cancellationPolicy}</p>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Service Areas</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside text-muted-foreground">
                                {siteInfo.serviceAreas.map((area, index) => (
                                    <li key={index}>{area}</li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    <CTAButton email={siteInfo.bookingEmail} label="Schedule a Consultation" fullWidth={true} />
                </div>
            </div>
        </div>
    );
}

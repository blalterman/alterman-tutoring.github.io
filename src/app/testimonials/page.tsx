import { getTestimonials, getSeoData } from "@/lib/data";
import { TestimonialCard } from "@/components/TestimonialCard";
import { type Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
    const seoData = await getSeoData();
    return {
        title: seoData.testimonials.title,
        description: seoData.testimonials.description,
    };
}

export default async function TestimonialsPage() {
    const testimonialsData = await getTestimonials();

    return (
        <div className="space-y-12">
            <section className="text-center">
                <h1 className="font-headline text-4xl sm:text-5xl font-bold tracking-tight">Testimonials</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                    Hear from parents and students about their experiences.
                </p>
            </section>
            
            <section>
                {testimonialsData.items.length > 0 ? (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {testimonialsData.items.map((testimonial) => (
                            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                        ))}
                    </div>
                ) : (
                    <p className="mt-8 text-center text-muted-foreground">No testimonials yet. Check back soon!</p>
                )}
            </section>
        </div>
    );
}

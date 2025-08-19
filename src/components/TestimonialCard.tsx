import { Card, CardContent, CardHeader, CardFooter, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Testimonial } from "@/lib/data";
import { format } from 'date-fns';

interface TestimonialCardProps {
    testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
    return (
        <Card key={testimonial.id} className="flex flex-col">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle>{testimonial.name}</CardTitle>
                        <CardDescription>{testimonial.role} ({testimonial.relationship})</CardDescription>
                    </div>
                    <Badge variant="secondary">{testimonial.subject}</Badge>
                </div>
            </CardHeader>
            <CardContent className="flex-grow">
                <blockquote className="italic text-card-foreground/90 border-l-4 pl-4">
                    "{testimonial.quote}"
                </blockquote>
            </CardContent>
            <CardFooter>
                <p className="text-sm text-muted-foreground w-full text-right">
                    {format(new Date(testimonial.date), 'MMMM yyyy')}
                </p>
            </CardFooter>
        </Card>
    );
}

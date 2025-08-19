import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
    email: string;
    label: string;
    fullWidth?: boolean;
}

export function CTAButton({ email, label, fullWidth = false }: CTAButtonProps) {
    return (
        <Button size="lg" asChild className={cn(
            "bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition-shadow hover:shadow-lg",
            fullWidth && "w-full"
        )}>
            <Link href={`mailto:${email}`}>
                <Mail className="mr-2 h-5 w-5" />
                {label}
            </Link>
        </Button>
    );
}

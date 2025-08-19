import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Frown } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20">
      <Frown className="w-24 h-24 text-accent/50 mb-4" />
      <h1 className="font-headline text-6xl font-bold text-primary-foreground/80">404</h1>
      <h2 className="font-headline text-3xl mt-2 font-semibold">Page Not Found</h2>
      <p className="mt-4 max-w-md text-muted-foreground">
        Sorry, the page you are looking for does not exist. You might have mistyped the address or the page may have moved.
      </p>
      <Button asChild className="mt-8 bg-accent hover:bg-accent/90 text-accent-foreground">
        <Link href="/">Return to Homepage</Link>
      </Button>
    </div>
  );
}

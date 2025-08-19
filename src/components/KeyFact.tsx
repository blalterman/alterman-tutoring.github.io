import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

interface KeyFactProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function KeyFact({ icon, title, description }: KeyFactProps) {
  return (
    <Card className="text-center border-2 border-transparent hover:border-primary/50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <CardHeader>
        <div className="mx-auto bg-primary/20 p-3 rounded-full w-fit">
          {icon}
        </div>
        <CardTitle className="font-headline text-2xl pt-4">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground h-24">{description}</p>
      </CardContent>
    </Card>
  );
}

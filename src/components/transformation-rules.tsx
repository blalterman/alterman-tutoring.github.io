import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowRightLeft, PlusCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const rules = [
  { from: 'LegacyButton.js', to: 'Button.tsx', type: 'component' },
  { from: 'InfoCard.vue', to: 'InfoCard.tsx', type: 'component' },
  { from: 'config.yaml', to: 'next.config.js', type: 'config' },
];

export function TransformationRules() {
  return (
    <Card className="flex h-full flex-col transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
            <CardTitle className="font-headline text-lg font-medium">
            Transformation Rules
            </CardTitle>
            <ArrowRightLeft className="h-5 w-5 text-muted-foreground" />
        </div>
        <CardDescription>Define mapping rules for migration.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            {rules.map((rule, index) => (
              <div
                key={index}
                className="flex items-center justify-between gap-2 rounded-lg bg-muted/30 p-3"
              >
                <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                  <span className="truncate rounded bg-background px-2 py-1">{rule.from}</span>
                  <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <span className="truncate rounded bg-background px-2 py-1">{rule.to}</span>
                </div>
                <Badge
                  variant="default"
                  className="bg-accent/80 text-accent-foreground hover:bg-accent"
                >
                  {rule.type}
                </Badge>
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full">
            <PlusCircle className="mr-2 h-4 w-4" />
            Add New Rule
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

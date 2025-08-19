'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Sparkles, Bot } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { aiCodeSuggestions } from '@/ai/flows/ai-code-suggestions';
import { ScrollArea } from './ui/scroll-area';

const placeholderCode = `// Paste your code snippet here to get AI suggestions
// For example:
import React from 'react';

const MyComponent = ({ items }) => {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
};

export default MyComponent;
`;

export function AiSuggestions() {
  const [code, setCode] = useState('');
  const [outputType, setOutputType] = useState<'code' | 'description'>(
    'description'
  );
  const [suggestions, setSuggestions] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!code.trim()) {
        toast({
            variant: 'destructive',
            title: 'Empty Code',
            description: 'Please paste some code to get suggestions.',
        });
        return;
    }
    setIsLoading(true);
    setSuggestions('');
    try {
      const result = await aiCodeSuggestions({
        code,
        outputType,
      });
      setSuggestions(result.suggestions);
    } catch (error) {
      console.error('AI suggestion error:', error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Failed to get AI suggestions. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="flex h-full flex-col transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="font-headline text-lg font-medium">
            AI Code Suggestions
          </CardTitle>
          <Sparkles className="h-5 w-5 text-accent" />
        </div>
        <CardDescription>
          Get AI-powered refactoring and optimization tips.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4">
        <div className="grid w-full flex-1 gap-1.5">
          <Label htmlFor="code-input">Your Code</Label>
          <Textarea
            id="code-input"
            placeholder={placeholderCode}
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="h-full min-h-[150px] font-code text-xs"
          />
        </div>
        <div className="grid w-full gap-1.5">
          <Label>Output Type</Label>
          <RadioGroup
            defaultValue="description"
            className="flex space-x-4"
            value={outputType}
            onValueChange={(value: 'code' | 'description') =>
              setOutputType(value)
            }
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="description" id="r-desc" />
              <Label htmlFor="r-desc">Description</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="code" id="r-code" />
              <Label htmlFor="r-code">Refactored Code</Label>
            </div>
          </RadioGroup>
        </div>
        <Button onClick={handleGenerate} disabled={isLoading}>
          {isLoading ? (
            'Generating...'
          ) : (
            <>
              <Sparkles className="mr-2 h-4 w-4" /> Generate Suggestions
            </>
          )}
        </Button>
        <div className="grid w-full gap-1.5">
          <Label>Suggestions</Label>
          <ScrollArea className="h-full min-h-[150px] w-full rounded-md bg-muted/30 p-4">
            {isLoading ? (
              <div className="space-y-2">
                <Skeleton className="h-4 w-4/5" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
              </div>
            ) : suggestions ? (
              <pre className="whitespace-pre-wrap text-sm font-code">
                <code>{suggestions}</code>
              </pre>
            ) : (
              <div className="flex h-full flex-col items-center justify-center text-center text-muted-foreground">
                <Bot className="mb-2 h-8 w-8" />
                <p className="text-sm">
                  Your AI suggestions will appear here.
                </p>
              </div>
            )}
          </ScrollArea>
        </div>
      </CardContent>
    </Card>
  );
}

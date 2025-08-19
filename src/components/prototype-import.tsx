'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UploadCloud } from 'lucide-react';

export function PrototypeImport() {
  return (
    <Card className="flex h-full flex-col transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
            <CardTitle className="font-headline text-lg font-medium">
            Prototype Import
            </CardTitle>
            <UploadCloud className="h-5 w-5 text-muted-foreground" />
        </div>
        <CardDescription>Upload your project files to begin.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <label
          htmlFor="file-upload"
          className="flex h-full cursor-pointer flex-col items-center justify-center space-y-4 rounded-lg border-2 border-dashed border-muted-foreground/20 p-8 text-center"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
            <UploadCloud className="h-8 w-8 text-accent" />
          </div>
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-accent">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-muted-foreground/70">
              Supports JSON, YAML files
            </p>
          </div>
          <Input type="file" className="hidden" id="file-upload" multiple />
        </label>
      </CardContent>
    </Card>
  );
}

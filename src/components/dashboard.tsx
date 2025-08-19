import { AiSuggestions } from '@/components/ai-suggestions';
import { Header } from '@/components/header';
import { NextJsStructure } from '@/components/nextjs-structure';
import { PrototypeImport } from '@/components/prototype-import';
import { StructureVisualizer } from '@/components/structure-visualizer';
import { TransformationRules } from '@/components/transformation-rules';

export function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 lg:grid-cols-3">
          <div className="grid gap-8 lg:col-span-2 xl:col-span-2">
            <div className="grid gap-8 md:grid-cols-2">
              <PrototypeImport />
              <StructureVisualizer />
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <TransformationRules />
              <NextJsStructure />
            </div>
          </div>
          <div className="lg:col-span-1 xl:col-span-1">
             <AiSuggestions />
          </div>
        </div>
      </main>
    </div>
  );
}

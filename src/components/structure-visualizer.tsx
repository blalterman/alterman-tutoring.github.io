import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GitMerge } from 'lucide-react';
import { TreeView, type TreeNode } from '@/components/tree-view';

const sampleData: TreeNode = {
  id: 'root',
  name: 'old-prototype',
  children: [
    {
      id: '1',
      name: 'components',
      children: [
        { id: '1-1', name: 'LegacyButton.js' },
        { id: '1-2', name: 'InfoCard.vue' },
      ],
    },
    {
      id: '2',
      name: 'data',
      children: [{ id: '2-1', name: 'users.json' }],
    },
    { id: '3', name: 'config.yaml' },
  ],
};

export function StructureVisualizer() {
  return (
    <Card className="flex h-full flex-col transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
            <CardTitle className="font-headline text-lg font-medium">
            Original Structure
            </CardTitle>
            <GitMerge className="h-5 w-5 text-muted-foreground" />
        </div>
        <CardDescription>Visual representation of your old prototype.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="min-h-[200px] w-full overflow-auto rounded-md bg-muted/30 p-2">
          <TreeView data={sampleData} />
        </div>
      </CardContent>
    </Card>
  );
}

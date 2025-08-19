import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { FolderGit2 } from 'lucide-react';
import { TreeView, type TreeNode } from '@/components/tree-view';

const sampleData: TreeNode = {
  id: 'root',
  name: 'new-nextjs-app',
  children: [
    {
      id: '1',
      name: 'src',
      children: [
        {
          id: '1-1',
          name: 'app',
          children: [
            { id: '1-1-1', name: 'page.tsx' },
            { id: '1-1-2', name: 'layout.tsx' },
          ],
        },
        {
          id: '1-2',
          name: 'components',
          children: [
            { id: '1-2-1', name: 'Button.tsx' },
            { id: '1-2-2', name: 'InfoCard.tsx' },
          ],
        },
      ],
    },
    { id: '2', name: 'next.config.js' },
    { id: '3', name: 'package.json' },
  ],
};

export function NextJsStructure() {
  return (
    <Card className="flex h-full flex-col transition-all hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
            <CardTitle className="font-headline text-lg font-medium">
            Next.js Structure
            </CardTitle>
            <FolderGit2 className="h-5 w-5 text-muted-foreground" />
        </div>
        <CardDescription>Preview of the generated project structure.</CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="min-h-[200px] w-full overflow-auto rounded-md bg-muted/30 p-2">
          <TreeView data={sampleData} />
        </div>
      </CardContent>
    </Card>
  );
}

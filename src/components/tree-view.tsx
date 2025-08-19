'use client';

import { useState, type ReactNode } from 'react';
import { ChevronRight, Folder, File as FileIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

export type TreeNode = {
  id: string;
  name: string;
  children?: TreeNode[];
  icon?: ReactNode;
};

type TreeViewProps = {
  data: TreeNode | TreeNode[];
  className?: string;
};

const TreeNodeComponent = ({ node }: { node: TreeNode }) => {
  const hasChildren = node.children && node.children.length > 0;

  if (!hasChildren) {
    return (
      <div
        className="flex items-center space-x-2 py-1.5 px-2 rounded-md"
        role="treeitem"
      >
        <span className="w-4" />
        {node.icon || <FileIcon className="h-4 w-4 shrink-0 text-muted-foreground" />}
        <span className="text-sm truncate">{node.name}</span>
      </div>
    );
  }

  return (
    <Collapsible defaultOpen={false}>
      <CollapsibleTrigger asChild>
        <div
          className="flex items-center space-x-2 py-1.5 px-2 rounded-md cursor-pointer hover:bg-accent/50"
          role="treeitem"
          aria-expanded="false"
        >
          <ChevronRight className="h-4 w-4 shrink-0 transform transition-transform duration-200 [&[data-state=open]]:rotate-90" />
          {node.icon || <Folder className="h-4 w-4 shrink-0 text-primary" />}
          <span className="text-sm truncate">{node.name}</span>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="pl-6 border-l border-dashed ml-[7px] mt-1 space-y-1">
          {node.children!.map((child) => (
            <TreeNodeComponent key={child.id} node={child} />
          ))}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export function TreeView({ data, className }: TreeViewProps) {
  const dataArray = Array.isArray(data) ? data : [data];
  return (
    <div role="tree" className={cn('space-y-1', className)}>
      {dataArray.map((node) => (
        <TreeNodeComponent key={node.id} node={node} />
      ))}
    </div>
  );
}

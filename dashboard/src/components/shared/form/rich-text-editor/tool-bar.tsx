import { Editor } from '@tiptap/react';
import { ToolButton } from './tool-button';

type TProps = {
  editor: Editor | null;
  content: string;
};

export function ToolBar({ editor }: TProps) {
  if (!editor) return null;

  return (
    <div className="flex flex-wrap items-center gap-3 border-b bg-neutral-100 p-3">
      <ToolButton
        onClick={() => editor.chain().focus().toggleBold().run()}
        isActive={editor.isActive('bold')}
      >
        B
      </ToolButton>
      <ToolButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        isActive={editor.isActive('heading', { level: 1 })}
      >
        H<sub>1</sub>
      </ToolButton>
      <ToolButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        isActive={editor.isActive('heading', { level: 2 })}
      >
        H<sub>2</sub>
      </ToolButton>
      <ToolButton
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        isActive={editor.isActive('heading', { level: 3 })}
      >
        H<sub>3</sub>
      </ToolButton>
      <ToolButton
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        isActive={editor.isActive('bulletList')}
      >
        Bullet List
      </ToolButton>
      <ToolButton
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        isActive={false}
      >
        Horizontal Line
      </ToolButton>
    </div>
  );
}

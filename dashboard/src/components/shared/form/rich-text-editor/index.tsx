import StarterKit from '@tiptap/starter-kit';
import { useEditor, EditorContent } from '@tiptap/react';
import { ToolBar } from './tool-bar';
import './style.css';

type TProps = {
  label: string;
  content: string;
  onChange: (content: string) => void;
};

export function RichTextEditor({ label, content, onChange }: TProps) {
  const editor = useEditor({
    extensions: [StarterKit],
    content,
    editorProps: {
      attributes: { class: 'bg-transparent p-4 outline-none flex flex-col' },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  return (
    <div className="space-y-2">
      <label className="font-semibold">{label}</label>
      <div className="overflow-hidden rounded border focus-within:ring-1 focus-within:ring-primary-700">
        <ToolBar editor={editor} content={content} />
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}

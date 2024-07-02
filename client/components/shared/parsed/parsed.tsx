import './style.css';

type TProps = {
  data: string;
};

export function Parsed({ data }: TProps) {
  return <div className="tiptap" dangerouslySetInnerHTML={{ __html: data }} />;
}

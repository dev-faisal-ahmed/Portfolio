import { Textarea } from '@/components/ui/textarea';

type TProps = {
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  defaultValue?: string;
  rows?: number;
};

export function CustomTextArea({
  name,
  label,
  placeholder,
  required,
  defaultValue,
  rows,
}: TProps) {
  return (
    <div className="space-y-2">
      <label className="font-semibold" htmlFor={name}>
        {label}
      </label>
      <Textarea
        defaultValue={defaultValue}
        name={name}
        id={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
      />
    </div>
  );
}

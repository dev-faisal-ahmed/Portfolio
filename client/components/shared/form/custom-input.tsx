import { Input } from '@/components/ui/input';

type TProps = {
  name: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'email';
  required?: boolean;
  defaultValue?: string;
};

export function CustomInput({
  name,
  label,
  placeholder,
  type = 'text',
  required,
  defaultValue,
}: TProps) {
  return (
    <div className="space-y-2">
      <label className="font-semibold" htmlFor={name}>
        {label}
      </label>
      <Input
        defaultValue={defaultValue}
        name={name}
        id={name}
        placeholder={placeholder}
        type={type}
        required={required}
      />
    </div>
  );
}

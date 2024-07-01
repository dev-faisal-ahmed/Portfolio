import { Input } from '@/components/ui/input';

type TProps = {
  name: string;
  label: string;
  placeholder: string;
  type?: 'text' | 'number' | 'password';
  required?: boolean;
};

export function CustomInput({
  name,
  label,
  placeholder,
  type = 'text',
  required,
}: TProps) {
  return (
    <div className="space-y-1">
      <label className="font-semibold" htmlFor={name}>
        {label}
      </label>
      <Input
        name={name}
        id={name}
        placeholder={placeholder}
        type={type}
        required={required}
      />
    </div>
  );
}

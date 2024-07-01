import * as Select from '@/components/ui/select';

type TProps = {
  label: string;
  placeholder: string;
  options: string[];
  required: boolean;
  value?: string;
  onValueChange: (value: string) => void;
};

export function CustomSelect({
  label,
  options,
  required,
  value,
  placeholder,
  onValueChange,
}: TProps) {
  return (
    <div className="relative flex flex-col gap-2">
      <label className="font-semibold">{label}</label>
      <Select.Select
        value={value}
        onValueChange={onValueChange}
        required={required}
      >
        <Select.SelectTrigger>
          <Select.SelectValue placeholder={placeholder} />
        </Select.SelectTrigger>
        <Select.SelectContent>
          <Select.SelectGroup>
            <Select.SelectLabel>{label}</Select.SelectLabel>
            {options.map((option) => (
              <Select.SelectItem key={option} value={option}>
                {option}
              </Select.SelectItem>
            ))}
          </Select.SelectGroup>
        </Select.SelectContent>
      </Select.Select>
    </div>
  );
}

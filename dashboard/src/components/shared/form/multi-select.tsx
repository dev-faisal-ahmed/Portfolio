import { Dispatch, KeyboardEvent, SetStateAction } from 'react';
import { RxCross2 } from 'react-icons/rx';

type TProps = {
  label: string;
  placeholder: string;
  value: string[];
  setValue: Dispatch<SetStateAction<string[]>>;
};

export function MultiSelect({ label, value, setValue, placeholder }: TProps) {
  const addToValue = (val: string) => {
    setValue((perv) => [...perv, val]);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      addToValue(event.currentTarget.value);
      event.currentTarget.value = '';
      event.preventDefault();
    }
  };

  const onRemove = (val: string) => {
    setValue((prev) => prev.filter((value) => value !== val));
  };

  return (
    <div className="space-y-2">
      <label className="font-semibold">{label}</label>

      <div className="overflow-hidden rounded-md border p-3 focus-within:ring-1 focus-within:ring-primary-500">
        {value.length ? (
          <div className="mb-2 flex flex-wrap gap-3 border-b pb-3">
            {value.map((eachValue, index) => (
              <div
                className="relative flex-1 whitespace-nowrap rounded-md bg-neutral-200 px-4 py-2 text-center"
                key={index}
              >
                <p>{eachValue}</p>
                <p
                  onClick={() => onRemove(eachValue)}
                  className="absolute -right-1 -top-1 cursor-pointer rounded-full bg-primary-300 p-[2px]"
                >
                  <RxCross2 size={12} />
                </p>
              </div>
            ))}
          </div>
        ) : null}

        <input
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="w-full outline-none"
        />
      </div>
    </div>
  );
}

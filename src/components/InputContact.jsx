import { useState } from 'react';

export default function InputContact({
  value,
  type = 'text',
  onChange,
  label,
  required = true,
  name,
}) {
  const [selected, setSelected] = useState(false);

  return (
    <div className="relative">
      <label>
        <div
          className={`absolute left-4 font-normal text-white duration-100 ${
            selected
              ? 'top-1 text-xs text-rose-300'
              : value
              ? 'top-1 text-xs'
              : 'top-3 text-base'
          }`}
        >
          {label}
          {required && ' *'}
        </div>
        <input
          className={`h-12 w-full bg-white/10 pl-4 pt-3 text-base font-normal text-white outline-0 ${
            selected
              ? 'border-b-2 border-rose-300 bg-white/10'
              : 'border-b border-white'
          }`}
          type={type}
          onFocus={() => setSelected(true)}
          onBlur={() => setSelected(false)}
          value={value}
          onChange={onChange}
          required={required}
          name={name}
        />
      </label>
    </div>
  );
}

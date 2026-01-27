import React from 'react';
import { cn } from '@/lib/utils';

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  helperText?: string;
  options: SelectOption[];
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, options, id, ...props }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={selectId} className="label">
            {label}
            {props.required && <span className="ml-1 text-danger-main">*</span>}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={cn(
            'input-base cursor-pointer',
            error && 'border-danger-main focus:border-danger-main focus:ring-danger-main/20',
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && <p className="mt-1.5 text-sm text-danger-main">{error}</p>}
        {helperText && !error && <p className="mt-1.5 text-sm text-neutral-500">{helperText}</p>}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;

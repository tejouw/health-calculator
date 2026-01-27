import React from 'react';
import { cn } from '@/lib/utils';

export interface RadioOption {
  value: string;
  label: string;
  description?: string;
}

export interface RadioGroupProps {
  label?: string;
  name: string;
  options: RadioOption[];
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  orientation?: 'horizontal' | 'vertical';
  required?: boolean;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  error,
  orientation = 'vertical',
  required = false,
}) => {
  return (
    <div className="w-full">
      {label && (
        <label className="label">
          {label}
          {required && <span className="ml-1 text-danger-main">*</span>}
        </label>
      )}
      <div
        className={cn(
          'space-y-3',
          orientation === 'horizontal' && 'flex flex-wrap gap-4 space-y-0'
        )}
      >
        {options.map((option) => (
          <label
            key={option.value}
            className={cn(
              'flex cursor-pointer items-start gap-3 rounded-lg border-2 border-neutral-200 bg-white p-4 transition-all hover:border-primary-300 hover:bg-primary-50/50',
              value === option.value && 'border-primary-500 bg-primary-50',
              orientation === 'horizontal' && 'flex-1 min-w-[200px]'
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange?.(e.target.value)}
              className="mt-0.5 h-4 w-4 border-neutral-300 text-primary-600 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            />
            <div className="flex-1">
              <div className="text-sm font-medium text-neutral-900">{option.label}</div>
              {option.description && (
                <div className="mt-1 text-xs text-neutral-500">{option.description}</div>
              )}
            </div>
          </label>
        ))}
      </div>
      {error && <p className="mt-1.5 text-sm text-danger-main">{error}</p>}
    </div>
  );
};

export default RadioGroup;

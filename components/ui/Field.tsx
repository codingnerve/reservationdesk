import type {
  ComponentPropsWithoutRef,
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";

export const inputClasses =
  "w-full rounded-xl border border-line bg-surface-raised px-3.5 py-3 text-sm text-ink placeholder:text-ink-muted/70 transition-colors focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

export const controlClasses = inputClasses;

export function Label({
  htmlFor,
  children,
  required,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-1.5 block text-xs font-semibold uppercase tracking-wide text-ink-muted"
    >
      {children}
      {required && (
        <span aria-hidden="true" className="ml-0.5 text-danger">
          *
        </span>
      )}
    </label>
  );
}

export function Input(props: ComponentPropsWithoutRef<"input">) {
  const { className = "", ...rest } = props;
  return <input className={`${inputClasses} ${className}`} {...rest} />;
}

export function Textarea(props: ComponentPropsWithoutRef<"textarea">) {
  const { className = "", ...rest } = props;
  return (
    <textarea
      className={`${inputClasses} min-h-24 py-2.5 ${className}`}
      {...rest}
    />
  );
}

export function Select(props: ComponentPropsWithoutRef<"select">) {
  const { className = "", children, ...rest } = props;
  return (
    <select className={`${inputClasses} appearance-none ${className}`} {...rest}>
      {children}
    </select>
  );
}

export function FieldShell({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label
        htmlFor={name}
        className="text-xs font-semibold uppercase tracking-wide text-ink-soft"
      >
        {label}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} className="text-xs font-medium text-danger">
          {error}
        </p>
      )}
    </div>
  );
}

function errorProps(name: string, error?: string) {
  return error
    ? { "aria-invalid": true as const, "aria-describedby": `${name}-error` }
    : {};
}

type TextFieldProps = {
  label: string;
  name: string;
  error?: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "name" | "id" | "className">;

export function TextField({ label, name, error, ...rest }: TextFieldProps) {
  return (
    <FieldShell label={label} name={name} error={error}>
      <input id={name} name={name} className={inputClasses} {...errorProps(name, error)} {...rest} />
    </FieldShell>
  );
}

type SelectFieldProps = {
  label: string;
  name: string;
  error?: string;
  options: { value: string; label: string }[];
  placeholder?: string;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "name" | "id" | "className" | "children">;

export function SelectField({
  label,
  name,
  error,
  options,
  placeholder,
  ...rest
}: SelectFieldProps) {
  return (
    <FieldShell label={label} name={name} error={error}>
      <select id={name} name={name} className={inputClasses} {...errorProps(name, error)} {...rest}>
        {placeholder !== undefined && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

type TextAreaFieldProps = {
  label: string;
  name: string;
  error?: string;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name" | "id" | "className">;

export function TextAreaField({ label, name, error, ...rest }: TextAreaFieldProps) {
  return (
    <FieldShell label={label} name={name} error={error}>
      <textarea
        id={name}
        name={name}
        className={`${inputClasses} min-h-28 resize-y`}
        {...errorProps(name, error)}
        {...rest}
      />
    </FieldShell>
  );
}

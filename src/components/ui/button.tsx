import { clipPathValue } from "../clip-path-value";
import clsx from "clsx";

const styles = {
  primary: "bg-red-600 text-white",
  secondary: "bg-black text-white",
};

export type ButtonVariant = keyof typeof styles;

function mergeButtonClasses({
  variant = "primary",
  className,
}: {
  className?: string;
  variant?: ButtonVariant;
}) {
  return clsx(
    "border-xs flex items-center justify-center gap-2 py-2.5 pr-6.5 pl-6",
    styles[variant],
    className
  );
}

export function Button({
  variant = "primary",
  children,
  className = "",
  ...props
}: React.ComponentProps<"button"> & {
  variant?: ButtonVariant;
}) {
  return (
    <button
      {...props}
      className={mergeButtonClasses({ variant, className })}
      style={{
        clipPath: clipPathValue,
        ...props.style,
      }}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  children,
  className = "",
  ...props
}: React.ComponentProps<"a"> & {
  variant?: ButtonVariant;
}) {
  return (
    <a
      {...props}
      className={mergeButtonClasses({ variant, className })}
      style={{
        clipPath: clipPathValue,
        ...props.style,
      }}
    >
      {children}
    </a>
  );
}

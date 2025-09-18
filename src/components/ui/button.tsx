import { clipPathValue } from "../clip-path-value";
import clsx from "clsx";

const styles = {
  primary: "text-white bg-black p-2 border-xs",
  secondary: "text-white bg-red-600 p-2 border-xs",
  noborder: "text-red-600 bg-transparent text-sm ",
};

export type ButtonVariant = keyof typeof styles;

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
      className={clsx("flex items-center justify-center gap-2", styles[variant], className)}
      style={{
        clipPath: clipPathValue,
        ...props.style,
      }}
    >
      {children}
    </button>
  );
}

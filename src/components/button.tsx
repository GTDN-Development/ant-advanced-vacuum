const styles = {
  primary:
    "max-w-sm text-white bg-black p-2 border-xs [clip-path:polygon(0%_0%,_100%_0%,_100%_90%,_90%_100%,_0%_100%)]",
  secondary:
    "max-w-sm text-white bg-red-600 p-2 border-xs [clip-path:polygon(0%_0%,_100%_0%,_100%_90%,_90%_100%,_0%_100%)]",
  noborder: "max-w-sm text-red-600 bg-transparent text-sm ",
};

const iconStyle = {
  hasIcon: "flex items-center gap-2 justify-center",
  noIcon: "",
};

type IconVariant = keyof typeof iconStyle;

export type ButtonVariant = keyof typeof styles;

export function Button({
  variant,
  icon = "noIcon",
  children,
  className = "",
  ...props
}: React.ComponentProps<"button"> & {
  variant: ButtonVariant;
  icon?: IconVariant;
}) {
  return (
    <button
      {...props}
      className={`${styles[variant]} ${iconStyle[icon]} ${className}`}
    >
      {children}
    </button>
  );
}

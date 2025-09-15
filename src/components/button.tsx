const styles = {
  primary:
    "text-white bg-black p-4 border-xs [clip-path:polygon(0%_0%,_100%_0%,_100%_90%,_90%_100%,_0%_100%)]",
  secondary:
    "text-white bg-red-600 p-4 border-xs [clip-path:polygon(0%_0%,_100%_0%,_100%_90%,_90%_100%,_0%_100%)]",
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

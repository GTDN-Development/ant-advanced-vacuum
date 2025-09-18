import clsx from "clsx";

const styles = {
  variants: {
    size: {
      inherit: "",
    },
  },
};

type SizeProps = keyof typeof styles.variants.size;

type PropsWithOptionalAs<T extends React.ElementType> = React.ComponentProps<T> & {
  as?: T;
};

export function Heading<T extends React.ElementType = "h2">({
  as,
  size = "inherit",
  ...props
}: PropsWithOptionalAs<T> & {
  size?: SizeProps;
}) {
  const Element = as || "h2";
  return (
    <Element
      {...props}
      className={clsx(
        "font-sans font-bold",
        styles.variants.size[size as SizeProps],
        props.className
      )}
    />
  );
}

export function RedBadgeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M24 0H6.45598L0 6.18843V23H16.7112L24 16.0187V0Z" fill="#DA291C" />
    </svg>
  );
}

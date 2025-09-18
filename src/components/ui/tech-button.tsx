import { clipPathValue } from "../clip-path-value";
import clsx from "clsx";

export function TechButton({
  children,
  className = "",
  isSelected = false,
  ...props
}: React.ComponentProps<"button"> & {
  isSelected?: boolean;
}) {
  return (
    <button
      {...props}
      className={clsx(
        "cursor-pointer px-6 py-3 text-lg font-semibold",
        isSelected
          ? "bg-red-600 text-white hover:bg-red-700"
          : "bg-gray-100 text-gray-900 hover:bg-gray-200",
        className
      )}
      style={{
        clipPath: clipPathValue,
        ...props.style,
      }}
    >
      {children}
    </button>
  );
}

import clsx from "clsx";
import { CloseIcon } from "../icons/close-icon";

export function Badge(
  props: React.ComponentProps<"div"> & {
    onCloseButtonClick?: () => void;
    isSmall?: boolean;
    isGray?: boolean;
  }
) {
  return (
    <div
      {...props}
      className={clsx(
        "flex items-center gap-2",
        props.isSmall ? "p-1.5 text-sm" : "p-2 text-base",
        props.isGray ? "bg-gray-200 text-gray-950" : "bg-gray-950 text-white",
        props.className
      )}
    >
      {props.children}
      {props.onCloseButtonClick && (
        <button
          onClick={props.onCloseButtonClick}
          className="flex size-5 cursor-pointer items-center justify-center hover:bg-white/20"
        >
          <CloseIcon className="size-4" />
        </button>
      )}
    </div>
  );
}

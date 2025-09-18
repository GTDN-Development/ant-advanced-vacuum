import clsx from "clsx";
import { CloseIcon } from "../icons/close-icon";

export function Badge(
  props: React.ComponentProps<"div"> & { onCloseButtonClick?: () => void; isSmall?: boolean }
) {
  return (
    <div
      {...props}
      className={clsx(
        "flex items-center gap-2 bg-black text-white",
        props.isSmall ? "p-1.5 text-sm" : "p-2 text-base",
        props.className
      )}
    >
      {props.children}
      {props.onCloseButtonClick && (
        <button onClick={props.onCloseButtonClick}>
          <CloseIcon className="size-4" />
        </button>
      )}
    </div>
  );
}

import { CloseIcon } from "../icons/close-icon";

export function Badge(props: React.ComponentProps<"div"> & { onCloseButtonClick: () => void }) {
  return (
    <div className="flex items-center gap-2 bg-black p-2 text-white">
      {props.children}
      <button onClick={props.onCloseButtonClick}>
        <CloseIcon className="size-4" />
      </button>
    </div>
  );
}

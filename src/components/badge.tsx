import { CloseIcon } from "./icons/close-icon";

export function Badge(
  props: React.ComponentProps<"button"> & { title: string },
) {
  return (
    <div className=" bg-black p-2 text-white flex items-center gap-2">
      <button>
        {props.title}
        <CloseIcon className="size-4" />
      </button>
    </div>
  );
}

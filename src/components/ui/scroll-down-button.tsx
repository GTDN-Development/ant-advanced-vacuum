import { CaretDownIcon } from "../icons/caret-down-icon";
import { clipPathValueButton } from "../clip-path-value";

export function ScrollDownButton() {
  return (
    <button
      className="flex items-center bg-red-500 text-white"
      style={{ clipPath: clipPathValueButton }}
    >
      <CaretDownIcon className="size-12" />
    </button>
  );
}

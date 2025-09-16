import { ArrowRightIcon } from "./icons/arrow-right-icon";
import { clipPathValue } from "./clip-path-value";

export function Card(
  props: React.ComponentProps<"div"> & { src?: string; title: string },
) {
  return (
    <div
      {...props}
      className="bg-gray-100 w-full flex flex-col p-6"
      style={{ clipPath: clipPathValue, ...props.style }}
    >
      {props.src && (
        <div className="relative aspect-square overflow-clip">
          <img
            src={props.src}
            alt={props.title}
            className="absolute w-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      )}

      <h1 className="font-bold text-xl">{props.title}</h1>

      <div className="mt-auto">
        <button className="text-red-500 flex items-center justify-center gap-2">
          More info
          <ArrowRightIcon aria-hidden="true" className="text-red-500 size-4" />
        </button>
      </div>
    </div>
  );
}

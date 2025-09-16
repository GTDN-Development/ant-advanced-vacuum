import { ArrowRightIcon } from "./icons/arrow-right-icon";

export function Card(
  props: React.ComponentProps<"div"> & { src?: string; title: string },
) {
  return (
    <div
      {...props}
      className="[clip-path:polygon(0%_0%,_100%_0%,_100%_90%,_90%_100%,_0%_100%)]
                 bg-[#00000012] w-full flex flex-col p-6"
    >
      {props.src && (
        <div className="relative aspect-square overflow-clip">
          <img
            src={props.src}
            className="absolute w-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      )}

      <h1 className="font-bold text-xl">{props.title}</h1>

      <div className="mt-auto">
        <button className="text-red-500 flex items-center gap-2">
          More info
          <ArrowRightIcon aria-hidden="true" className="text-red-500 size-4" />
        </button>
      </div>
    </div>
  );
}

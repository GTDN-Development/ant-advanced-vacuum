import { ArrowRightIcon } from "../icons/arrow-right-icon";
import { clipPathValue } from "../clip-path-value";
import clsx from "clsx";

export function Card(props: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className="flex w-full flex-col gap-4 bg-gray-100 p-6"
      style={{ clipPath: clipPathValue, ...props.style }}
    />
  );
}

export function CardImage(props: { className?: string; src: string; alt: string }) {
  return (
    <div className={clsx("relative aspect-square overflow-clip", props.className)}>
      <img
        src={props.src}
        alt={props.alt}
        className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 object-cover"
      />
    </div>
  );
}

export function CardButton(
  props: React.ComponentProps<"button"> & { children: React.ReactNode; className?: string }
) {
  return (
    <div className={clsx("mt-auto", props.className)}>
      <button {...props} className="flex items-center justify-center gap-2 text-red-500">
        {props.children}
        <ArrowRightIcon aria-hidden="true" className="size-4 text-red-500" />
      </button>
    </div>
  );
}

import { Button } from "./button";
import { ArrowRightIcon } from "./icons/arrow-right-icon";

export function Card(
  props: React.ComponentProps<"div"> & { src?: string; title: string },
) {
  return (
    <div
      {...props}
      className="[clip-path:polygon(0%_0%,_100%_0%,_100%_90%,_90%_100%,_0%_100%)]
                 bg-[#00000012] w-full min-w-[316px] h-[464px] flex flex-col"
    >
      {props.src && (
        <div className="p-6">
          <img src={props.src} className="w-full h-[264px] object-cover" />
        </div>
      )}

      <h1 className="font-bold text-xl px-6 mb-4">{props.title}</h1>

      <div className="mt-auto px-6 pb-6 ">
        <Button variant="noborder" icon="hasIcon">
          <ArrowRightIcon aria-hidden="true" className="text-red-500 size-4" />
          button
        </Button>
      </div>
    </div>
  );
}

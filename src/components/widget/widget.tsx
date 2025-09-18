import clsx from "clsx";
import {
  TopLeft,
  TopRight,
  RightTop,
  RightBottom,
  BottomRight,
  BottomLeft,
  LeftBottom,
  LeftTop,
  Center,
} from "./svg-parts";

export function Widget(props: React.ComponentProps<"div">) {
  return (
    <div {...props} className={clsx(props.className, "relative aspect-square size-[648px]")}>
      <div className="group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <TileLabel className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          Vacuum <br /> Chamber
        </TileLabel>
        <Center />
      </div>

      <div className="group absolute top-0 left-0 translate-x-2.5">
        <TileImage
          src="/widget-png/default/desorption.png"
          srcOnHover="/widget-png/hover/desorption.png"
          title="Desorption"
          className="absolute top-18 right-5 w-18"
        />
        <TileLabel className="absolute top-5 right-5">Desorption</TileLabel>
        <TopLeft />
      </div>
      <div className="group absolute top-0 right-0 -translate-x-2.5">
        <TileImage
          src="/widget-png/default/adsorption.png"
          srcOnHover="/widget-png/hover/adsorption.png"
          title="Desorption"
          className="absolute top-18 left-5 w-18"
        />
        <TileLabel className="absolute top-5 left-5">Adsorption</TileLabel>
        <TopRight />
      </div>
      <div className="group absolute top-0 right-0 translate-y-2.5">
        <TileImage
          src="/widget-png/default/vaporisation.png"
          srcOnHover="/widget-png/hover/vaporisation.png"
          title="Desorption"
          className="absolute right-5 bottom-12.5 w-33.5"
        />
        <TileLabel className="absolute right-5 bottom-5">Vaporisation</TileLabel>
        <RightTop />
      </div>
      <div className="group absolute right-0 bottom-0 -translate-y-2.5">
        <TileImage
          src="/widget-png/default/virtual-leaks.png"
          srcOnHover="/widget-png/hover/virtual-leaks.png"
          title="Desorption"
          className="absolute top-16 right-5 w-23"
        />
        <TileLabel className="absolute top-5 right-5">Virtual leaks</TileLabel>
        <RightBottom />
      </div>
      <div className="group absolute right-0 bottom-0 -translate-x-2.5">
        <TileImage
          src="/widget-png/default/real-leaks.png"
          srcOnHover="/widget-png/hover/real-leaks.png"
          title="Desorption"
          className="absolute top-5.5 left-8 w-10"
        />
        <TileLabel className="absolute bottom-5 left-5">Real leaks</TileLabel>
        <BottomRight />
      </div>
      <div className="group absolute bottom-0 left-0 translate-x-2.5">
        <TileImage
          src="/widget-png/default/backflow-vacuum-pump.png"
          srcOnHover="/widget-png/hover/backflow-vacuum-pump.png"
          title="Desorption"
          className="absolute top-10 right-8 w-13"
        />
        <TileLabel className="absolute right-5 bottom-5">Backflow vacuum pump</TileLabel>
        <BottomLeft />
      </div>
      <div className="group absolute bottom-0 left-0 -translate-y-2.5">
        <TileImage
          src="/widget-png/default/permeation.png"
          srcOnHover="/widget-png/hover/permeation.png"
          title="Desorption"
          className="absolute top-14 left-5 w-38"
        />
        <TileLabel className="absolute top-5 left-5">Permeation</TileLabel>
        <LeftBottom />
      </div>
      <div className="group absolute top-0 left-0 translate-y-2.5">
        <TileImage
          src="/widget-png/default/diffusion.png"
          srcOnHover="/widget-png/hover/diffusion.png"
          title="Desorption"
          className="absolute bottom-12 left-5 w-33"
        />
        <TileLabel className="absolute bottom-5 left-5">Diffusion</TileLabel>
        <LeftTop />
      </div>
    </div>
  );
}

function TileLabel(props: React.ComponentProps<"span">) {
  return (
    <span
      {...props}
      className={clsx(
        "pointer-events-none text-lg font-bold group-hover:text-white",
        props.className
      )}
    >
      {props.children}
    </span>
  );
}

function TileImage(
  props: React.ComponentProps<"div"> & {
    src: string;
    srcOnHover: string;
    title: string;
  }
) {
  return (
    <div {...props} className={clsx(props.className, "pointer-events-none")}>
      <img src={props.src} alt={props.title} className="w-full object-contain group-hover:hidden" />
      <img
        src={props.srcOnHover}
        alt={props.title}
        className="hidden w-full object-contain group-hover:block"
      />
    </div>
  );
}

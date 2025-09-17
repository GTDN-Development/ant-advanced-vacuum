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
    <div
      {...props}
      className={clsx(props.className, "relative w-[648px] h-[648px]")}
    >
      <TopLeft className="absolute top-0 left-0 translate-x-2.5">
        <text>Desorption</text>
      </TopLeft>
      <TopRight className="absolute top-0 right-0 -translate-x-2.5">
        <text>Adsorption</text>
      </TopRight>
      <RightTop className="absolute top-0 right-0 translate-y-2.5">
        <text>Vaporisation</text>
      </RightTop>
      <RightBottom className="absolute bottom-0 right-0 -translate-y-2.5">
        <text>Virtual leaks</text>
      </RightBottom>
      <BottomRight className="absolute bottom-0 right-0 -translate-x-2.5">
        <text>Real leaks</text>
      </BottomRight>
      <BottomLeft className="absolute bottom-0 left-0 translate-x-2.5">
        <text>Backflow vacuum pump</text>
      </BottomLeft>
      <LeftBottom className="absolute left-0 bottom-0 -translate-y-2.5">
        <text>Permeation</text>
      </LeftBottom>
      <LeftTop className="absolute left-0 top-0 translate-y-2.5">
        <text>Diffusion</text>
      </LeftTop>

      <Center className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <title>Vacuum Chamber</title>
      </Center>
    </div>
  );
}

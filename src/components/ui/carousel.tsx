"use client";

import clsx from "clsx";
import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import {
  DotButton,
  NextButton,
  PrevButton,
  useDotButton,
  usePrevNextButtons,
} from "./carousel-parts";

export type CarouselSlide = {
  className?: string;
  children?: React.ReactNode;
};

export function Carousel({
  slides,
  options,
}: React.ComponentProps<"div"> & {
  slides: CarouselSlide[];
  options?: EmblaOptionsType;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <div className="max-w-dvw [--slide-height:_auto] [--slide-size:_100%] [--slide-spacing:_1.5rem] sm:[--slide-size:_50%]">
      <div className="overflow-x-clip" ref={emblaRef}>
        <div className="ml-[calc(var(--slide-spacing)_*_-1)] flex touch-pan-y touch-pinch-zoom flex-row">
          {/* <div className="h-24 min-w-0 shrink-0 grow-0 basis-[var(--slide-size)] rounded-2xl bg-red-500 pl-[var(--slide-spacing)]" /> */}

          {slides.map((item, index) => (
            <CarouselSlide key={index} className={item.className}>
              {item.children}
            </CarouselSlide>
          ))}
        </div>
      </div>

      <div className={clsx("flex flex-row flex-wrap items-center justify-between gap-4 pt-10")}>
        <div className="hidden w-full flex-1 sm:block"></div>

        <div className="flex w-full flex-1 justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              selected={index === selectedIndex}
            />
          ))}
        </div>

        <div className="flex w-full flex-1 justify-end gap-4">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  );
}

function CarouselSlide({ children, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={clsx(
        // Embla carousel
        "relative min-w-0 shrink-0 basis-[var(--slide-size)] transform-gpu pl-[var(--slide-spacing)]"
      )}
    >
      <div className={clsx("h-full", props.className)}>{children}</div>
    </div>
  );
}

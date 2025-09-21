"use client";

import clsx from "clsx";
import type { EmblaCarouselType } from "embla-carousel";
import { ArrowLeftIcon } from "../icons/arrow-left-icon";
import { ArrowRightIcon } from "../icons/arrow-right-icon";
import { useCallback, useEffect, useState } from "react";

type ButtonProps = Omit<React.ComponentProps<"button">, "children">;

function resolveButtonClassName(className?: string) {
  return clsx(
    "flex size-10 items-center justify-center bg-transparent transition duration-300 ease-out",
    "cursor-pointer text-gray-900 hover:bg-gray-100 hover:shadow-transparent",
    "disabled:cursor-not-allowed disabled:text-gray-300 disabled:hover:bg-transparent disabled:hover:text-gray-300",
    className
  );
}

export function PrevButton(props: ButtonProps) {
  return (
    <button {...props} className={resolveButtonClassName(props.className)} type="button">
      <span className="sr-only">Posunout zpět</span>
      <ArrowLeftIcon className="size-6" aria-hidden="true" />
    </button>
  );
}

export function NextButton(props: ButtonProps) {
  return (
    <button {...props} className={resolveButtonClassName(props.className)} type="button">
      <span className="sr-only">Posunout dopředu</span>
      <ArrowRightIcon className="size-6" aria-hidden="true" />
    </button>
  );
}

export function DotButton({
  selected,
  ...props
}: ButtonProps & {
  selected?: boolean;
}) {
  return (
    <button
      {...props}
      className={clsx(
        "h-1.5 w-3 cursor-pointer rounded-full transition-all duration-300 ease-out",
        selected ? "w-8 bg-red-500 hover:bg-red-400" : "bg-gray-200 hover:bg-gray-300",
        props.className
      )}
      type="button"
      aria-pressed={selected}
    />
  );
}

export function usePrevNextButtons(emblaApi: EmblaCarouselType | undefined) {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
}

export function useDotButton(emblaApi: EmblaCarouselType | undefined) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on("reInit", onInit).on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  };
}

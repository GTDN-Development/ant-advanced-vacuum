import clsx from "clsx";
import React from "react";

type SvgProps = React.SVGProps<SVGSVGElement>;

const commonButtonLikeProps: React.SVGProps<SVGSVGElement> = {
  role: "button",
  tabIndex: 0,
};

const commonClassName = "widget-shape cursor-pointer";

export function BottomLeft(props: SvgProps) {
  return (
    <svg
      width="305"
      height="200"
      viewBox="0 0 305 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...commonButtonLikeProps}
      {...props}
      className={clsx(commonClassName, props.className)}
    >
      {props.children}
      <path d="M305 0H200.31L0.310059 200H305V0Z" fill="var(--shape-color)" />
    </svg>
  );
}

export function BottomRight(props: SvgProps) {
  return (
    <svg
      width="305"
      height="200"
      viewBox="0 0 305 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...commonButtonLikeProps}
      {...props}
      className={clsx(commonClassName, props.className)}
    >
      {props.children}
      <path d="M104.69 0H0V200H304.69L104.69 0Z" fill="var(--shape-color)" />
    </svg>
  );
}

export function Center(props: SvgProps) {
  return (
    <svg
      width="214"
      height="214"
      viewBox="0 0 214 214"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...commonButtonLikeProps}
      {...props}
      className={clsx(commonClassName, props.className)}
    >
      <rect width="214" height="214" fill="var(--shape-color)" />
    </svg>
  );
}

export function LeftBottom(props: SvgProps) {
  return (
    <svg
      width="200"
      height="305"
      viewBox="0 0 200 305"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...commonButtonLikeProps}
      {...props}
      className={clsx(commonClassName, props.className)}
    >
      {props.children}
      <path d="M200 104.69V0H0V304.69L200 104.69Z" fill="var(--shape-color)" />
    </svg>
  );
}

export function LeftTop(props: SvgProps) {
  return (
    <svg
      width="200"
      height="305"
      viewBox="0 0 200 305"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...commonButtonLikeProps}
      {...props}
      className={clsx(commonClassName, props.className)}
    >
      {props.children}
      <path d="M200 305V200.31L0 0.310059V305H200Z" fill="var(--shape-color)" />
    </svg>
  );
}

export function RightBottom(props: SvgProps) {
  return (
    <svg
      width="200"
      height="305"
      viewBox="0 0 200 305"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...commonButtonLikeProps}
      {...props}
      className={clsx(commonClassName, props.className)}
    >
      {props.children}
      <path d="M0 0V104.69L200 304.69V0H0Z" fill="var(--shape-color)" />
    </svg>
  );
}

export function RightTop(props: SvgProps) {
  return (
    <svg
      width="200"
      height="305"
      viewBox="0 0 200 305"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...commonButtonLikeProps}
      {...props}
      className={clsx(commonClassName, props.className)}
    >
      {props.children}
      <path d="M0 200.31V305H200V0.310059L0 200.31Z" fill="var(--shape-color)" />
    </svg>
  );
}

export function TopLeft(props: SvgProps) {
  return (
    <svg
      width="305"
      height="200"
      viewBox="0 0 305 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...commonButtonLikeProps}
      {...props}
      className={clsx(commonClassName, props.className)}
    >
      {props.children}
      <path d="M200.31 200H305V0H0.310059L200.31 200Z" fill="var(--shape-color)" />
    </svg>
  );
}

export function TopRight(props: SvgProps) {
  return (
    <svg
      width="305"
      height="200"
      viewBox="0 0 305 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...commonButtonLikeProps}
      {...props}
      className={clsx(commonClassName, props.className)}
    >
      {props.children}
      <path d="M0 0V200H104.69L304.69 0H0Z" fill="var(--shape-color)" />
    </svg>
  );
}

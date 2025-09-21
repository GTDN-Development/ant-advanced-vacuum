import clsx from "clsx";
import React from "react";

type SvgProps = React.SVGProps<SVGSVGElement> & {
  onPathClick?: React.MouseEventHandler<SVGPathElement>;
  onPathKeyDown?: React.KeyboardEventHandler<SVGPathElement>;
  onPathMouseEnter?: React.MouseEventHandler<SVGPathElement>;
  onPathMouseLeave?: React.MouseEventHandler<SVGPathElement>;
};

const commonPathProps: React.SVGProps<SVGPathElement> = {
  role: "button",
  tabIndex: 0,
};

const commonSvgClassName = "pointer-events-none";
const commonPathClassName = "widget-shape cursor-pointer focus:outline-none";

export function BottomLeft(props: SvgProps) {
  const { onPathClick, onPathKeyDown, onPathMouseEnter, onPathMouseLeave, ...svgProps } = props;

  return (
    <svg
      width="305"
      height="200"
      viewBox="0 0 305 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
      className={clsx(commonSvgClassName, svgProps.className)}
      style={{ pointerEvents: "none" }}
    >
      {props.children}
      <path
        d="M305 0H200.31L0.310059 200H305V0Z"
        fill="var(--shape-color)"
        onClick={onPathClick}
        onKeyDown={onPathKeyDown}
        onMouseEnter={onPathMouseEnter}
        onMouseLeave={onPathMouseLeave}
        className={commonPathClassName}
        style={{ pointerEvents: "visiblePainted" }}
        {...commonPathProps}
      />
    </svg>
  );
}

export function BottomRight(props: SvgProps) {
  const { onPathClick, onPathKeyDown, onPathMouseEnter, onPathMouseLeave, ...svgProps } = props;

  return (
    <svg
      width="305"
      height="200"
      viewBox="0 0 305 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
      className={clsx(commonSvgClassName, svgProps.className)}
      style={{ pointerEvents: "none" }}
    >
      {props.children}
      <path
        d="M104.69 0H0V200H304.69L104.69 0Z"
        fill="var(--shape-color)"
        onClick={onPathClick}
        onKeyDown={onPathKeyDown}
        onMouseEnter={onPathMouseEnter}
        onMouseLeave={onPathMouseLeave}
        className={commonPathClassName}
        style={{ pointerEvents: "visiblePainted" }}
        {...commonPathProps}
      />
    </svg>
  );
}

export function Center(props: SvgProps) {
  const { onPathClick, onPathKeyDown, onPathMouseEnter, onPathMouseLeave, ...svgProps } = props;

  return (
    <svg
      width="214"
      height="214"
      viewBox="0 0 214 214"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
      className={clsx(commonSvgClassName, svgProps.className)}
      style={{ pointerEvents: "none" }}
    >
      <rect
        width="214"
        height="214"
        fill="var(--shape-color)"
        onClick={onPathClick as React.MouseEventHandler<SVGRectElement>}
        onKeyDown={onPathKeyDown as React.KeyboardEventHandler<SVGRectElement>}
        onMouseEnter={onPathMouseEnter as React.MouseEventHandler<SVGRectElement>}
        onMouseLeave={onPathMouseLeave as React.MouseEventHandler<SVGRectElement>}
        className={commonPathClassName}
        style={{ pointerEvents: "visiblePainted" }}
        role="button"
        tabIndex={0}
      />
    </svg>
  );
}

export function LeftBottom(props: SvgProps) {
  const { onPathClick, onPathKeyDown, onPathMouseEnter, onPathMouseLeave, ...svgProps } = props;

  return (
    <svg
      width="200"
      height="305"
      viewBox="0 0 200 305"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
      className={clsx(commonSvgClassName, svgProps.className)}
      style={{ pointerEvents: "none" }}
    >
      {props.children}
      <path
        d="M200 104.69V0H0V304.69L200 104.69Z"
        fill="var(--shape-color)"
        onClick={onPathClick}
        onKeyDown={onPathKeyDown}
        onMouseEnter={onPathMouseEnter}
        onMouseLeave={onPathMouseLeave}
        className={commonPathClassName}
        style={{ pointerEvents: "visiblePainted" }}
        {...commonPathProps}
      />
    </svg>
  );
}

export function LeftTop(props: SvgProps) {
  const { onPathClick, onPathKeyDown, onPathMouseEnter, onPathMouseLeave, ...svgProps } = props;

  return (
    <svg
      width="200"
      height="305"
      viewBox="0 0 200 305"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
      className={clsx(commonSvgClassName, svgProps.className)}
      style={{ pointerEvents: "none" }}
    >
      {props.children}
      <path
        d="M200 305V200.31L0 0.310059V305H200Z"
        fill="var(--shape-color)"
        onClick={onPathClick}
        onKeyDown={onPathKeyDown}
        onMouseEnter={onPathMouseEnter}
        onMouseLeave={onPathMouseLeave}
        className={commonPathClassName}
        style={{ pointerEvents: "visiblePainted" }}
        {...commonPathProps}
      />
    </svg>
  );
}

export function RightBottom(props: SvgProps) {
  const { onPathClick, onPathKeyDown, onPathMouseEnter, onPathMouseLeave, ...svgProps } = props;

  return (
    <svg
      width="200"
      height="305"
      viewBox="0 0 200 305"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
      className={clsx(commonSvgClassName, svgProps.className)}
      style={{ pointerEvents: "none" }}
    >
      {props.children}
      <path
        d="M0 0V104.69L200 304.69V0H0Z"
        fill="var(--shape-color)"
        onClick={onPathClick}
        onKeyDown={onPathKeyDown}
        onMouseEnter={onPathMouseEnter}
        onMouseLeave={onPathMouseLeave}
        className={commonPathClassName}
        style={{ pointerEvents: "visiblePainted" }}
        {...commonPathProps}
      />
    </svg>
  );
}

export function RightTop(props: SvgProps) {
  const { onPathClick, onPathKeyDown, onPathMouseEnter, onPathMouseLeave, ...svgProps } = props;

  return (
    <svg
      width="200"
      height="305"
      viewBox="0 0 200 305"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
      className={clsx(commonSvgClassName, svgProps.className)}
      style={{ pointerEvents: "none" }}
    >
      {props.children}
      <path
        d="M0 200.31V305H200V0.310059L0 200.31Z"
        fill="var(--shape-color)"
        onClick={onPathClick}
        onKeyDown={onPathKeyDown}
        onMouseEnter={onPathMouseEnter}
        onMouseLeave={onPathMouseLeave}
        className={commonPathClassName}
        style={{ pointerEvents: "visiblePainted" }}
        {...commonPathProps}
      />
    </svg>
  );
}

export function TopLeft(props: SvgProps) {
  const { onPathClick, onPathKeyDown, onPathMouseEnter, onPathMouseLeave, ...svgProps } = props;

  return (
    <svg
      width="305"
      height="200"
      viewBox="0 0 305 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
      className={clsx(commonSvgClassName, svgProps.className)}
      style={{ pointerEvents: "none" }}
    >
      {props.children}
      <path
        d="M200.31 200H305V0H0.310059L200.31 200Z"
        fill="var(--shape-color)"
        onClick={onPathClick}
        onKeyDown={onPathKeyDown}
        onMouseEnter={onPathMouseEnter}
        onMouseLeave={onPathMouseLeave}
        className={commonPathClassName}
        style={{ pointerEvents: "visiblePainted" }}
        {...commonPathProps}
      />
    </svg>
  );
}

export function TopRight(props: SvgProps) {
  const { onPathClick, onPathKeyDown, onPathMouseEnter, onPathMouseLeave, ...svgProps } = props;

  return (
    <svg
      width="305"
      height="200"
      viewBox="0 0 305 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...svgProps}
      className={clsx(commonSvgClassName, svgProps.className)}
      style={{ pointerEvents: "none" }}
    >
      {props.children}
      <path
        d="M0 0V200H104.69L304.69 0H0Z"
        fill="var(--shape-color)"
        onClick={onPathClick}
        onKeyDown={onPathKeyDown}
        onMouseEnter={onPathMouseEnter}
        onMouseLeave={onPathMouseLeave}
        className={commonPathClassName}
        style={{ pointerEvents: "visiblePainted" }}
        {...commonPathProps}
      />
    </svg>
  );
}

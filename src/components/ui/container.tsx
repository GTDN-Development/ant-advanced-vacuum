import React from "react";
import clsx from "clsx";

export function Container(props: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={clsx(props.className, "mx-auto w-[min(81.875rem,100%-theme(spacing.12))]")}
    >
      {props.children}
    </div>
  );
}

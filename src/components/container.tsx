import React from "react";

export function Container(props: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={`${props.className} mx-auto w-full max-w-[1310px]`}
    >
      {props.children}
    </div>
  );
}

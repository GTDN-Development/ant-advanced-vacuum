import React from "react";

export function Container(props: React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={`${props.className} mx-auto w-full max-w-[1310px]  sm:px-6 lg:px-8`}
    >
      {props.children}
    </div>
  );
}

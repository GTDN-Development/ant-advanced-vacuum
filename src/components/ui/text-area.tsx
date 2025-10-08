import * as React from "react";

function Textarea({ className = "", ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={
        "placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/0 aria-invalid:ring-destructive/0 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-30 w-full border bg-transparent px-2 py-1 text-base outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm " +
        className
      }
      {...props}
    />
  );
}

export { Textarea };

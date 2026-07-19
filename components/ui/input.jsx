import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-[48px] rounded-md border border-steel/30 focus:border-accent font-light bg-primary px-4 py-5 text-base placeholder:text-steel outline-none transition-colors",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }

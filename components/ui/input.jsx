import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<input
      type={type}
      className={cn(
        "flex h-[48px] border border-white/20 focus:border-white/50 font-light bg-black px-4 py-5 text-base placeholder:text-white/40 text-white outline-none transition-colors",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Input.displayName = "Input"

export { Input }

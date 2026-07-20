import * as React from "react"

import { cn } from "@/lib/utils"

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "flex min-h-[80px] w-full border border-white/20 bg-black px-4 py-5 text-base placeholder:text-white/40 text-white focus-visible:outline-none focus-visible:border-white/50 disabled:cursor-not-allowed disabled:opacity-50 transition-colors font-light",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea }

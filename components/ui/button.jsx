import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-base font-light ring-offset-white transition-colors uppercase tracking-wider",
  {
    variants: {
      variant: {
        default: "bg-white text-black hover:bg-white/90 border-none",
        primary: 'bg-black text-white border border-white/30 hover:border-white/60',
        outline: 'border border-white/30 bg-transparent text-white hover:bg-white/10'
      },
      size: {
        default: "h-[44px] px-6",
        sm: "h-[48px] px-6",
        md: "h-[52px] px-8",
        lg: "h-[56px] px-10"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    (<Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button, buttonVariants }

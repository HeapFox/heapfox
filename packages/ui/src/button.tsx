import type * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "./lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transform-gpu active:scale-95 hover:translate-y-[-2px] active:translate-y-0 border-2 border-transparent cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-red-600 text-white shadow-[0_4px_0_0_#dc2626] hover:shadow-[0_6px_0_0_#dc2626] active:shadow-[0_2px_0_0_#dc2626] hover:bg-red-500 border-red-700",
        destructive:
          "bg-red-700 text-white shadow-[0_4px_0_0_#991b1b] hover:shadow-[0_6px_0_0_#991b1b] active:shadow-[0_2px_0_0_#991b1b] hover:bg-red-600 border-red-800 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border-zinc-800 bg-white text-zinc-900 shadow-[0_4px_0_0_#374151] hover:shadow-[0_6px_0_0_#374151] active:shadow-[0_2px_0_0_#374151] hover:bg-zinc-50 dark:bg-zinc-900 dark:text-white dark:border-zinc-600 dark:hover:bg-zinc-800",
        secondary:
          "bg-amber-500 text-black shadow-[0_4px_0_0_#d97706] hover:shadow-[0_6px_0_0_#d97706] active:shadow-[0_2px_0_0_#d97706] hover:bg-amber-400 border-amber-600 font-semibold",
        ghost:
          "hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white shadow-[0_2px_0_0_transparent] hover:shadow-[0_4px_0_0_#e5e7eb] active:shadow-[0_1px_0_0_#e5e7eb]",
        link: "text-red-600 underline-offset-4 hover:underline hover:text-red-500 shadow-none hover:shadow-none active:shadow-none hover:translate-y-0 active:translate-y-0",
      },
      size: {
        default: "h-11 px-6 py-3 has-[>svg]:px-4 text-base font-semibold",
        sm: "h-9 gap-1.5 px-4 has-[>svg]:px-3 text-sm font-medium",
        lg: "h-13 px-8 has-[>svg]:px-6 text-lg font-bold",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
}

export { Button, buttonVariants }

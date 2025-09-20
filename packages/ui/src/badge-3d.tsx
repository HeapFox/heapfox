import type React from "react"
import { cn } from "./lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

const badge3DVariants = cva(
  "inline-flex items-center px-3 py-1 text-xs font-bold uppercase tracking-wide border-2 transition-all duration-200 ease-out hover:shadow-brutal-sm hover:-translate-y-0.5 active:shadow-none active:translate-y-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-primary",
        secondary: "bg-secondary text-secondary-foreground border-secondary",
        destructive: "bg-destructive text-destructive-foreground border-destructive",
        success: "bg-green-600 text-white border-green-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface Badge3DProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badge3DVariants> {}

export function Badge3D({ className, variant, ...props }: Badge3DProps) {
  return <div className={cn(badge3DVariants({ variant }), className)} {...props} />
}

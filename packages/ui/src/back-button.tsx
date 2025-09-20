"use client"

import { Button } from "./button"
import type { VariantProps } from "class-variance-authority"
import { buttonVariants } from "./button"

interface BackButtonProps extends VariantProps<typeof buttonVariants> {
  children: React.ReactNode
  className?: string
}

export function BackButton({ children, className, size = "lg", variant = "outline", ...props }: BackButtonProps) {
  const handleBack = () => {
    window.history.back()
  }

  return (
    <Button
      onClick={handleBack}
      size={size}
      variant={variant}
      className={className}
      {...props}
    >
      {children}
    </Button>
  )
}

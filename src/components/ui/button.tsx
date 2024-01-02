import { cn } from "@/lib/utils"

interface ButtonProps {
  text: string
  className?: string
  onClick?: () => void
}

function Button({ text, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn("hover:bg-primary-dark rounded-md bg-primary px-4 py-2 font-medium text-white transition", className)}
    >
      {text}
    </button>
  )
}

export { Button }

import { cn } from '@/lib/utils'

interface BadgeProps {
  count: number
}

function Badge({ count }: BadgeProps) {
  if (count < 1) return null
  const text = count < 100 ? count : '99+'

  return (
    <span
      className={cn(
        'absolute -left-1 -top-0.5 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-neutral-800 text-xs text-neutral-200',
        count > 10 && '-left-2 w-[24px]',
        count >= 100 && '-left-3 w-[30px]'
      )}
    >
      {text}
    </span>
  )
}

export { Badge }

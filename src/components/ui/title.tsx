import { cn } from '@/lib/utils'

type TitleProps = {
  title: string
  className?: string
}

const Title = ({ title, className }: TitleProps) => {
  return (
    <h2
      className={cn(
        'border-b-[1px] border-b-zinc-400 pb-5 text-3xl font-semibold',
        className
      )}
    >
      {title}
    </h2>
  )
}

export { Title }

import { cn } from '@/lib/utils'

interface ContainerProps {
  className?: string
  children: React.ReactNode
}

function Container({ className, children }: ContainerProps) {
  return <div className={cn('mx-auto py-10 max-w-screen-xl px-4 xl:px-0', className)}>{children}</div>
}

export { Container }

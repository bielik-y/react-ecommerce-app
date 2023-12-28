import { cn } from '@/lib/utils'

interface NavItemProps {
  isActive: boolean
  title: string
}

function NavItem({ isActive, title }: NavItemProps) {
  return (
    <li
      className={cn(
        'group relative cursor-pointer list-none overflow-hidden text-xs transition hover:text-black lg:text-sm',
        isActive && 'text-primary hover:text-primary'
      )}
    >
      {title}
      <span
        className={cn(
          'absolute bottom-0 left-0 h-0.5 w-full -translate-x-[101%] bg-blue-300 duration-300 group-hover:translate-x-0',
          isActive && 'translate-x-0 bg-primary'
        )}
      />
    </li>
  )
}

export { NavItem }

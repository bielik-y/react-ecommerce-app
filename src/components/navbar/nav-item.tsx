import { cn } from '@/lib/utils'

interface NavItemProps {
  isActive: boolean
  title: string
}

function NavItem({ isActive, title }: NavItemProps) {
  return (
    <li
      className={cn(
        'text-xs lg:text-sm group relative cursor-pointer list-none overflow-hidden transition hover:text-black',
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

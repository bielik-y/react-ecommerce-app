import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface LinkItemProps {
  icon: LucideIcon
  href: string
  title: string
}

function LinkItem({ icon, href, title }: LinkItemProps) {
  const Icon = icon
  return (
    <Link
      href={href}
      className="w-[125px] md:w-fit flex cursor-pointer gap-2 transition hover:text-black"
    >
      <Icon />
      <p>{title}</p>
    </Link>
  )
}

export { LinkItem }

import { LucideIcon } from 'lucide-react'

interface BannerSectionProps {
  icon: LucideIcon
  title: string
  subtitle: string
}

function BannerSection({ icon, title, subtitle }: BannerSectionProps) {
  const Icon = icon
  return (
    <div className="flex w-80 py-6 px-10 gap-5 items-center">
      <Icon className="h-8 w-8 text-primary" />
      <div>
        <p>{title}</p>
        <p className="font-semibold">{subtitle}</p>
      </div>
    </div>
  )
}

export { BannerSection }

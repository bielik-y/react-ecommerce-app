import Image, { StaticImageData } from 'next/image'
import { Button } from '@/components/ui/button'

interface BannerItemProps {
  src: StaticImageData
  alt: string
  title: string
  subtitle: string
  description: string
  buttonText?: string
  hasPriority?: boolean
  onClick?: () => void
}

function BannerItem({
  src,
  alt,
  title,
  subtitle,
  onClick,
  buttonText,
  description,
  hasPriority = false
}: BannerItemProps) {
  return (
    <div className="relative h-full w-full bg-slate-200">
      <div className="absolute hidden h-full w-full bg-primary md:block md:w-1/3"></div>
      <Image
        src={src}
        alt={alt}
        className="absolute bottom-0 right-2 h-[90%] w-auto md:left-[calc(33%_-_16%)]"
        priority={hasPriority}
        loading={!hasPriority ? 'lazy' : undefined}
      />
      <div className="absolute top-1/2 z-40 flex -translate-y-1/2 flex-col items-center gap-5 rounded-sm bg-white/60 p-8 text-center backdrop-blur-sm md:left-2/3 md:-translate-x-1/3 md:bg-slate-200/30">
        <h1 className="text-xl font-semibold uppercase">{title}</h1>
        <p className="max-w-96 text-neutral-600">{description}</p>
        <p className="text-xl font-semibold">{subtitle}</p>
        {buttonText && <Button text={buttonText} onClick={() => {}} />}
      </div>
    </div>
  )
}

export { BannerItem }

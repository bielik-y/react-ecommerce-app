import { LinkItem } from '@/components/layout/products-header/link-item'
import { PcCase, ScanFace, Smartphone, Watch } from 'lucide-react'

function ProductsHeader() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-3xl font-semibold">Choose a category</h2>
      <p className="text-center text-lg">
        Explore dozens of customized layouts made by our brilliant designers.
      </p>
      <div className="mt-5 flex flex-col md:flex-row items-center gap-6 text-neutral-500 md:gap-2">
        <div className='flex gap-2'>
        <LinkItem href="/phones" title="Phones" icon={Smartphone} />
        <div className="hidden md:inline-flex h-7 w-[1px] bg-primary" />
        <LinkItem href="/phonecases" title="Phonecases" icon={PcCase} />
        <div className="hidden md:inline-flex h-7 w-[1px] bg-primary" />
        </div>
        <div className='flex gap-2'>
        <LinkItem href="/watches" title="Watches" icon={Watch} />
        <div className="hidden md:inline-flex h-7 w-[1px] bg-primary" />
        <LinkItem href="/accessories" title="Accessories" icon={ScanFace} />
        </div>
      </div>
    </div>
  )
}

export { ProductsHeader }

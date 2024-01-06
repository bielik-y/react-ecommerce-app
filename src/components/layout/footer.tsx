import Image from 'next/image'
import { Container } from './container'
import Link from 'next/link'

const navigation = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'Phones',
    href: '/phones'
  },
  {
    title: 'Phone Cases',
    href: '/phonecases'
  },
  {
    title: 'Watches',
    href: '/watches'
  },
  {
    title: 'Accessories',
    href: '/accessories'
  }
]

function Footer() {
  return (
    <div className="mt-5 bg-[#f5a82c] py-10 font-medium text-neutral-50">
      <Container className="flex items-center justify-between flex-col md:flex-row gap-6">
        <Image
          className="opacity-80"
          src="logo.svg"
          alt="Logo"
          width={180}
          height={52}
        />
        <ul className='flex flex-col lg:flex-row gap-2 lg:gap-6 items-center justify-center'>
          {navigation.map((item, i) => (
            <Link key={i} href={item.href}>
              <li className='hover:text-black transition-colors duration-200'>{item.title}</li>
            </Link>
          ))}
        </ul>
        <div className="flex flex-col text-black items-center gap-1">
          <p>Contact us</p>
          <p className='font-bold'>example@domain.com</p>
        </div>
      </Container>
    </div>
  )
}

export { Footer }

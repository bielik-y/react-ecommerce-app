'use client'

import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { sliderOne, sliderTwo, sliderThree } from '@/assets'
import { Clock, Smartphone, Map, MailPlus } from 'lucide-react'
import { BannerSection } from '@/components/banner/banner-section'
import { BannerItem } from '@/components/banner/banner-item'

function Banner() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: false,
    fade: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots: any) => (
      <div
        style={{
          position: 'absolute',
          bottom: '64px',
          width: '100%'
        }}
      >
        <ul
          style={{
            margin: 'auto',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            gap: 10
          }}
        >
          {dots}
        </ul>
      </div>
    )
  }

  return (
    <div className="relative h-full w-full tallscreen:h-1/2 mb-[416px] md:mb-[96px] xl:mb-[40px]">
      <Slider {...settings} className="h-full">
        <BannerItem
          src={sliderOne}
          alt="slider one"
          title="Get the Best products for you"
          subtitle="Phones in Demand"
          description="Browse the latest phones in the Market and get the one you dreamt
          for"
          buttonText="Select a Product"
          hasPriority={true}
        />
        <BannerItem
          src={sliderTwo}
          alt="slider two"
          title="Get the Best products for you"
          subtitle="Accessories in Demand"
          description="Browse the latest t-shirt in the Market and get the one you dreamt
          for"
          buttonText="Select a Product"
        />
        <BannerItem
          src={sliderThree}
          alt="slider three"
          title="Get the Best products for you"
          subtitle="Watches in Demand"
          description="Browse the latest t-shirt in the Market and get the one you dreamt
          for"
          buttonText="Select a Product"
        />
      </Slider>

      <div className="relative bottom-0 left-1/2 flex min-h-20 -translate-x-1/2 flex-col items-center bg-white py-4 md:absolute md:-bottom-24 md:py-0 md:shadow-md xl:-bottom-10 xl:flex-row">
        <div className="flex flex-col md:flex-row">
          <BannerSection
            icon={Clock}
            title="Saturday-Tuesday"
            subtitle="7:00 - 20:00"
          />
          <BannerSection
            icon={Smartphone}
            title="+380 000 00 00 00"
            subtitle="Order by Phone"
          />
        </div>
        <div className="flex flex-col md:flex-row">
          <BannerSection icon={Map} title="Odesa, Ukraine" subtitle="Address" />
          <BannerSection
            icon={MailPlus}
            title="Get an invoice"
            subtitle="Email Us"
          />
        </div>
      </div>
    </div>
  )
}

export { Banner }

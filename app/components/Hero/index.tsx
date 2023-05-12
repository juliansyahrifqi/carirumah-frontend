import React from 'react'
import HeroPrimaryCard from './HeroPrimaryCard'
import HeroSecondaryCard from './HeroSecondaryCard'
import HeroCardItem from './HeroCardItem'

export default function Hero() {
  return (
    <section id="#hero" className='grid grid-cols-2 grid-rows-2 gap-4 py-12 px-12'>
      <div className='row-span-2'>
        <HeroPrimaryCard />
      </div>

      <HeroSecondaryCard />

      <div className='grid grid-cols-2 gap-4'>
        <HeroCardItem image='/hero/bg-hero-item-1.jpg' title='Best Sales' />
        <HeroCardItem image='/hero/bg-hero-item-2.jpg' title='Types of House' />
      </div>
      
    </section>
  )
}

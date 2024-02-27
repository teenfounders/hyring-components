import PricingCard from '@/components/PricingCard'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='bg-red-300 mt-3  max-w-[100vw] md:mt-20 mx-10'>
        <PricingCard/>
    </div>
  )
}

export default page
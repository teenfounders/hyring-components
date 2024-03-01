
'use client'
import React, { useState, useEffect } from 'react';
import PromiseComponent from '@/components/PromiseComponent';
import PricingCard from '@/components/PricingCard';
import pricesvg from '@/public/priceingsvg.svg';
import Image from 'next/image';
import pricing from '@/public/price.svg';

const Page = () => {
 

  return (
    <div className="mt-3 max-w-[100vw] md:mt-20 mx-10">

      <PricingCard image1={pricing} title="Job Seeker" price="0" pricedescription="" buttonText="Join Whitelist" />
    </div>
  );
};

export default Page; 
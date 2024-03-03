'use client'
import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import { Loader } from "@/components/Loading";
import Hero from "@/components/Hero";

export default function Home() {
 

  return (
    <React.Fragment>       
       
        <Hero />
     
    </React.Fragment>
  );
}

'use client'
import React, { useEffect, useState } from "react";
import { usePathname } from 'next/navigation';
import { Loader } from "@/components/Loading";
import Hero from "@/components/Hero";

export default function Home() {
  const path = usePathname();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Simulate loading delay
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timeout);
  }, []);

  return (
    <React.Fragment>
      {loading ? (
        <div className="flex w-full justify-center items-center h-screen">
          <Loader loadingPathname={path} />
        </div>
      ) : (
        <Hero />
      )}
    </React.Fragment>
  );
}

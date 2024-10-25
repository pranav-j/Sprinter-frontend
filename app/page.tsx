"use client"

import Image from "next/image";
import Link from "next/link";
import LandingHeader from "./components/landingHeader";
import { useState, useEffect } from 'react';

export default function LandingPage() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <LandingHeader />
      <section className="w-full relative flex h-[1000px] justify-center overflow-hidden bg-center bg-no-repeat bg-[length:1000px_1000px] bg-[url('https://www.zohowebstatic.com/sites/zweb/images/sprints/home/gradient.png')]">
        {/* Left image */}
        <div 
          className="transition-transform duration-500"
          style={{ 
            transform: `translateX(-${scrollPosition * 0.3}px)`
          }}
        >
          <img 
            className="mr-96 mt-64 h-[400px] w-[320px]" 
            src="https://placehold.co/320x420" 
            alt="" 
          />
        </div>

        {/* Right images */}
        <div 
          className="flex flex-col transition-transform duration-500"
          style={{ 
            transform: `translateX(${scrollPosition * 0.3}px)`
          }}
        >
          <img 
            className="ml-80 mb-40 mt-10 h-[400px] w-[320px]" 
            src="https://placehold.co/320x420" 
            alt="" 
          />
          <img 
            className="h-[400px] w-[320px]" 
            src="https://placehold.co/320x420" 
            alt="" 
          />
        </div>

        {/* Centered text content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center max-w-3xl px-4 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The easiest agile project management software for dynamic teams
          </h1>
          <p className="text-xl text-gray-600 max-w-[640px]">
            Empower your projects with Sprinter - your agile ally for dynamic planning, 
            seamless collaboration, and user-friendly project management.
          </p>
          <div className="flex gap-4 mt-10 mb-3">
            <button className="bg-red-500 border-none rounded px-8 py-3 text-white text-lg">ACCESS SPRINTER</button>
            <button className="border rounded px-8 py-3 border-black  text-lg">REQUEST DEMO</button>
          </div>
          <p>Paid plans starting from <span className="font-bold"> ₹70/user/month</span></p>
        </div>
      </section>
      <div className="bg-[#fffcdd] text-xl font-bold px-8 py-3 border-[1px] rounded border-[#f1ecbc] mb-6">🍀🌿 Trusted by <span className="text-red-500"> 100,000+ </span> Agile Teams Worldwide 🍀🌿</div>
      <Image src="/images/backlog-dash.png" width={1920/1.7} height={1080/1.7} alt="backlog-dash" />
    </div>
  );
}


{/* <div className="intro-wrapper flex p-20">
  <h1 className="text-7xl max-w-screen-md font-bold">The PROJECT MANAGEMENT tool you were looking for.</h1>
  <Image src="/images/sprinter.webp" alt="Sprinter" width={500} height={300}/>
</div> */}


{/* <Link href={"/dashBoard"}>Dashboard</Link> */}

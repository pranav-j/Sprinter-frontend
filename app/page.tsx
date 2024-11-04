"use client"

import Image from "next/image";
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
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center max-w-3xl px-4 flex flex-col items-center">
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

      <div className="bg-[#fffcdd] text-xl font-bold px-8 py-3 border-[1px] rounded border-[#f1ecbc] m-6">🍀🌿 Trusted by <span className="text-red-500"> 100,000+ </span> Agile Teams Worldwide 🍀🌿</div>
      
      <section className="flex items-center justify-center max-w-[1900px] relative">
        <img 
          className="absolute bottom-0 left-0 w-96 h-96 z-0" 
          src="https://www.zohowebstatic.com/sites/zweb/images/sprints/common/gradient1.png" 
          alt="background gradient" 
        />
        
        <div className="relative flex items-center justify-center w-[90%] max-w-[1130px] z-10">
          <Image 
            src="/images/backlog-dash.png" 
            width={1130} 
            height={635} 
            className="pb-32 w-full h-auto rounded"
            alt="backlog-dash" 
          />
        </div>
      </section>

      <section className="w-full bg-[#0e4b24]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-10 p-20">
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">Backlogs, he joined project</h1>
            <p className="text-xl text-white">Split the tasks and get it out of the backlogs.</p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center relative">
            {/* Background div */}
            <div className="absolute w-[90%] max-w-[650px] aspect-[573/650] bg-[#b0d45b] -rotate-6 -top-4 rounded"></div>            
            {/* Image */}
            <div className="relative w-[90%] max-w-[650px]">
              <Image
                src="/images/backlogs.png" 
                width={650}
                height={573}
                className="w-full h-auto rounded"
                alt="backlogs" 
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto flex flex-col md:flex-row gap-10 max-w-7xl p-20">
          <div className="w-full md:w-1/2 flex justify-center items-center relative">
            <div className="absolute w-[90%] max-w-[1186px] aspect-[1186/825] bg-[#bfdbfe] -rotate-6 -top-4 rounded"></div>
            <div className="relative w-[90%] max-w-[1186px]">
              <Image 
                src="/images/chat0.png"
                width={1186}
                height={825}
                className="w-full h-auto rounded"
                alt="chat"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Chat with your team</h1>
            <p className="text-xl">In group and in person</p>
          </div>
        </div>
      </section>
    </div>
  );
}




{/* <Link href={"/dashBoard"}>Dashboard</Link> */}

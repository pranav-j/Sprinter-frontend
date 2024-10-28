import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function LandingHeader () {
    return(
      <header className="flex w-full justify-between items-center px-4 py-2 border-b">
        <div className='flex items-center'>
          <Image src="/images/sprinter-removebg-preview-cropped.PNG" className='mr-4' height={40} width={40} alt="logo" />
          <Link href={"/"}><div className="text-2xl font-bold">Sprinter</div></Link>
        </div>
        <div>
          <Link href="/login" className="mr-4">
            Login
          </Link>
          <Link href="/signup">
            Signup
          </Link>
        </div>
      </header>
    )
};

import React from 'react';
import Link from 'next/link';

export default function LandingHeader () {
    return(
        <header className="flex justify-between items-center p-4 bg-slate-950 text-white">
        <Link href={"/"}><div className="text-xl font-bold">SPRINTER</div></Link>
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

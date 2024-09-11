import Image from "next/image";
import Link from "next/link";
import LandingHeader from "./components/landingHeader";

export default function LandingPage() {

  return(
    <div className="h-20 items-center">
      <LandingHeader />
      <div className="intro-wrapper flex p-20">
        <h1 className="text-7xl max-w-screen-md font-bold">The PROJECT MANAGEMENT tool you were looking for.</h1>
        <Image src="/images/sprinter.webp" alt="Sprinter" width={500} height={300}/>
      </div>
      <Link href={"/dashBoard"}>Dashboard</Link>
    </div>
  )
};

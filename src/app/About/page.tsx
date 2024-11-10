import Image from "next/image";
import Link from 'next/link';

export default function About() {
    return (
     <>
  <div className="px-4 sm:px-6 md:px-8 gap-2 sm:gap-4 md:gap-6">
  <div className="flex flex-col sm:flex-row justify-center items-center mb-48" id="about">
    <div className="home-img relative w-full sm:h-[15vh] md:h-[40vh] px-4 sm:px-8">
      <Image
        src="/1.png"
        alt="about"
        width={1200}
        height={700}
      />
    </div>

    <div className="about-content text-center sm:text-left px-4 sm:px-8 py-0 sm:ml-24 mt-10 sm:mt-20">
      <h2 className="text-3xl sm:text-4xl mt-4 mb-2 font-semibold text-primary relative">
        About Us!
        <span className="absolute bottom-[-10px] left-4 right-16 h-1 rounded-full w-[20%] bg-secondary"></span>
      </h2>

      <p className="my-6 text-sm mt-10 sm:text-base">
        At Coffee House in Karachi, Pakistan. We pride Ourselves on being a go-to destination for coffee lovers and conversation seekers alike. We&apos;re dedicated to providing an exceptional coffee experience in a cozy and inviting atmosphere, where guests can relax, unwind, and enjoy their time in comfort.
      </p>

      <div className="buttons flex gap-6 justify-center sm:justify-start">
        <Link href="#" className="button order-now px-6 py-2 border-2 border-transparent text-primary bg-secondary rounded-full font-medium hover:text-white hover:bg-primary hover:border-secondary transition duration-300"> Order Now </Link>
      </div>
    </div>
  </div>
</div>
  
</>
    )
  }
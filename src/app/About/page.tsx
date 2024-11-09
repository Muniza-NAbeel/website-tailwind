import Image from "next/image";
import Link from 'next/link';

export default function About() {
    return (
     <>
<div className="flex flex-col md:flex-row justify-center items-center mb-48" id="about">
<div className="home-img relative w-full md:w-[200vw] h-[30vh] md:h-[60vh]">
          <Image
            src="/1.png"
            alt="about"
            width={1200} 
            height={700}
           />
        </div>

    <div className="about-content text-center md:text-left px-4 md:px-8 py-0 md:ml-24 mt-10  md:mt-12">
      <h2 className="text-3xl sm:text-4xl mt-4 mb-2 font-semibold text-primary relative">
         About Us!
        <span className="absolute bottom-[-10px] left-6 right-16 h-1 rounded-full w-[20%] bg-secondary"></span></h2>

       <p className="my-6 text-sm mt-10 mr-24 sm:text-base">
          At Coffee House in Karachi, Pakistan. We pride Ourselves on being a go-to destination for coffee lovers and conversation seekers alike. We&apos;re dedicated to providing an exceptional coffee experience in a cozy and inviting atmosphere, where guests can relax, unwind, and enjoy their time in comfort.
        </p>
    <div className="buttons flex gap-6 justify-center md:justify-start">
        <Link href="#" className="button order-now px-6 py-2 border-2 border-transparent text-primary bg-secondary rounded-full font-medium hover:text-white hover:bg-primary hover:border-secondary transition duration-300"> Order Now </Link>
    </div>
  </div>
</div>
 </>
    )
}
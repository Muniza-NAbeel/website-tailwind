import Image from 'next/image';
import Link from 'next/link';

export default function Main() {
    return (
        <main>
            <section className="hero-section bg-primary py-10">
                <div className="section-content max-w-6xl mx-auto flex flex-col md:flex-row items-center px-12 space-y-10 md:space-y-0 md:space-x-12">
                    
                    <div className="hero-details text-center md:text-left space-y-6 md:w-1/2">
                    <link
                      href="https://fonts.googleapis.com/css2?family=Miniver&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap"
                      rel="stylesheet" />

                       <h2 className="title text-4xl font-bold text-secondary italic" style={{ fontFamily: '"Miniver", sans-serif' }}>
                         Best Coffee </h2>

                        <h3 className="subtitle text-3xl font-bold text-white">Make your day great with our special coffee!</h3>
                        <p className="description text-white">
                            Welcome to our coffee paradise, where every bean tells a story and every cup sparks joy.
                        </p>
                        
                        <div className="buttons flex gap-6 justify-center md:justify-start">
                            <Link href="#" className="button order-now px-6 py-2 border-2 border-transparent text-primary bg-secondary rounded-full font-medium hover:text-white hover:bg-transparent hover:border-white transition duration-300">
                              Order Now
                            </Link>

                            <Link href="#" className="button contact-us px-6 py-2 border-2 border-transparent bg-transparent border-white text-white rounded-full font-medium hover:text-primary hover:bg-secondary hover:border-secondary transition duration-300">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    
                    <div className="hero-image-wrapper md:w-1/2 flex justify-center mb-">
                        <Image src="/hero.png" alt="Hero Image" className="hero-image rounded-lg " width={500} height={500} />
                    </div>
                </div>
            </section>
        </main>
    );
}



import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <>
            <footer className="w-full h-auto bg-[#f9f4f2]">
                <div className="px-4 md:px-10 lg:px-36 py-10 flex flex-col justify-evenly gap-10">

                    {/* <div className="flex flex-col md:flex-row md:justify-between md:gap-6">
                        <div className="flex justify-center items-center mb-8 md:mb-0">
                            <Image src='/logo.png' width={150} height={150} alt="Logo" />
                        </div>

                        <div className="flex flex-col justify-center gap-3 mb-8 md:mb-0 text-center md:text-left">
                            <h1 className="text-2xl md:text-3xl font-bold">Stay in the loop</h1>
                            <p className="text-base font-medium">Be the first to get updates on our latest content, special offers, and new features.</p>
                            <p className="text-sm">
                                By signing up, you&apos;re agreeing to receive marketing emails from Headspace. You can unsubscribe at any time. For more details, check out our <Link href='/privacy-policy' className="underline">Privacy Policy</Link>.
                            </p>
                        </div>

                        <div className="flex justify-center items-center">
                            <form className="flex flex-col md:flex-row gap-3 md:gap-10">
                                <input
                                    placeholder="Email address"
                                    className="rounded-xl px-5 py-2 w-full md:w-auto"
                                />
                                <button className="px-5 py-2 bg-[#111111] rounded-3xl text-white text-lg md:text-xl">Subscribe</button>
                            </form>
                        </div>
                    </div> */}



                    <div className="flex flex-col md:flex-row justify-between">
                        <div className="flex justify-center items-center mb-8 md:mb-0">
                            <Link href="#">
                                <Image src='/logo.png' width={200} height={200} alt="Logo" />
                            </Link>
                        </div>
                        {/* <div className="flex flex-wrap justify-evenly w-full gap-8 md:gap-6">


                           
                            
                        </div> */}
                        <div className="flex justify-around md:flex gap-20">
                            <div className="flex flex-col">
                                <h1 className="text-lg md:text-xl font-bold">Important Links</h1>
                                <ul className="mt-5 text-sm">
                                    <li><Link href="#features">Features</Link></li>
                                    <li><Link href="#blogs">Blogs</Link></li>
                                    <li><Link href="#categories">Categories</Link></li>
                                    <li><Link href="#services">Services</Link></li>
                                    <li><Link href="/about-us" className="underline">About us</Link></li>
                                </ul>
                            </div>

                            <div className="flex flex-col">
                                <h1 className="text-lg md:text-xl font-bold">Quick Links</h1>
                                <ul className="mt-5 text-sm">
                                    <li>Help</li>
                                    <li><Link href="/contact-us" className="underline">Contact Us</Link></li>
                                    <li>Mental health resources</li>
                                    <li>Accessibility</li>
                                    <li>Security</li>
                                    <li>Cookie policy</li>
                                    <li><Link href='/privacy-policy' className="underline">Privacy Policy</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex gap-10 justify-around">
                            <div className="flex flex-col items-center md:items-start ml-0 md:mt-0 mt-5">
                                <h1 className="text-lg md:text-xl font-bold">My Headspace</h1>
                                <button className="px-3 mt-5 py-2 bg-[#111111] rounded-3xl text-white text-base">Login</button>
                            </div>

                            <div className="flex flex-col items-center md:items-start ml-0 md:mt-0 mt-5">
                                <h1 className="text-lg md:text-xl font-bold">Get the app</h1>
                                <div className="mt-5">
                                    <Link href="https://play.google.com/">
                                        <Image src="/playstore.png" width={120} height={40} alt="Playstore" />
                                    </Link>                                </div>
                                <div className="mt-5">
                                    <Link href="https://www.apple.com/in/app-store/">
                                        <Image src="/applestore.png" width={120} height={40} alt="App Store" />
                                    </Link>                                </div>
                            </div>
                        </div>


                        {/* <div className="flex flex-wrap justify-between w-full md:w-[40%] gap-8 md:gap-0">
                            
                        </div> */}
                    </div>
                </div>
            </footer>
        </>
    )
}

import Image from "next/image";
import Link from "next/link";

export default function CostSection() {
    return (
        <>
            <div className="flex justify-center items-center py-24 px-4 md:px-0">
                <div className="w-full md:w-[874px] h-auto md:h-[345px] rounded-3xl bg-white p-6 md:px-8 relative" data-aos="fade-right">
                    <div className="md:w-[60%] w-full h-full flex flex-col justify-between">
                        <div>
                            <h1 className="font-bold text-3xl md:text-5xl">It costs no Money</h1>
                            <h2 className="font-bold text-2xl md:text-4xl">Let&apos;s go with <span className="text-[#FFA05D]">Harmony</span></h2>
                        </div>

                        <p className="font-medium text-base md:text-xl mt-4 md:mb-16">Install the app, it&apos;s free. Get access to premium resources, for free. Talk with your therapist here.</p>
                        <div className="flex gap-5 md:pb-5 md:mt-0 mt-10">
                            <Link href="https://play.google.com/">
                                <Image src="/playstore.png" width={120} height={40} alt="Playstore" />
                            </Link>
                            <Link href="https://www.apple.com/in/app-store/">
                                <Image src="/applestore.png" width={120} height={40} alt="App Store" />
                            </Link>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 hidden md:block transform translate-x-10" data-aos="zoom-in">
                        <Image src="/mobilegirl.png" width={387} height={454} alt="Mobile Girl" />
                    </div>
                    <div className="block md:hidden mt-8 flex justify-center" data-aos="zoom-in">
                        <Image src="/mobilegirl.png" width={300} height={235} alt="Mobile Girl" />
                    </div>
                </div>
            </div>
        </>
    );
}

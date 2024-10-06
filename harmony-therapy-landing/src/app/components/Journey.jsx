import Image from "next/image";

export default function JourneyWithHarmony() {
    return (
        <>
            <div className="flex justify-center py-20 px-4">
                <div className="w-full h-auto bg-white rounded-[25px] text-center p-5 flex flex-col gap-5"> 
                    <h1 className="text-3xl md:text-5xl font-bold font-montserrat"> 
                        Feel the Journey with <span className="text-[#33C9D2]">Harmony</span>
                    </h1>
                    <p className="text-base md:text-lg">
                        &quot;Feel the Journey with Harmony&quot; invites you to embark on a transformative path toward mental well-being. 
                        Our platform combines expert guidance with personalized tools, allowing you to explore your emotions, 
                        track your progress, and connect with licensed therapists. Embrace the journey of healing and 
                        self-discovery, where every step brings you closer to a harmonious state of mind.
                    </p>
                    <div className="flex items-center justify-center" data-aos="zoom-in">
                        <Image 
                            src='/journey.png' 
                            width={501} 
                            height={462} 
                            className="w-full h-auto max-w-[501px]"
                            alt="Journey with Harmony" 
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

import Image from "next/image";

export default function Features() {
    return (
        <>
            <div className="md:p-0 p-4" id="features">
                <h1 className="font-bold text-4xl md:text-5xl text-center" data-aos="fade-up">Costs <span className="text-[#33C9D2]">0</span> at <span className="text-[#33C9D2]">Harmony Therapy</span></h1>
                <div className="flex flex-col md:flex-row justify-center md:justify-around items-center md:py-0 mt-10 md:mt-0 space-y-10 md:space-y-0" data-aos="fade-right">
                    <div className="relative flex-shrink-0 md:pt-10 pt-20 md:mt-0 mt-10">
                        <Image src='/image-bg.png' width={480} height={480} />
                        <div className="absolute md:absolute md:left-20 left-10 md:bottom-20 bottom-16 md:w-[320px] md:h-[412px] w-[300px] h-[300]">
                            <Image src='/modal.png' width={320} height={412} />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2" data-aos="fade-left">
                        <h1 className="font-bold text-3xl md:text-5xl font-montserrat">Mood Journal & Tracker 😊</h1>
                        <p className="text-xl font-medium mt-5">The Mood Journal & Tracker is your personal companion for understanding and enhancing your emotional well-being. By logging your feelings daily, you can gain valuable insights into your mood patterns and triggers. Use this tool to reflect on your emotions, jot down significant events, and track how your mood changes over time.</p>
                    </div>
                </div>
                <div className="flex flex-col-reverse md:flex-row justify-center md:justify-evenly items-center py-10 space-y-10 md:space-y-0" data-aos="fade-up">
                    <div className="w-full md:w-1/2" data-aos="fade-right">
                        <h1 className="font-bold text-3xl md:text-5xl font-montserrat">Your Personal <span className="text-[#33C9D2]">Mental Health Continuum</span></h1>
                        <p className="text-xl font-medium mt-5">Your Personal Mental Health Continuum is a vital tool designed to help you visualize and understand your emotional well-being over time. This dynamic framework allows you to assess where you currently stand on your mental health journey and identify areas for growth and improvement.</p>
                    </div>
                    <div className="relative flex-shrink-0 pb-10" data-aos="fade-left">
                        <Image src='/image-bg.png' width={480} height={480} />
                        <div className="absolute md:absolute md:-left-20 -left-20 -top-5 md:bottom-20 md:w-[616px] md:h-[411px] w-[500px] h-[300]">
                            <Image src='/modal1.png' width={616} height={411} />
                        </div>
                    </div>

                </div>
                <div className="flex flex-col md:flex-row justify-center md:justify-around items-center md:py-0 py-10 space-y-10 md:space-y-0" data-aos="fade-right">
                    <div className="relative flex-shrink-0 md:pt-0 pt-20 md:mt-0 mt-20" data-aos="zoom-in">
                        <Image src='/image-bg.png' width={480} height={480} />
                        <div className="absolute md:absolute md:right-20 right-10 md:bottom-20 bottom-16 md:w-[397px] md:h-[514px] w-[350px] h-[300]">
                            <Image src='/modal2.png' width={397} height={514} />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2" data-aos="fade-up">
                        <h1 className="font-bold text-3xl md:text-5xl font-montserrat">Access to All <span className="text-[#33C9D2]">Personalized Resources</span></h1>
                        <p className="text-xl font-medium mt-5">Access to All Personalized Resources empowers you to take charge of your mental health journey with a wealth of tailored tools and information at your fingertips. Our platform offers a curated selection of resources designed to meet your unique needs, helping you navigate your emotional landscape effectively.</p>
                    </div>
                </div>
                <div className="flex flex-col-reverse md:flex-row justify-center md:justify-evenly items-center py-10 space-y-10 md:space-y-0" data-aos="fade-up">
                    <div className="w-full md:w-1/2" data-aos="fade-right">
                        <h1 className="font-bold text-3xl md:text-5xl font-montserrat">Quick & Encrypted 🔒 <span className="text-[#33C9D2]">Personal Journal</span></h1>
                        <p className="text-xl font-medium mt-5">Your Personal Mental Health Continuum is a vital tool designed to help you visualize and understand your emotional well-being over time. This dynamic framework allows you to assess where you currently stand on your mental health journey and identify areas for growth and improvement.</p>
                    </div>
                    <div className="relative flex-shrink-0 pb-10" data-aos="fade-left">
                        <Image src='/image-bg.png' width={480} height={480} />
                        <div className="absolute md:absolute md:right-25 left-0 top-0">
                            <Image src='/modal3.png' width={514} height={412} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
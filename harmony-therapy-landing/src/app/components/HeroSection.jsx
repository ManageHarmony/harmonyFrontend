'use client'

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentSlide((prev) => (prev + 1) % 3);
    //     }, 5000); // Change slide every 5 seconds

    //     return () => clearInterval(interval); 
    // }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % 3);
    };


    return (
        <div className="flex justify-center md:flex md:py-20 md:mt-2">
            <div className="flex flex-col md:flex-row items-center justify-between w-full mt-48 md:mt-36 space-y-8 md:space-y-0 md:space-x-8 relative">


                {currentSlide === 0 && (
                    <div className="text-center md:text-left md:py-0 py-5 md:pl-12" data-aos="fade-right">
                        <div className="w-full md:w-[469px]">
                            <span className="text-3xl md:text-5xl font-bold text-[#33C9D2]">Good Balance</span>
                            <div>
                                <span className="text-3xl md:text-5xl font-bold text-[#222222]">in your </span>
                                <span className="text-3xl md:text-5xl font-bold text-[#FFA05D]">Harmony</span>
                            </div>
                        </div>
                        <div className="w-full md:w-[420px] h-auto mt-5 text-lg md:text-xl text-[#777777]">
                            <p>Your Mental Health Good Balance</p>
                            <p>Decision which Makes your Harmony flow</p>
                            <p>in a Positive Direction</p>
                        </div>
                    </div>
                )}

                {currentSlide === 0 && (
                    <div className="w-full md:w-[640px] relative flex justify-center items-center md:py-0 py-10" data-aos="fade-left">
                        <div className="w-[608px] h-[336px] bg-white rounded-3xl relative flex items-center justify-center">
                            <Image
                                src="/hero.png"
                                width={444}
                                height={433}
                                className="object-contain md:absolute md:bottom-0 absolute bottom-0"
                                alt="Hero Image"
                            />
                        </div>
                    </div>
                )}


                {currentSlide === 1 && (
                    <div className="w-full md:w-full relative flex justify-center items-center md:py-0 py-10" data-aos="zoom-in">
                        <div className="w-[608px] h-[336px] bg-white rounded-3xl relative flex items-center justify-center">
                            <Image
                                src="/hero.png"
                                width={444}
                                height={433}
                                className="object-contain md:absolute md:bottom-0 absolute bottom-0"
                                alt="Hero Image"
                            />
                        </div>
                    </div>
                )}


                {currentSlide === 2 && (
                    <div className="text-center md:text-left md:py-0 py-5 md:pl-12" data-aos="fade-right">
                        <div className="w-full md:w-[469px]">
                            <span className="text-3xl md:text-5xl font-bold text-[#33C9D2]">A Third Slide Title</span>
                        </div>
                        <div className="w-full md:w-[420px] h-auto mt-5 text-lg md:text-xl text-[#777777]">
                            <p>Description for the third slide goes here.</p>
                        </div>
                    </div>
                )}

                {currentSlide === 2 && (
                    <div className="w-full md:w-[640px] relative flex justify-center items-center md:py-0 py-10" data-aos="fade-left">
                        <div className="w-[608px] h-[336px] bg-white rounded-3xl relative flex items-center justify-center">
                            <Image
                                src="/hero.png"
                                width={444}
                                height={433}
                                className="object-contain md:absolute md:bottom-0 absolute bottom-0"
                                alt="Hero Image"
                            />
                        </div>
                    </div>
                )}

                <div onClick={nextSlide} className="absolute md:absolute md:right-0 md:transform md:translate-x-1/3 right-0 top-1/2 transform translate-x-1/4 -translate-y-1/2 cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                        className="md:w-[60px] md-h-[60px] w-[40px] h-[40px]"
                    >
                        <path
                            d="M29.9987 0.833008C29.3629 0.833008 28.7387 0.838841 28.1262 0.847591L26.3295 0.897175L25.4574 0.935091L23.7687 1.03426L22.1558 1.16842C8.19953 2.52176 2.52078 8.20051 1.16745 22.1568L1.03328 23.7697L0.934115 25.4584C0.919531 25.7443 0.904948 26.0359 0.896198 26.3305L0.846615 28.1272L0.834948 29.0547L0.832031 29.9997C0.832031 30.6355 0.837865 31.2597 0.846615 31.8722L0.896198 33.6688L0.934115 34.5409L1.03328 36.2297L1.16745 37.8426C2.52078 51.7988 8.19953 57.4776 22.1558 58.8309L23.7687 58.9651L25.4574 59.0643C25.7433 59.0788 26.0349 59.0934 26.3295 59.1022L28.1262 59.1518L29.9987 59.1663L31.8712 59.1518L33.6679 59.1022L34.5399 59.0643L36.2287 58.9651L37.8416 58.8309C51.7979 57.4776 57.4766 51.7988 58.8299 37.8426L58.9641 36.2297L59.0633 34.5409C59.0779 34.2551 59.0924 33.9634 59.1012 33.6688L59.1508 31.8722L59.1654 29.9997L59.1508 28.1272L59.1012 26.3305L59.0633 25.4584L58.9641 23.7697L58.8299 22.1568C57.4766 8.20051 51.7979 2.52176 37.8416 1.16842L36.2287 1.03426L34.5399 0.935091C34.2493 0.920902 33.9586 0.908263 33.6679 0.897175L31.8712 0.847591L30.9437 0.835924L29.9987 0.833008ZM25.0199 19.1876C25.5222 18.6854 26.1904 18.3837 26.8992 18.3392C27.608 18.2946 28.3088 18.5102 28.8699 18.9455L29.1441 19.1876L37.8941 27.9376C38.3963 28.4398 38.698 29.108 38.7425 29.8169C38.7871 30.5257 38.5715 31.2264 38.1362 31.7876L37.8941 32.0618L29.1441 40.8118C28.6192 41.3349 27.9149 41.6386 27.1742 41.6612C26.4336 41.6838 25.712 41.4236 25.1562 40.9335C24.6004 40.4434 24.252 39.7601 24.1817 39.0225C24.1114 38.2848 24.3246 37.548 24.7779 36.9618L25.0199 36.6876L31.7049 29.9997L25.0199 23.3118C24.5178 22.8095 24.2161 22.1413 24.1715 21.4325C24.127 20.7237 24.3425 20.0229 24.7779 19.4618L25.0199 19.1876Z"
                            fill="#33C9D2"
                        />
                    </svg>
                </div>
                <div onClick={nextSlide} className="absolute md:absolute md:left-0 md:transform md:-translate-x-12 left-0 top-1/2 transform -translate-x-4 -translate-y-1/2 cursor-pointer">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                       className="transform rotate-180 md:w-[60px] md-h-[60px] w-[40px] h-[40px]"
                    >
                        <path
                            d="M29.9987 0.833008C29.3629 0.833008 28.7387 0.838841 28.1262 0.847591L26.3295 0.897175L25.4574 0.935091L23.7687 1.03426L22.1558 1.16842C8.19953 2.52176 2.52078 8.20051 1.16745 22.1568L1.03328 23.7697L0.934115 25.4584C0.919531 25.7443 0.904948 26.0359 0.896198 26.3305L0.846615 28.1272L0.834948 29.0547L0.832031 29.9997C0.832031 30.6355 0.837865 31.2597 0.846615 31.8722L0.896198 33.6688L0.934115 34.5409L1.03328 36.2297L1.16745 37.8426C2.52078 51.7988 8.19953 57.4776 22.1558 58.8309L23.7687 58.9651L25.4574 59.0643C25.7433 59.0788 26.0349 59.0934 26.3295 59.1022L28.1262 59.1518L29.9987 59.1663L31.8712 59.1518L33.6679 59.1022L34.5399 59.0643L36.2287 58.9651L37.8416 58.8309C51.7979 57.4776 57.4766 51.7988 58.8299 37.8426L58.9641 36.2297L59.0633 34.5409C59.0779 34.2551 59.0924 33.9634 59.1012 33.6688L59.1508 31.8722L59.1654 29.9997L59.1508 28.1272L59.1012 26.3305L59.0633 25.4584L58.9641 23.7697L58.8299 22.1568C57.4766 8.20051 51.7979 2.52176 37.8416 1.16842L36.2287 1.03426L34.5399 0.935091C34.2493 0.920902 33.9586 0.908263 33.6679 0.897175L31.8712 0.847591L30.9437 0.835924L29.9987 0.833008ZM25.0199 19.1876C25.5222 18.6854 26.1904 18.3837 26.8992 18.3392C27.608 18.2946 28.3088 18.5102 28.8699 18.9455L29.1441 19.1876L37.8941 27.9376C38.3963 28.4398 38.698 29.108 38.7425 29.8169C38.7871 30.5257 38.5715 31.2264 38.1362 31.7876L37.8941 32.0618L29.1441 40.8118C28.6192 41.3349 27.9149 41.6386 27.1742 41.6612C26.4336 41.6838 25.712 41.4236 25.1562 40.9335C24.6004 40.4434 24.252 39.7601 24.1817 39.0225C24.1114 38.2848 24.3246 37.548 24.7779 36.9618L25.0199 36.6876L31.7049 29.9997L25.0199 23.3118C24.5178 22.8095 24.2161 22.1413 24.1715 21.4325C24.127 20.7237 24.3425 20.0229 24.7779 19.4618L25.0199 19.1876Z"
                            fill="#33C9D2"
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

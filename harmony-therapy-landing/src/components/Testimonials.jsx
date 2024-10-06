import { FaStar } from "react-icons/fa";
import { BiSolidQuoteAltLeft } from "react-icons/bi"; 

export default function TestimonialCard({ name, review, rating }) {
    return (
        <div className="px-5 py-3">
            <div className="testimonialCard bg-gradient-to-b from-[#a8edea] to-[#fed6e3] rounded-[24px] px-5 py-3 w-[388px] w-full h-[369px] flex flex-col justify-between duration-300">
            <div>
                <BiSolidQuoteAltLeft className="text-4xl text-white" />
                <h3 className="font-bold mt-2 text-2xl md:text-3xl">{name}</h3> 
                <p className="text-gray-700 mt-2 text-lg md:text-xl">
                    {review}
                </p>
            </div>
            <div className="flex justify-start mb-2">
                {[...Array(5)].map((_, i) => (
                    <FaStar
                        key={i}
                        className={`text-xl ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
                    />
                ))}
            </div>
        </div>
        </div>
    );
}

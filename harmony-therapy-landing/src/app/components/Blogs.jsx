import Link from 'next/link'
import BlogCrousal from './BlogCrousal'

export default function Blogs() {
    return (
        <>
            <div className="md:p-10 p-2">
                <div className="flex justify-between" data-aos="fade-up">
                    <h1 className="font-bold md:text-5xl text-3xl">Harmony&apos;s <span className="text-[#FFA05D]">Mental Health</span> Resources</h1>
                    <Link href="/allBlogs">
                        <button className="bg-[#33C9D2] md:p-3 p-1 text-base rounded-xl flex h-[50px] text-white text-center font-bold mx-3 mt-3 md:mt-0">
                            View all <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className="ml-3">
                                <g clipPath="url(#clip0_1554_2189)">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M28 5C28 4.73478 27.8947 4.48043 27.7071 4.29289C27.5196 4.10536 27.2653 4 27 4H15C14.7348 4 14.4805 4.10536 14.2929 4.29289C14.1054 4.48043 14 4.73478 14 5C14 5.26522 14.1054 5.51957 14.2929 5.70711C14.4805 5.89464 14.7348 6 15 6H24.586L4.29204 26.292C4.19907 26.385 4.12531 26.4954 4.075 26.6168C4.02468 26.7383 3.99878 26.8685 3.99878 27C3.99878 27.1315 4.02468 27.2617 4.075 27.3832C4.12531 27.5046 4.19907 27.615 4.29204 27.708C4.38502 27.801 4.4954 27.8747 4.61688 27.925C4.73835 27.9754 4.86855 28.0013 5.00004 28.0013C5.13153 28.0013 5.26173 27.9754 5.38321 27.925C5.50469 27.8747 5.61507 27.801 5.70804 27.708L26 7.414V17C26 17.2652 26.1054 17.5196 26.2929 17.7071C26.4805 17.8946 26.7348 18 27 18C27.2653 18 27.5196 17.8946 27.7071 17.7071C27.8947 17.5196 28 17.2652 28 17V5Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1554_2189">
                                        <rect width="32" height="32" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </button>
                    </Link>
                </div>
                <div className='md:px-3 pl-5 flex justify-center items-center' data-aos="zoom-in">
                    <BlogCrousal />
                </div>
            </div>
        </>
    )
}
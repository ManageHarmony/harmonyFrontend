'use client'

import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import BlogCard from '../../components/BlogCard';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { truncateText } from '../../utils/textUtils';
import Link from 'next/link';

// Custom left arrow component
const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="absolute md:absolute md:left-0 md:transform md:-translate-x-6 left-0 top-1/2 transform -translate-x-5 -translate-y-1/2 cursor-pointer z-10">
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
);

const NextArrow = ({ onClick }) => (
    <div onClick={onClick} className="absolute md:absolute md:right-0 md:transform md:translate-x-3 right-0 top-1/2 transform translate-x-1 -translate-y-1/2 cursor-pointer">
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
);

export default function BlogCarousel() {
    const [topBlogs, setTopBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    if (!apiKey) {
        throw new Error('API key is missing.');
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://harmony-backend-z69j.onrender.com/api/admin/get/top/blogs", {
                    method: "GET", headers: { 'x-api-key': apiKey }
                });
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }

                const data = await response.json();
                console.log("data", data);
                setTopBlogs(data?.blogs);
                setLoading(false);
            } catch (error) {
                console.error("something went wrong", error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };

    return (
        <div className="mt-10 w-full mx-auto">
            {!loading ? (
                topBlogs.length > 0 ? (
                    <Slider {...settings}>
                        {topBlogs.map((blog, index) => (
                            <div key={index} className="carousel-slide">
                                <Link href={`/allBlogs/${blog.id}`}>
                                    <BlogCard
                                        image={blog.data.images[0] ? blog.data.images[0] : "/public/assests/avatar.jpg"}
                                        heading={truncateText(
                                            blog?.data?.headings?.h1?.[0] ||
                                            blog?.data?.headings?.h2?.[0] ||
                                            'No headings available',
                                            15
                                        )}
                                        para={truncateText(blog?.data?.paragraphs?.join(' '), 100)}
                                    />
                                </Link>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <div className="text-center mt-5">
                        <p className="text-gray-600">No Blog found</p>
                    </div>
                )
            ) : (
                <div className="text-center mt-5">
                    <p className="text-gray-600">Loading Blogs...</p>
                </div>
            )}
        </div>
    );
}

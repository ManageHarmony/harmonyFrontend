'use client';
import React, { useEffect, useState } from 'react';
import BlogCard from '../../../components/BlogCard';
import Link from 'next/link';

function AllBlogsPage() {
    const [blogData, setBlogData] = useState([]);
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
                setBlogData(data?.blogs);
                setLoading(false);
            } catch (error) {
                console.error("something went wrong", error);
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[100vh]">
                <h4 className="mx-2 text-[#33C9D2]">Loading..</h4>
            </div>
        );
    }

    return (
        <div className="md:p-10 p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:ml-6 ml-4 md:px-10 pt-32 md:pt-32">
                {blogData?.map((data, index) => (
                    <Link
                        href={`/allBlogs/${data?.id}`}
                        key={index}
                        className="mb-4"
                    >
                        <BlogCard
                            heading={data?.data.headings.h1[0]}
                            para={data?.data.paragraphs[0].length > 0 ? data?.data.paragraphs[0] : data?.data.paragraphs[1]}
                            image={data?.data.images[0]}
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default AllBlogsPage;

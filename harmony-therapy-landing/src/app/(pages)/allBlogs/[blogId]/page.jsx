'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const BlogPost = () => {
    const { blogId } = useParams(); // Make sure to use blogId from useParams
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    if (!apiKey) {
        throw new Error('API key is missing.');
    }

    useEffect(() => {
        console.log('Router ID:', blogId);

        if (blogId) {
            const fetchBlog = async () => {
                try {
                    const response = await fetch(`https://harmony-backend-z69j.onrender.com/api/get/blog/${blogId}`, {
                        method: "GET",
                        headers: { 'x-api-key': apiKey }
                    });
                    const { data } = await response.json();
                    console.log("data", data);
                    setBlog(data);
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching blog data:', error);
                    setLoading(false);
                }
            };

            fetchBlog();
        }
    }, [blogId, apiKey]);

    return (
        <div className="w-full px-0 md:px-20 pt-32 md:pt-32">
            {loading ? (
                <div className="flex justify-center items-center h-[100vh]">
                    <h4 className="mx-2 text-[#33C9D2]">Loading..</h4>
                </div>
            ) : blog ? (
                <div className='flex items-center justify-center p-10'>
                    <div className="bg-white p-10 w-full rounded-3xl h-auto">
                        <div className="imageContainer flex items-center justify-center mb-4 border border-gray-400 rounded-lg">
                            <Image
                                src={blog?.data?.images && blog.data.images.length > 0 ? blog.data.images[0] : "/assets/avatar.jpg"}
                                alt="Blog Image"
                                width={300}
                                height={200}
                                className="object-cover"
                            />
                        </div>
                        <div className="text-2xl">{blog?.data?.headings?.h1?.[0]}</div>
                        <div className="text-lg mt-2">{blog?.data?.headings?.h1?.[1]}</div>

                        <p className="text-justify mt-2 leading-relaxed">
                            {blog?.data?.paragraphs?.join(' ')}
                        </p>
                    </div>
                </div>
            ) : (
                <div>Blog not found.</div>
            )}
        </div>

    );
};

export default BlogPost;

'use client';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const BlogPost = () => {
    const { categoryId } = useParams(); // Make sure to use categoryId from useParams
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    if (!apiKey) {
        throw new Error('API key is missing.');
    }

    useEffect(() => {
        console.log('Router ID:', categoryId);

        if (categoryId) {
            const fetchBlog = async () => {
                try {
                    const response = await fetch(`https://harmony-backend-z69j.onrender.com/api/get/category/${categoryId}`, {
                        method: "GET",
                        headers: { 'x-api-key': apiKey }
                    });

                    if (!response.ok) {
                        throw new Error("Failed fetching category")
                    }
                    const data = await response.json();
                    console.log("data", data)
                    setCategory(data?.msg)
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching category data:', error);
                    setLoading(false);
                }
            };

            fetchBlog();
        }
    }, [categoryId, apiKey]);

    return (
        <div className="w-full px-0 md:px-20 pt-32 md:pt-32">
            {loading ? (
                <div className="flex justify-center items-center h-[100vh]">
                    <h4 className="mx-2 text-[#33C9D2]">Loading..</h4>
                </div>
            ) : category ? (
                <div className='flex items-center justify-center p-10'>
                    <div className="bg-white p-10 w-full rounded-3xl h-auto">
                        <div className="imageContainer flex items-center justify-center mb-4 border border-gray-400 rounded-lg">
                            <Image
                                src={'/category.png'}  // {consultant.imagePath.startsWith('/') ? consultant.imagePath : `/${consultant.imagePath}`} 
                                alt="Category Image"
                                width={300}
                                height={200}
                                className="object-cover"
                            />
                        </div>
                        <h1 className='text-4xl'>{category?.name}</h1>

                    </div>
                </div>
            ) : (
                <p className='text-[#33C9D2]'>Category not found.</p>
            )}
        </div>

    );
};

export default BlogPost;

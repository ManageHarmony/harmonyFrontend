'use client'
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function AllCategories() {
    const [categories, setCategories] = useState([]);
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    if (!apiKey) {
        throw new Error('API key is missing.');
    }

    useEffect(() => {
        const fetchConsultants = async () => {
            try {
                const response = await fetch('https://harmony-backend-z69j.onrender.com/api/get/all/category', {
                    method: "GET",
                    headers: { 'x-api-key': apiKey }
                });
                const data = await response.json();
                console.log("data", data)
                setCategories(data?.msg?.allCategory);
            } catch (error) {
                console.error('Error fetching categories data:', error);
            }
        };

        fetchConsultants();
    }, []);


    return (
        <div className="w-full px-5 md:px-20 py-10">
            <div className="p-5 mt-32 bg-white rounded-[25px]">
                <div className="font-montserrat text-3xl font-bold">
                    <h1>Certified Consultants for all <span className="text-[#FFA05D]">Mental Health Categories</span></h1>
                </div>                
                <div className="flex flex-wrap gap-10 md:px-5 px-1 mt-5">
                    {categories.length > 0 ? (
                        categories.map((category, index) => (
                            <Link href={`/all-categories/${category.id}`} key={category.id}>
                             <div key={index} className="flex flex-col items-center mb-2">
                                <div className="rounded-full w-[60px] h-[60px]">
                                    <Image
                                        src={'/category.png'}  // {category.imagePath.startsWith('/') ? category.imagePath : `/${category.imagePath}`} 
                                        alt={category.name}
                                        width={80}
                                        height={80}

                                    />
                                </div>
                                <p className="text-center text-sm mt-1">{category.name}</p>
                            </div>
                            </Link>
                        ))
                    ) : (
                        <p className="text-[#33C9D2]">Loading categories...</p>
                    )}
                </div>
            </div>
        </div>
    )
}
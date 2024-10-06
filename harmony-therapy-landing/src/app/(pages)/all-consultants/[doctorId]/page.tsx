'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import DoctorCard from '../../../../components/DoctorCard';
import Image from 'next/image';

const StaffDetail: React.FC = () => {
    const [doctorData, setDoctorData] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const params = useParams();
    const doctorId = params.doctorId;
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    if (!apiKey) {
        throw new Error('API key is missing.');
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const apiUrl = `https://harmony-backend-z69j.onrender.com/api/get/doctor/profile/${doctorId}`;
                const response = await fetch(apiUrl, { headers: { 'x-api-key': apiKey } });
                const data = await response.json();
                console.log("doctor pro", data)
                setDoctorData(data?.profile);
            } catch (error) {
                console.error('Error fetching staff data:', error);
            } finally {
                setLoading(false);
            }
        };

        if (doctorId) {
            fetchData();
        }
    }, [doctorId]);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[100vh]">
                <h4 className="mx-2 text-[#33C9D2]">Loading..</h4>
            </div>
        );
    }

    if (!doctorData) {
        return <div className="flex justify-center items-center h-screen text-[#33C9D2]">No data found</div>;
    }

    return (
        <div className="flex justify-center items-center py-5 w-full pt-36 md:px-10 px-4 relative">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:py-0 py-5 max-w-6xl w-full">
                {/* Doctor Card */}
                <div className="rounded-3xl p-3 m-2 w-full md:w-[320px] h-[350px] shadow-md hover:shadow-lg transition-shadow cursor-pointer flex flex-col justify-between bg-white">
                    <div className="relative w-full h-[80%] rounded-3xl">
                        <Image
                            src="/altImage.png"
                            alt="Doctor"
                            fill
                            objectFit="cover"
                            className="rounded-3xl"
                        />
                    </div>
                    <div className="text-center mt-3">
                        <h3 className="text-sm md:text-xl font-bold text-gray-800">
                            {doctorData.name || doctorData.doctorName}
                        </h3>
                        <p className="text-sm text-gray-600">
                            {doctorData.role}
                        </p>
                    </div>
                </div>

                {/* Doctor Details */}
                <div className="md:px-10 px-4 md:w-[400px] w-full flex flex-col justify-between">
                    <h6 className="font-bold text-2xl text-[#33C9D2] mb-10 text-center">Details</h6>
                    <div className="grid grid-cols-2 gap-y-4 md:gap-x-8 gap-x-0">
                        {/* Email */}
                        <div className="col-span-1">
                            <p className="text-gray-700 font-medium">Email:</p>
                        </div>
                        <div className="col-span-1">
                            <p className="break-words">{doctorData.email}</p> {/* Ensure text breaks if too long */}
                        </div>

                        {/* Gender */}
                        <div className="col-span-1">
                            <p className="text-gray-700 font-medium">Gender:</p>
                        </div>
                        <div className="col-span-1">
                            <p>{doctorData.gender}</p>
                        </div>

                        {/* Status */}
                        <div className="col-span-1">
                            <p className="text-gray-700 font-medium">Status:</p>
                        </div>
                        <div className="col-span-1">
                            <p>{doctorData.status}</p>
                        </div>

                        {/* Max Education */}
                        <div className="col-span-1">
                            <p className="text-gray-700 font-medium">Max. Education:</p>
                        </div>
                        <div className="col-span-1">
                            <p>{doctorData.maximumEducation}</p>
                        </div>

                        {/* Price per session */}
                        <div className="col-span-1">
                            <p className="text-gray-700 font-medium">Price per session:</p>
                        </div>
                        <div className="col-span-1">
                            <p>{doctorData.pricePerSession}</p>
                        </div>

                        {/* Experience */}
                        <div className="col-span-1">
                            <p className="text-gray-700 font-medium">Experience:</p>
                        </div>
                        <div className="col-span-1">
                            <p>{doctorData.experience}</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default StaffDetail;

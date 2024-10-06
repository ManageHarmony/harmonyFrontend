'use client';

import React, { useEffect, useState } from 'react';
import DoctorCard from '../../../components/DoctorCard'
import Link from 'next/link';

const DoctorCardView = () => {
    const [doctorData, setDoctorData] = useState([]);
    const [loading, setLoading] = useState(false);
    const apiKey = process.env.NEXT_PUBLIC_API_KEY;

    if (!apiKey) {
        throw new Error('API key is missing.');
    }

    useEffect(() => {
        const fetchDoctors = async () => {
            setLoading(true);
            const url = 'https://harmony-backend-z69j.onrender.com/api/admin/get/staff';

            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers: { 'x-api-key': apiKey },
                });

                if (!response.ok) {
                    throw new Error("Failed loading data");
                }

                const data = await response.json();
                console.log("data", data)
                setDoctorData(data?.staff?.doctors || data?.staff?.approvalDoctors || data?.staff?.pendingDoctors || data?.staff?.rejectedDoctors || data?.staff?.activeDoctors || data?.staff?.InactiveDoctors || data?.staff?.temporayOffDoctors || []);
            } catch (error) {
                console.error('Error fetching doctor data:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchDoctors();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center h-[100vh]">
                <h4 className="mx-2 text-[#33C9D2]">Loading..</h4>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-5 p-5 w-full pt-20 md:px-10">
            {doctorData.length === 0 ? (
                <div className="text-center text-xl text-gray-600 h-[100vh] text-[#33C9D2]">
                    No data found
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20">
                    {doctorData.map((doctor) => {
                        const detailPath = `/all-consultants/${doctor.id}`;
                        return (
                            <div key={doctor.id} className="flex justify-center">
                                <Link href={detailPath} passHref>
                                    <div className="cursor-pointer">
                                        <DoctorCard name={doctor.name || doctor.username} role={doctor.role} imageUrl="/altImage.png" />
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default DoctorCardView;

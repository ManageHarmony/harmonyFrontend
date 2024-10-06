import Image from "next/image";

export default function AboutUs() {
    return (
        <div className="w-full px-5 md:px-20">

            <div className="flex flex-col md:flex-row items-center mb-16 pt-32 md:pt-32" data-aos="fade-up">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <Image src="/hero.png" width={500} height={380} alt="About Harmony" />
                </div>
                <div className="w-full md:w-1/2 md:pt-10">
                    <h2 className="text-3xl font-semibold mb-4">Welcome to <span className="text-[#33C9D2]">Harmony:</span> Your trusted Mental Health Care/support</h2>
                    <p className="text-lg flex justify-center">
                        Harmony is created with the passion to provide authentic and reliable mental health services from the comfort of your own space. We bring you 20+ years of experience with our professionals onboard in dealing with diverse mental health conditions.
                        Our aim is to provide compassionate and personalized mental health care that empowers individuals to achieve inner peace, emotional balance, and a resilient mindset.
                        We value and respect each client&apos;s lived journey and offer them safe space to explore and embrace oneself as a whole individual.
                        We offer a wide range of services such as individual therapy, family therapy, adolescent therapy, group
                        therapy, resource referral and follow up and after care

                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center mb-16" data-aos="fade-left">
                <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-end">
                    <Image src="/hero.png" width={500} height={380} alt="our mission" />
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl font-semibold mb-4">Our <span className="text-[#33C9D2]">Mission</span></h2>
                    <p className="text-lg">
                        At Harmony, our mission is to provide easily accessible, authentic, reliable mental health care by a team of highly competent experts. Through evidence-based practices and holistic approaches, we strive to create a supportive environment where clients can discover their true potential and lead fulfilling, harmonious lives.


                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center mb-16" data-aos="fade-right">
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <Image src="/hero.png" width={500} height={380} alt="our vision" />
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl font-semibold mb-4">Our <span className="text-[#33C9D2]">Vision</span></h2>
                    <p className="text-lg">
                        We envision reaching out to every member of the community and have 100% mental health literacy rates by offering affordable and easily accessible mental health services and by offering opportunities of community engagement. We are committed to foster a barrier free environment where people are confident and comfortable to support their own mental health and those around them.
                    </p>
                </div>
            </div>

            <div className="flex flex-col-reverse md:flex items-center mb-16" data-aos="fade-up">
                {/* <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-end">
                    <Image src="/modal.png" width={400} height={400} alt="Why Choose Us" />
                </div> */}
                <div className="w-full md:w-full">
                    <h2 className="text-4xl font-semibold mb-4">Why <span className="text-[#33C9D2]">Choose</span> Us</h2>
                    <p className="text-lg">
                        At Harmony, we promise to deliver
                    </p>
                    <ul className="list-disc list-outside flex flex-col gap-5 mt-5 px-10 py-5">
                        <li><span className="font-bold">Accessible services &ndash;</span> You can seek our services from the comfort of your chosen environment &ndash; whether it&apos;s your home, workplace and/or any other comfortable environment</li>
                        <li><span className="font-bold">Reliable Professionals &ndash;</span> All Clinicians onboard are licensed and competent to deliver authentic, evidence-based practices. We as professionals believe in our continues professional development to ensure that we keep ourselves abreast with recent trends </li>
                        <li><span className="font-bold">Transparent approach &ndash;</span> As a service user you will have the choice to review your clinician&apos;s profile and chose the best match for yourself</li>
                        <li><span className="font-bold">Easy transfer/referral &ndash;</span> In case you do not feel comfortable with your current clinician&apos;s approach, at Harmony you can easily choose another clinician by yourself and/or can seek support of your current clinician to make appropriate referral for you </li>
                        <li><span className="font-bold">Inclusive-</span> We are a queer affirmative and trauma informed platform. We intend to create mental health more inclusive and world a better-informed place  </li>
                        <li><span className="font-bold">Feedback loop-</span> We at Harmony believe that feedback is an important loop in communication and create opportunities for growth. We respect and take every single feedback with utmost seriousness. </li>
                    </ul>
                </div>
            </div>
            <div className="mb-16">
                <h2 className="text-4xl font-semibold mb-4">Our <span className="text-[#33C9D2]">Experience</span></h2>

                <div className="px-5">
                    <div className="flex flex-col md:flex-row justify-between gap-10" data-aos="fade-left">
                        <div className="flex flex-col gap-5 md:w-[60%]">
                            <p className="text-lg">
                                <strong>Mrs. Kanika Jindal</strong> is a Clinical Psychologist with over <span className="text-[#FFA05D]">14 years</span> of clinical experience. She has previously worked with<strong> Qatar Airways</strong> as a Clinical Psychologist and at <span className="font-medium">Yashoda Super Specialty Hospital</span>.
                            </p>
                            <p className="text-lg">
                                She brings a unique blend of experience working with people dealing with terminal illnesses, war, and disaster survivors.
                            </p>
                            <p className="text-lg"> She has worked with diverse populations and supported over <span className="text-[#FFA05D]">100 nationalities</span> in their mental health journeys.</p>
                            <p className="text-lg">
                                She is passionate about making the world more inclusive, especially in terms of mental health, and is driven to combat barriers to mental health access.
                            </p>
                            <p className="text-lg">
                                She believes in a client-centered approach and the potential of individuals to thrive despite environmental limitations.
                            </p>
                        </div>

                        <div className="relative flex-shrink-0 w-full md:w-auto md:pt-10 pt-0 md:mb-0 mb-10" data-aos="fade-right">
                            <Image src='/image-bg.png' width={380} height={380} alt="Background" />
                            <div className="absolute md:left-10 left-5 md:bottom-20 bottom-16 md:w-[320px] md:h-[412px] w-[300px] h-[300px]">
                                <Image src='/modal.png' width={320} height={312} alt="Modal" />
                            </div>
                        </div>
                    </div>

                    <p className="text-lg">
                        She envisions a future where mental health needs are at the forefront of societal priorities.
                    </p>
                    <p className="text-lg">
                        Her creative ideas knows no boundaries when it comes to focus on mental wellbeing. She believes in the power of positive ideas and change.
                        Harmony is an idea that started as a budding Clinical Psychologist and has now turned into reality with her persistence and belief in the power of her profession.
                    </p>
                </div>
            </div>
        </div>
    );
}

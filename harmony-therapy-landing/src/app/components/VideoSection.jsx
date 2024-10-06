import VideoPlayerWithThumbnail from "../../components/VideoPlayerWithThumbnail";

export default function VideoSection() {
    return (
        <>
            <div className="flex flex-col items-center justify-center gap-8 md:py-5 py-20 md:pb-10">
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-center text-[montserrat]" data-aos="fade-up">
                    One <span className="text-[#33C9D2]">Video</span>, says it all
                </h1>
                <div className="w-full h-auto max-w-[1068px] lg:h-[598px]" data-aos="zoom-in">
                    <VideoPlayerWithThumbnail
                        url='https://youtu.be/PUfBmK-9Hj0?si=GAl23y8DeQQVcXl1'
                        thumbnailUrl='/videothumbnail.png'
                    />
                </div>
            </div>
        </>
    )
}

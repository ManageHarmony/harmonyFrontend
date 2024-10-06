'use client';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const ReactPlayer = dynamic(() => import('react-player'), { ssr: false });

const VideoPlayerWithThumbnail = ({ url, thumbnailUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); 

    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  const handlePlayClick = () => {
    if (isMobile) {
     
      window.location.href = url;
    } else {
     
      setIsPlaying(true);
    }
  };

  const handleBackClick = () => {
    setIsPlaying(false);
  };

  return (
    <div className="w-full flex justify-center items-center bg-none ">
      {!isPlaying ? (
        <div className="relative w-full">
          <Image
            src={thumbnailUrl}
            alt="Thumbnail"
            width={640}
            height={360}
            className="w-full h-full object-cover"
            quality={100}
          />
          <button
            onClick={handlePlayClick}
            className="absolute inset-0 flex justify-center items-center text-white bg-none p-4 rounded"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="78" height="61" viewBox="0 0 78 61" fill="none">
              <g clipPath="url(#clip0_456_8059)">
                <rect width="78" height="61" rx="9" fill="white" />
                <path d="M10.0221 60.82H67.9792C74.9778 60.82 78.4935 57.3386 78.4935 50.4414V9.55716C78.4935 2.66002 74.9778 -0.821411 67.9792 -0.821411H10.0221C3.05781 -0.819983 -0.492188 2.62859 -0.492188 9.55716V50.4429C-0.492188 57.3729 3.05781 60.82 10.0221 60.82ZM32.3864 43.2429C30.7792 44.18 28.9721 43.1429 28.9721 41.4672V18.5329C28.9721 16.8914 30.8792 15.8872 32.3864 16.7586L51.6721 28.2086C53.0778 29.0129 53.145 30.9872 51.6721 31.8586L32.3864 43.2429Z" fill="#181818" />
              </g>
              <defs>
                <clipPath id="clip0_456_8059">
                  <rect width="78" height="61" rx="9" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
      ) : (
        <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
          <div className="relative w-full h-full">
            <button
              onClick={handleBackClick}
              className="absolute top-16 left-8 text-white text-xl"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
                <rect x="0.5" y="0.5" width="71" height="71" rx="35.5" fill="white" />
                <rect x="0.5" y="0.5" width="71" height="71" rx="35.5" stroke="#F2F2F2" />
                <path d="M32.4992 36.8L38.1992 42.4C38.5992 42.8 39.1992 42.8 39.5992 42.4C39.9992 42 39.9992 41.4 39.5992 41L34.6992 36L39.5992 31C39.9992 30.6 39.9992 30 39.5992 29.6C39.3992 29.4 39.1992 29.3 38.8992 29.3C38.5992 29.3 38.3992 29.4 38.1992 29.6L32.4992 35.2C32.0992 35.7 32.0992 36.3 32.4992 36.8C32.4992 36.7 32.4992 36.7 32.4992 36.8Z" fill="black" />
              </svg>
            </button>
            <ReactPlayer
              url={url}
              className="react-player"
              width="100%"
              height="100%"
              controls
              playing
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayerWithThumbnail;

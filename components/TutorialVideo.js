"use client";
import { useState } from "react";

export default function TutorialVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="relative w-full h-full aspect-video rounded-4xl overflow-hidden">
      {isPlaying ? (
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/D6jDmCQIink?autoplay=1&rel=0"
          title="YouTube video player"
          allow="autoplay; accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <button className="relative w-full h-full">
          <img
            src="/video-thumbnail.png"
            alt="Custom Thumbnail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 hover:bg-black/80 transition duration-300">
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="100"
              height="100"
              color="#ffffff"
              fill="none"
              onClick={() => setIsPlaying(true)}
            >
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
              ></circle>
              <path
                d="M9.5 11.1998V12.8002C9.5 14.3195 9.5 15.0791 9.95576 15.3862C10.4115 15.6932 11.0348 15.3535 12.2815 14.6741L13.7497 13.8738C15.2499 13.0562 16 12.6474 16 12C16 11.3526 15.2499 10.9438 13.7497 10.1262L12.2815 9.32594C11.0348 8.6465 10.4115 8.30678 9.95576 8.61382C9.5 8.92086 9.5 9.6805 9.5 11.1998Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </button>
      )}
    </div>
  );
}

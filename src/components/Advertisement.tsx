import { useEffect, useState, useRef } from "react";
import { X } from "lucide-react";

interface AdvertisementProps {
  onClose: () => void;
}

export default function Advertisement({ onClose }: AdvertisementProps) {
  const [canSkip, setCanSkip] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const skipTimer = setTimeout(() => setCanSkip(true), 15000); // Show skip button after 15s
    return () => clearTimeout(skipTimer);
  }, []);

  // Ensure video plays on mobile when tapped
  const handlePlay = () => {
    videoRef.current?.play();
    setIsPlaying(true);
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      {/* Responsive Video Container */}
      <div className="relative w-full max-w-3xl h-auto aspect-video">
        <video
          ref={videoRef}
          className="w-full h-full object-cover rounded-lg shadow-lg"
          autoPlay
          muted
          playsInline
          controls
          onPlay={() => setIsPlaying(true)}
        >
          <source src="/video/ad.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Button (if autoplay fails) */}
        {!isPlaying && (
          <button
            onClick={handlePlay}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg rounded-lg"
          >
            ▶ Play Ad
          </button>
        )}

        {/* Skip Button (Appears After 15s) */}
        {canSkip && (
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition"
          >
            <X size={28} />
          </button>
        )}

        {/* Countdown Timer */}
        {!canSkip && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-md">
            You can skip this ad in 15 seconds
          </div>
        )}
      </div>
    </div>
  );
}

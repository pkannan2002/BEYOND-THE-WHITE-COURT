import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface AdvertisementProps {
  onClose: () => void;
}

export default function Advertisement({ onClose }: AdvertisementProps) {
  const [canSkip, setCanSkip] = useState(false);

  useEffect(() => {
    const skipTimer = setTimeout(() => {
      setCanSkip(true);
    }, 15000); // 15 seconds delay for skip button

    return () => clearTimeout(skipTimer);
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      {/* Fullscreen Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        controls
      >
        <source src="/video/ad.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Skip Button (Appears After 15 Sec) */}
      {canSkip && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 transition-colors"
        >
          <X size={32} />
        </button>
      )}

      {/* Countdown Timer */}
      {!canSkip && (
        <div className="absolute bottom-10 text-white text-lg bg-black bg-opacity-50 px-4 py-2 rounded-md">
          You can skip this ad in 15 seconds
        </div>
      )}
    </div>
  );
}

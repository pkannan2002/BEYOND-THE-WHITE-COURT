import { useEffect, useState, useRef } from "react";
import { X, Volume2 } from "lucide-react";

interface AdvertisementProps {
  onClose: () => void;
}

export default function Advertisement({ onClose }: AdvertisementProps) {
  const [canSkip, setCanSkip] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [countdown, setCountdown] = useState(15);

  // Handle countdown timer
  useEffect(() => {
    // Show skip button after 15s
    const skipTimer = setTimeout(() => setCanSkip(true), 15000);
    
    // Countdown timer
    const countdownInterval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    
    return () => {
      clearTimeout(skipTimer);
      clearInterval(countdownInterval);
    };
  }, []);

  // Try to enable audio as soon as component loads
  useEffect(() => {
    const attemptAutoplay = async () => {
      try {
        if (videoRef.current) {
          // Set muted initially to allow autoplay
          videoRef.current.muted = false;
          await videoRef.current.play();
          setIsPlaying(true);
          setAudioEnabled(true);
        }
      } catch (error) {
        console.log("Autoplay with sound failed, showing play button");
        // If autoplay with sound fails, we'll need user interaction
        if (videoRef.current) {
          videoRef.current.muted = true;
        }
      }
    };

    attemptAutoplay();
  }, []);

  // Handle play button click - with unmuted audio
  const handlePlay = async () => {
    if (videoRef.current) {
      try {
        videoRef.current.muted = false;
        await videoRef.current.play();
        setIsPlaying(true);
        setAudioEnabled(true);
      } catch (error) {
        console.error("Play with unmuted audio failed:", error);
        
        // If unmuted play fails, try muted first then unmute
        try {
          videoRef.current.muted = true;
          await videoRef.current.play();
          setIsPlaying(true);
          
          // Now try to unmute after play started
          videoRef.current.muted = false;
          setAudioEnabled(true);
        } catch (secondError) {
          console.error("Play failed even with mute:", secondError);
        }
      }
    }
  };

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      {/* Responsive Container with better mobile handling */}
      <div className="relative w-full h-full md:w-4/5 md:h-auto md:max-w-3xl md:aspect-video flex items-center justify-center">
        <video
          ref={videoRef}
          className="w-full h-auto max-h-full object-contain md:object-cover rounded-lg shadow-lg"
          playsInline
          controls={isPlaying}
          loop={false}
          onPlay={() => setIsPlaying(true)}
        >
          <source src="/video/ad.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Play Button with Audio Indication */}
        {!isPlaying && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 text-white rounded-lg">
            <button
              onClick={handlePlay}
              className="flex flex-col items-center p-6 bg-red-600 hover:bg-red-700 rounded-full mb-4 transition-colors"
            >
              <span className="text-4xl">▶</span>
            </button>
            <p className="text-lg font-medium">Click to Play Ad with Sound</p>
            <p className="text-sm opacity-80 mt-2">
              This advertisement includes audio
            </p>
          </div>
        )}

        {/* Audio Indicator */}
        {isPlaying && audioEnabled && (
          <div className="absolute top-4 left-4 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full flex items-center">
            <Volume2 size={20} className="mr-1" />
            <span className="text-sm">Sound On</span>
          </div>
        )}

        {/* Skip Button (Appears After 15s) */}
        {canSkip && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors"
          >
            <span>Skip Ad</span>
            <X size={20} />
          </button>
        )}

        {/* Countdown Timer */}
        {!canSkip && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-60 px-3 py-1 rounded-md">
            You can skip this ad in {countdown} seconds
          </div>
        )}
      </div>
    </div>
  );
}

"use client";

import React, { useRef, useEffect, useState } from "react";
import { X, ChevronRight, Link as LinkIcon, Volume2, Share2, Instagram, Facebook, Twitter } from "lucide-react";

type VideoModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  video: {
    id: string;
    thumbnail: string;
    title: string;
    duration: string;
    videoUrl: string;
  };
  hasNext: boolean;
  hasPrev: boolean;
};

export default function VideoModal({ isOpen, onClose, onNext, onPrev, video, hasNext, hasPrev }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showShare, setShowShare] = useState(false);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  }, [isOpen, video.id]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 z-50"
      >
        <X size={24} />
      </button>

      {hasPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 hover:bg-gray-100 z-50"
        >
          <ChevronRight size={24} className="rotate-180" />
        </button>
      )}

      {hasNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-3 hover:bg-gray-100 z-50"
        >
          <ChevronRight size={24} />
        </button>
      )}

      <div className="relative w-full max-w-md mx-4">
        <div className="relative bg-black rounded-lg overflow-hidden">
          <video
            ref={videoRef}
            src={video.videoUrl}
            className="w-full h-[600px] object-cover"
            poster={video.thumbnail}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
            onClick={togglePlay}
          />
          
          <div className="absolute top-4 left-4 z-10">
            <button className="text-white hover:text-gray-300">
              <LinkIcon size={20} />
            </button>
          </div>

          <div className="absolute top-4 right-4 z-10 flex flex-col gap-3">
            <button 
              onClick={() => setShowShare(!showShare)}
              className="text-white hover:text-gray-300 relative"
            >
              <Share2 size={20} />
              {showShare && (
                <div className="absolute right-0 top-8 bg-white rounded-lg shadow-lg p-2 flex flex-col gap-2">
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <Instagram size={20} className="text-pink-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <Facebook size={20} className="text-blue-600" />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded">
                    <Twitter size={20} className="text-blue-400" />
                  </button>
                </div>
              )}
            </button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
            <h3 className="text-white text-lg font-semibold mb-4">{video.title}</h3>
            
            <div className="flex items-center justify-between text-white mb-3">
              <button className="p-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <rect x="2" y="4" width="16" height="2" />
                  <rect x="2" y="8" width="16" height="2" />
                  <rect x="2" y="12" width="10" height="2" />
                </svg>
              </button>

              <button onClick={togglePlay} className="p-3 bg-white/20 rounded-full hover:bg-white/30">
                {isPlaying ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>

              <button className="p-2">
                <Volume2 size={20} />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex-1 bg-white/30 h-1 rounded-full">
                <div 
                  className="bg-white h-1 rounded-full transition-all" 
                  style={{ width: `${(currentTime / duration) * 100}%` }} 
                />
              </div>
              <span className="text-sm">{formatTime(currentTime)} / {formatTime(duration)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

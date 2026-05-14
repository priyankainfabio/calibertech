import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  mainImage: string;
  alt: string;
  className?: string;
}

export default function ImageCarousel({ images, mainImage, alt, className = '' }: ImageCarouselProps) {
  const allImages = [mainImage, ...images];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  const goToNext = useCallback(() => {
    if (isTransitioning || allImages.length <= 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % allImages.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [allImages.length, isTransitioning]);

  const goToPrev = useCallback(() => {
    if (isTransitioning || allImages.length <= 1) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
    setTimeout(() => setIsTransitioning(false), 300);
  }, [allImages.length, isTransitioning]);

  const goToIndex = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 300);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrev();
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (!containerRef.current || allImages.length <= 1) return;
    const rect = containerRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;

    if (clickX < width / 3) {
      goToPrev();
    } else if (clickX > (width * 2) / 3) {
      goToNext();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrev();
      if (e.key === 'ArrowRight') goToNext();
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('keydown', handleKeyDown as any);
    }

    return () => {
      if (container) {
        container.removeEventListener('keydown', handleKeyDown as any);
      }
    };
  }, [goToNext, goToPrev]);

  if (allImages.length === 0) return null;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden cursor-pointer select-none ${className}`}
      onClick={handleClick}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      tabIndex={0}
      role="region"
      aria-label="Image carousel"
      data-testid="image-carousel"
    >
      <div className="relative w-full h-full">
        {allImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
              index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <img
              src={image}
              alt={`${alt} - structural steel project image ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              draggable={false}
            />
          </div>
        ))}
      </div>

      {allImages.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-all duration-200"
            aria-label="Previous image"
            data-testid="carousel-prev"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center text-white transition-all duration-200"
            aria-label="Next image"
            data-testid="carousel-next"
          >
            <ChevronRight size={24} />
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
            {allImages.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  goToIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentIndex
                    ? 'bg-white w-4'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to image ${index + 1}`}
                data-testid={`carousel-dot-${index}`}
              />
            ))}
          </div>

          <div className="absolute top-3 right-3 z-20 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
            {currentIndex + 1} / {allImages.length}
          </div>
        </>
      )}
    </div>
  );
}

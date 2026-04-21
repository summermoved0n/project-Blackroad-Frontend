import React from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function EmblaCarousel({
  children,
}: {
  children: React.ReactNode;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  return (
    <div className="embla">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex md:gap-5 touch-pan-y touch-pinch-zoom">
          {children}{" "}
        </div>
      </div>

      <div>
        <button onClick={goToPrev}>Prev</button>
        <button onClick={goToNext}>Next</button>
      </div>
    </div>
  );
}

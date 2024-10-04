"use client";
import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

const CarouselContext = React.createContext(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      autoplayInterval = 3000, // Added autoplay interval
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );

    const onSelect = React.useCallback((api) => {
      if (!api) {
        return;
      }
    }, []);

    // Autoplay implementation
    React.useEffect(() => {
      let autoplay;
      if (api) {
        autoplay = setInterval(() => {
          api.scrollNext();
        }, autoplayInterval); // Automatically slide every 3 seconds

        api.on("select", onSelect); // Handle manual interactions (reset timer)
      }

      return () => {
        clearInterval(autoplay); // Cleanup on unmount
      };
    }, [api, autoplayInterval, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        }}
      >
        <div
          ref={ref}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef(
  ({ className, index, totalSlides, selectedIndex, ...props }, ref) => {
    const { orientation } = useCarousel();

    const scaleFactor = index === selectedIndex ? "scale-110" : "scale-75";
    const opacityFactor =
      index === selectedIndex ? "opacity-100" : "opacity-50";
    const zIndex = index === selectedIndex ? "z-10" : "z-0";

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-1/3", // Show 3 slides at once
          orientation === "horizontal" ? "pl-4" : "pt-4",
          `${scaleFactor} ${opacityFactor} ${zIndex} transition-transform duration-500 ease-in-out`, // Transform properties
          className
        )}
        {...props}
      />
    );
  }
);
CarouselItem.displayName = "CarouselItem";

export { Carousel, CarouselContent, CarouselItem };

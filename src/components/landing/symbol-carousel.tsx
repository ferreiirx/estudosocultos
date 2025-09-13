"use client";
import React from 'react';
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function SymbolCarousel() {
  const symbolImages = PlaceHolderImages.filter(img => img.id.startsWith('symbol-carousel'));

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const scrollTo = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  return (
    <section className="w-full py-24 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-2xl md:text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-purple-400 text-gradient">
          Aposto que você já viu esses símbolos...
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          ...nomes e imagens, mas nunca soube o real significado.
        </p>
        <Carousel
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {symbolImages.map((image) => (
              <CarouselItem key={image.id} className="basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={500}
                    height={300}
                    data-ai-hint={image.imageHint}
                    className="rounded-lg object-cover aspect-video"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>

        <div className="py-4 flex justify-center gap-2">
            {Array.from({ length: count }).map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-2 w-2 rounded-full transition-all ${current -1 === i ? 'w-4 bg-primary' : 'bg-primary/50'}`}
              />
            ))}
        </div>
      </div>
    </section>
  );
}

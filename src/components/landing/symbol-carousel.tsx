"use client";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function SymbolCarousel() {
  const symbolImages = PlaceHolderImages.filter(img => img.id.startsWith('symbol-carousel'));

  return (
    <section className="w-full py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-2xl md:text-4xl font-bold text-foreground mb-4">
          Aposto que você já viu esses símbolos...
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
          ...nomes e imagens, mas nunca soube o real significado.
        </p>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {symbolImages.map((image) => (
              <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3">
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
        </Carousel>
      </div>
    </section>
  );
}

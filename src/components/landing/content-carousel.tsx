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
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export function ContentCarouselSection() {
  const carouselImages = PlaceHolderImages.filter(img => img.id.startsWith('carousel-'));

  return (
    <section className="w-full py-24 md:py-32 bg-card/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-accent text-gradient">
          Veja o que você vai encontrar dentro do Caderno de Cura
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          📖 Mais de 153 páginas de conteúdo transformador
        </p>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2500,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {carouselImages.map((image) => (
              <CarouselItem key={image.id} className="basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={400}
                    height={500}
                    data-ai-hint={image.imageHint}
                    className="rounded-lg shadow-lg w-full object-cover aspect-[4/5]"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
          <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
        </Carousel>
      </div>
    </section>
  );
}
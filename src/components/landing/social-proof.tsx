"use client";
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

export function SocialProofSection() {
  const starsImage = PlaceHolderImages.find(img => img.id === 'social-proof-stars');
  const testimonialImages = PlaceHolderImages.filter(img => img.id.startsWith('testimonial-'));

  return (
    <section className="w-full py-24 md:py-32 bg-card/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-accent text-gradient">
          Junte-se a mais de 14.000 Mentes Despertas
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Veja o que nossos leitores estão dizendo.
        </p>
        {starsImage && (
          <div className="flex justify-center mb-12">
            <Image
              src={starsImage.imageUrl}
              alt={starsImage.description}
              width={300}
              height={50}
              data-ai-hint={starsImage.imageHint}
            />
          </div>
        )}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: false,
            }),
          ]}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonialImages.map((image) => (
              <CarouselItem key={image.id} className="basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={400}
                    height={450}
                    data-ai-hint={image.imageHint}
                    className="rounded-lg shadow-lg w-full object-contain"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
}

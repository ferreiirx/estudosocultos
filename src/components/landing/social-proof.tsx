"use client";
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, useCarousel } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from '@/lib/utils';

const testimonials = [
  {
    quote: "Em 21 dias de prática, senti uma transformação que anos de terapia não conseguiram. O caderno vai realmente fundo nas raízes emocionais.",
    name: "Marina Silva",
    role: "Mãe e Doméstica",
    avatar: "MS"
  },
  {
    quote: "Consegui romper padrões familiares que me limitavam há décadas. Meus relacionamentos e até minha relação com dinheiro mudaram completamente.",
    name: "Ana Beatriz",
    role: "Empresária",
    avatar: "AB"
  },
  {
    quote: "Como profissional da área, posso afirmar: este caderno é uma ferramenta poderosa. Uso tanto para mim quanto recomendo para meus pacientes.",
    name: "Carla Mendes",
    role: "Mãe e Psicóloga",
    avatar: "CM"
  }
];

export function SocialProofSection() {
  
  function CarouselDots() {
    const { api } = useCarousel();
    const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);
    const [selectedIndex, setSelectedIndex] = React.useState(0);

    React.useEffect(() => {
      if (!api) return;
      setScrollSnaps(api.scrollSnapList());
      const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
      api.on("select", onSelect);
      api.on("reInit", onSelect);
      onSelect(); // Set initial state
      return () => {
        api.off("select", onSelect);
      };
    }, [api]);

    return (
      <div className="flex justify-center items-center gap-2 mt-8">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={cn(
              "h-1.5 rounded-full transition-all duration-300",
              index === selectedIndex ? "w-8 bg-primary" : "w-3 bg-primary/50"
            )}
            aria-label={`Ir para o slide ${index + 1}`}
          />
        ))}
      </div>
    );
  }

  return (
    <section className="w-full py-24 md:py-32 bg-card/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-12 bg-gradient-to-r from-primary to-accent text-gradient">
          Veja o que dizem sobre o Caderno de Cura com Ho’oponopono:
        </h2>
        <Carousel
          opts={{ align: "start", loop: true }}
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: false, 
              stopOnMouseEnter: true,
            }),
          ]}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="bg-card/70 border-primary/20 text-left p-6 h-full flex flex-col">
                  <CardContent className="p-0 flex flex-col flex-grow">
                    <p className="text-muted-foreground mb-6 flex-grow">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <Avatar>
                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-bold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-primary">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselDots />
        </Carousel>
      </div>
    </section>
  );
}
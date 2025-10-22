import Image from "next/image";
import { CtaButton } from './cta-button';
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === 'hero-book');

  return (
    <section className="relative w-full py-20 md:py-32 text-center">
      <div className="container mx-auto px-4 z-10">
        <h2 className="font-headline text-2xl md:text-3xl font-bold text-primary mb-4">
          Sistema Único de Limpeza em Camadas
        </h2>
        <h1 className="font-headline text-4xl md:text-6xl font-bold text-foreground mb-6 max-w-4xl mx-auto">
          CADERNO DE CURA
          <span className="text-accent"> COM HO’OPONOPONO</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          Tem algo dentro de você pedindo por libertação?<br/>
          Este caderno é um espaço seguro para curar dores, romper ciclos e reencontrar sua paz interior.
        </p>
        
        {heroImage && (
          <div className="flex justify-center my-12">
            <Image 
              src={heroImage.imageUrl}
              alt={heroImage.description}
              width={600}
              height={400}
              data-ai-hint={heroImage.imageHint}
              className="rounded-lg shadow-2xl shadow-primary/20"
            />
          </div>
        )}
        
        <div className="mt-12">
          <a href="#oferta">
            <CtaButton>
              QUERO ME CURAR E PROSPERAR AGORA
            </CtaButton>
          </a>
        </div>
      </div>
    </section>
  );
}

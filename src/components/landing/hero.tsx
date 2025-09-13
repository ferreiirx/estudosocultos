import { WistiaPlayer } from './wistia-player';
import { CtaButton } from './cta-button';

export function HeroSection() {
  return (
    <section className="relative w-full py-20 md:py-32 text-center">
      <div className="container mx-auto px-4 z-10">
        <h1 className="font-headline text-3xl md:text-5xl font-bold text-foreground mb-6 max-w-4xl mx-auto">
          <span className="text-accent">🔓</span> ESTE LIVRO REVELA CONHECIMENTOS QUE FORAM OCULTOS DA HUMANIDADE POR MILÊNIOS...
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
          Assista agora e entenda por que mais de 14.000 pessoas já acessaram esse material secreto.
        </p>
        <WistiaPlayer />
        <div className="mt-12">
          <a href="#oferta">
            <CtaButton>
              QUERO ACESSAR O MATERIAL
            </CtaButton>
          </a>
        </div>
      </div>
    </section>
  );
}

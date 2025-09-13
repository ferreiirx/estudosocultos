import { CtaButton } from './cta-button';

export function CuriositySection() {
  return (
    <section className="w-full py-20 md:py-28 bg-background/80">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-2xl md:text-4xl font-bold text-foreground mb-10 max-w-3xl mx-auto">
          VOCÊ TEM CORAGEM DE DESCOBRIR TODA A VERDADE POR TRÁS DOS SÍMBOLOS E MISTÉRIOS DA MATRIX?
        </h2>
        <a href="#oferta">
          <CtaButton>
            QUERO ACESSAR O MATERIAL
          </CtaButton>
        </a>
      </div>
    </section>
  );
}

import { CtaButton } from './cta-button';

export function CuriositySection() {
  return (
    <section className="w-full py-24 md:py-32 bg-card/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-2xl md:text-4xl font-bold text-foreground mb-10 max-w-3xl mx-auto bg-gradient-to-r from-primary via-purple-400 to-accent text-gradient">
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

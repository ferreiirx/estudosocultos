import { CheckCircle2 } from "lucide-react";

export function AboutSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-card/20">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary to-accent text-gradient">
          O que é o Caderno de Cura com Ho’oponopono?
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          É um caderno terapêutico que une a sabedoria ancestral do Ho’oponopono ao <strong>Método SLC – Sistema de Limpeza em Camadas</strong>, criado para guiar você em um processo profundo de cura interior.
        </p>
        <p className="text-lg text-muted-foreground">
          Com práticas guiadas e escritas conscientes, ele ajuda a limpar memórias dolorosas, liberar bloqueios emocionais e reprogramar sua energia para manifestar uma nova realidade nas áreas financeira, amorosa e de saúde física e mental.
        </p>
      </div>
    </section>
  );
}

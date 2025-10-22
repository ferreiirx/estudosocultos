import { CheckCircle2 } from "lucide-react";

const items = [
  "Está cansado(a) de repetir padrões e quer uma transformação real",
  "Vive com ansiedade, tristeza, estresse ou sensação de estar travado(a)",
  "Deseja melhorar sua energia nos relacionamentos, no dinheiro e na saúde física e emocional",
  "Já conhece o Ho'oponopono e quer aprofundar",
  "Ou quer começar do zero, com uma ferramenta prática e acolhedora",
];

export function ForWhomSection() {
  return (
    <section className="w-full py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-headline text-center text-3xl md:text-4xl font-bold text-foreground mb-12 bg-gradient-to-r from-primary to-purple-400 text-gradient">
          É para você que:
        </h2>
        <ul className="space-y-6">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <CheckCircle2 className="h-7 w-7 text-accent mr-4 mt-1 flex-shrink-0" />
              <span className="text-xl text-muted-foreground">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

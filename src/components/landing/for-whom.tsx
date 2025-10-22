import { Zap, HeartPulse, Leaf, Sparkles, UserCheck } from "lucide-react";

const items = [
  { icon: Zap, text: "Está cansado(a) de repetir padrões e quer uma transformação real" },
  { icon: HeartPulse, text: "Vive com ansiedade, tristeza, estresse ou sensação de estar travado(a)" },
  { icon: Sparkles, text: "Deseja melhorar sua energia nos relacionamentos, no dinheiro e na saúde física e emocional" },
  { icon: Leaf, text: "Já conhece o Ho'oponopono e quer aprofundar" },
  { icon: UserCheck, text: "Ou quer começar do zero, com uma ferramenta prática e acolhedora" },
];

export function ForWhomSection() {
  return (
    <section className="w-full py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-headline text-center text-3xl md:text-4xl font-bold text-foreground mb-12 bg-gradient-to-r from-primary to-purple-400 text-gradient">
          É para você que:
        </h2>
        <ul className="space-y-8">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <div className="rounded-full bg-primary/20 p-3 mr-4">
                <item.icon className="h-6 w-6 text-primary" />
              </div>
              <span className="text-xl text-muted-foreground mt-2">{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

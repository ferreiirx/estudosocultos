import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const advantages = [
  "Desvende os segredos do universo e da existência.",
  "Expanda sua consciência e percepção da realidade.",
  "Aprenda a usar símbolos de poder para manifestar seus desejos.",
  "Entenda as leis herméticas que regem o universo.",
  "Conecte-se com sua verdadeira essência e propósito de vida.",
  "Domine a arte da Cabala e da numerologia.",
];

export function AdvantagesSection() {
  const image = PlaceHolderImages.find(img => img.id === 'advantages-image');

  return (
    <section className="w-full py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-8">
              O Que Você Irá Desbloquear
            </h2>
            <ul className="space-y-4">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-accent mr-3 mt-1 flex-shrink-0" />
                  <span className="text-lg text-muted-foreground">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center">
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={500}
                height={500}
                data-ai-hint={image.imageHint}
                className="rounded-lg shadow-2xl object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

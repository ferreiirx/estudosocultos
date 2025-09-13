import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { 
  Sparkles, 
  Sigma, 
  TreeDeciduous, 
  Magnet, 
  FlaskConical, 
  Shapes, 
  Users, 
  BrainCircuit 
} from "lucide-react";

const bookContents = [
  { text: "Os 7 Chakras e como ativá-los", icon: Sparkles },
  { text: "Símbolos sagrados e seu poder oculto", icon: Sigma },
  { text: "Introdução à Cabala e à Árvore da Vida", icon: TreeDeciduous },
  { text: "Princípios da Lei da Atração e Manifestação", icon: Magnet },
  { text: "Alquimia: A transformação da consciência", icon: FlaskConical },
  { text: "Geometria Sagrada e os padrões do universo", icon: Shapes },
  { text: "O poder dos arquétipos e do inconsciente coletivo", icon: Users },
  { text: "Técnicas de meditação para expansão da mente", icon: BrainCircuit },
];

export function BookContentSection() {
  const image = PlaceHolderImages.find(img => img.id === 'book-content-mockup');
  
  return (
    <section className="w-full py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center md:order-2">
            {image && (
              <Image
                src={image.imageUrl}
                alt={image.description}
                width={500}
                height={500}
                data-ai-hint={image.imageHint}
                className="object-contain"
              />
            )}
          </div>
          <div className="md:order-1">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-8 bg-gradient-to-r from-primary to-purple-400 text-gradient">
              Dentro do Portal da Mente
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bookContents.map((content, index) => (
                <div 
                  key={index} 
                  className="bg-gradient-to-br from-card/80 to-card/50 p-4 rounded-lg shadow-md hover:shadow-primary/20 border border-transparent hover:border-primary/30 transition-all flex items-center gap-4"
                >
                  <content.icon className="h-8 w-8 text-primary flex-shrink-0" />
                  <p className="font-semibold text-card-foreground">{content.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

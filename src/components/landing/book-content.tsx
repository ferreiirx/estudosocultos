import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const bookContents = [
  "Os 7 Chakras e como ativá-los",
  "Símbolos sagrados e seu poder oculto",
  "Introdução à Cabala e à Árvore da Vida",
  "Princípios da Lei da Atração e Manifestação",
  "Alquimia: A transformação da consciência",
  "Geometria Sagrada e os padrões do universo",
  "O poder dos arquétipos e do inconsciente coletivo",
  "Técnicas de meditação para expansão da mente",
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
                <div key={index} className="bg-card p-4 rounded-lg shadow-md hover:bg-card/70 transition-colors">
                  <p className="font-semibold text-card-foreground">{content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function GuaranteeSection() {
  const guaranteeImage = PlaceHolderImages.find(img => img.id === 'guarantee-image');

  return (
    <section className="w-full py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-card/50 p-8 rounded-lg border border-primary/20">
          <div className="flex justify-center">
            {guaranteeImage && (
              <Image 
                src={guaranteeImage.imageUrl} 
                alt={guaranteeImage.description}
                width={250} 
                height={250} 
                data-ai-hint={guaranteeImage.imageHint}
              />
            )}
          </div>
          <div className="text-center md:text-left">
            <h2 className="font-headline text-2xl md:text-3xl font-bold text-foreground mb-4">
              Sua Satisfação ou seu Dinheiro de Volta!
            </h2>
            <p className="text-lg text-muted-foreground">
              Queremos garantir ao máximo a sua satisfação, por isso oferecemos <strong>garantia de 30 dias</strong> para você decidir se vale a pena ou não. Caso decida que não vale a pena, basta entrar em contato conosco dentro desse prazo, e devolvemos 100% do seu dinheiro sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

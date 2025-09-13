import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function BonusSection() {
  const bonus1 = PlaceHolderImages.find(img => img.id === 'bonus-1-mockup');
  const bonus2 = PlaceHolderImages.find(img => img.id === 'bonus-2-mockup');
  const bonus3 = PlaceHolderImages.find(img => img.id === 'bonus-3-mockup');

  return (
    <section className="w-full py-24 md:py-32 bg-card/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-accent text-gradient">
          E ainda... 3 Bônus Exclusivos
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          Comprando hoje, você leva de graça esses materiais complementares.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-card/70 border-primary/20 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle>Bônus #1: Guia de Símbolos</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              {bonus1 && <Image src={bonus1.imageUrl} alt={bonus1.description} width={200} height={320} data-ai-hint={bonus1.imageHint} className="object-contain"/>}
            </CardContent>
          </Card>
          <Card className="bg-card/70 border-primary/20 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle>Bônus #2: Cheat Sheet Hermético</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              {bonus2 && <Image src={bonus2.imageUrl} alt={bonus2.description} width={250} height={320} data-ai-hint={bonus2.imageHint} className="object-contain"/>}
            </CardContent>
          </Card>
          <Card className="bg-card/70 border-primary/20 hover:border-primary/50 transition-all duration-300">
            <CardHeader>
              <CardTitle>Bônus #3: Chakras para Iniciantes</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
              {bonus3 && <Image src={bonus3.imageUrl} alt={bonus3.description} width={200} height={320} data-ai-hint={bonus3.imageHint} className="object-contain"/>}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

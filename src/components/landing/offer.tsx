import { CtaButton } from "./cta-button";
import { Badge } from "@/components/ui/badge";
import { Check, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const includedItems = [
  "Caderno de Cura com Ho'oponopono",
  "Caixa de Oráculos – Palavras que Curam",
  "Diário dos 21 Ciclos de Limpeza e Autocura",
  "Meditações Guiadas Ho'oponopono",
  "Cultivando Amor-Próprio com Ho'oponopono",
  "Biodescodificador Emocional com Palavras-Gatilho",
  "Caderno de Cura da Linhagem Familiar",
  "Mapa da Limpeza Energética dos Ambientes",
  "Manual dos Arcanjos com Ho'oponopono",
  "Desenhos Terapêuticos para Colorir"
];

export function OfferSection() {
  const offerImage = PlaceHolderImages.find(img => img.id === 'offer-image');

  return (
    <section id="oferta" className="w-full py-24 md:py-32">
      <div className="container mx-auto px-4">
        <Card className="relative max-w-4xl mx-auto bg-gradient-to-br from-card to-card/60 p-8 md:p-12 rounded-2xl shadow-2xl border-primary/50 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-primary/10 blur-[100px] -z-10"></div>
          <div className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-primary/20 blur-[150px] -z-10"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-accent/20 blur-[150px] -z-10"></div>
          
          <h2 className="font-headline text-center text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent text-gradient">
            Sua Transformação Começa Agora
          </h2>
          <p className="text-center text-lg text-muted-foreground mb-8">⏰ 80% DE DESCONTO HOJE</p>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              {offerImage && <Image src={offerImage.imageUrl} alt={offerImage.description} width={500} height={500} className="rounded-lg" />}
              <div className="bg-background/50 rounded-lg p-6 mt-8 border border-border">
                <h3 className="font-bold text-lg mb-4 text-center text-primary">Você vai receber:</h3>
                <ul className="space-y-2 text-sm">
                  {includedItems.map(item => (
                    <li key={item} className="flex items-center">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-center text-xs mt-4 text-muted-foreground">Material em PDF. Receba imediatamente em seu e-mail.</p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-muted-foreground text-xl line-through">Valor Total: R$149,50</p>
              <p className="text-foreground mt-4">PREÇO SOMENTE HOJE</p>
              <p className="text-accent my-2">
                <span className="text-4xl font-bold">5X</span>
                <span className="text-7xl font-bold">R$6,51</span>
              </p>
              <p className="text-foreground font-bold">Ou R$ 29,90 À Vista</p>
              
              <a href="https://pay.kirvano.com/06065cd0-04c2-424c-9b43-22da33267f86" className="block mt-8">
                <CtaButton className="w-full text-2xl">
                  QUERO ACESSO IMEDIATO
                </CtaButton>
              </a>
              <div className="flex justify-center items-center mt-6 text-muted-foreground text-sm">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-primary/80" />
                  <span>Compra Segura</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

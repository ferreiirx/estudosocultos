import { CtaButton } from "./cta-button";
import { Badge } from "@/components/ui/badge";
import { Check, Lock, Rocket, ShieldCheck } from "lucide-react";
import { Card } from "@/components/ui/card";

const includedItems = [
  "Livro Digital 'O Portal da Mente'",
  "Bônus #1: Guia de Símbolos",
  "Bônus #2: Cheat Sheet Hermético",
  "Bônus #3: Chakras para Iniciantes",
];

export function OfferSection() {
  return (
    <section id="oferta" className="w-full py-20 md:py-28">
      <div className="container mx-auto px-4">
        <Card className="relative max-w-3xl mx-auto bg-gradient-to-br from-card to-card/60 p-8 rounded-2xl shadow-2xl border-primary/50 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-primary/10 blur-[100px] -z-10"></div>
           <div className="absolute -top-1/2 -right-1/2 w-full h-full rounded-full bg-primary/20 blur-[150px] animate-pulse -z-10"></div>
           <div className="absolute -bottom-1/2 -left-1/2 w-full h-full rounded-full bg-accent/20 blur-[150px] animate-pulse animation-delay-3000 -z-10"></div>
          
          <h2 className="font-headline text-center text-3xl md:text-4xl font-bold text-foreground mb-4">
            Oferta Especial por Tempo Limitado
          </h2>
          <div className="text-center mb-6">
            <p className="text-muted-foreground text-xl line-through">De R$97,00</p>
            <p className="text-foreground">por apenas</p>
            <p className="text-5xl md:text-7xl font-bold text-accent my-2">R$19,90</p>
            <Badge variant="secondary" className="border-accent/50 bg-accent/10 text-accent">Acesso Vitalício</Badge>
          </div>
          <div className="bg-background/50 rounded-lg p-6 mb-8 border border-border">
            <h3 className="font-bold text-lg mb-4 text-center">Você vai receber:</h3>
            <ul className="space-y-3">
              {includedItems.map(item => (
                <li key={item} className="flex items-center">
                  <Check className="h-5 w-5 text-green-500 mr-3" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <CtaButton className="w-full text-2xl">
            QUERO TER ACESSO!
          </CtaButton>
          <div className="flex justify-around items-center mt-8 text-muted-foreground text-sm flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary/80" />
              <span>Compra Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-primary/80" />
              <span>Acesso Imediato</span>
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-5 w-5 text-primary/80" />
              <span>Garantia de 7 dias</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}

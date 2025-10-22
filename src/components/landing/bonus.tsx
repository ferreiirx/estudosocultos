import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const bonuses = [
  { id: 'bonus-1', title: 'Manual dos Arcanjos com Ho’oponopono', description: 'Conecte-se com os 7 arcanjos usando palavras-gatilho, visualizações e práticas espirituais. Um ritual de luz e proteção.' },
  { id: 'bonus-2', title: 'Cultivando Amor-Próprio com Ho’oponopono', description: 'Um guia para abandonar o julgamento, o autoabandono e reconectar com o seu valor pessoal.' },
  { id: 'bonus-3', title: 'Biodescodificador Emocional com Palavras-Gatilho', description: 'Descubra a raiz emocional dos seus sintomas físicos e aprenda como limpá-los com Ho’oponopono de forma prática e compassiva.' },
  { id: 'bonus-4', title: 'Caderno de Cura da Linhagem Familiar', description: 'Exercícios e cartas de perdão para soltar padrões herdados e memórias da sua ancestralidade. Liberte-se da dor que não começou com você.' },
  { id: 'bonus-5', title: 'Mapa da Limpeza Energética dos Ambientes', description: 'Um guia rápido e poderoso para aplicar o Ho’oponopono em sua casa. Limpe a energia dos espaços, crie rituais simples e transforme o lugar onde você vive em um templo de paz.' },
  { id: 'bonus-6', title: 'Caixa de Oráculos – Palavras que Curam', description: 'Uma palavra gatilho + uma mensagem amorosa para te orientar no seu momento. Basta tirar uma carta por dia e deixar que a cura comece.' },
  { id: 'bonus-7', title: 'Diário dos 21 Ciclos de Limpeza e Autocura', description: 'Cada página foi pensada para conduzir sua escrita emocional e desbloquear fardos escondidos com delicadeza e profundidade.' },
  { id: 'bonus-8', title: 'Meditações Guiadas Ho’oponopono', description: 'Para curar feridas e atrair o que você deseja: 💰 Dinheiro | ❤️ Relacionamentos | 🧠 Saúde mental e física | 🕊️ Paz interior' },
  { id: 'bonus-9', title: 'Desenhos Terapêuticos para Colorir', description: 'Ative o poder da cura criativa. 50 ilustrações com palavras de limpeza para meditar, relaxar e transformar emoções pela arte.' },
];

export function BonusSection() {
  const bonusImages = PlaceHolderImages.filter(img => img.id.startsWith('bonus-'));

  return (
    <section className="w-full py-24 md:py-32 bg-card/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-accent text-gradient">
          <span className="text-foreground">🎁 </span>9 BÔNUS EXCLUSIVOS
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          O que você ganha HOJE
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {bonuses.map(bonus => {
            const image = bonusImages.find(img => img.id === bonus.id);
            return (
              <Card key={bonus.id} className="bg-card/70 border-primary/20 hover:border-primary/50 transition-all duration-300 flex flex-col text-center">
                <CardHeader className="items-center p-4">
                  {image && <Image src={image.imageUrl} alt={bonus.title} width={250} height={250} data-ai-hint={image.imageHint} className="rounded-t-lg object-cover aspect-square"/>}
                </CardHeader>
                <CardContent className="flex-grow p-4">
                  <CardTitle className="text-xl mb-2">{bonus.title}</CardTitle>
                  <CardDescription>{bonus.description}</CardDescription>
                </CardContent>
                <CardFooter className="justify-center p-4">
                  <Badge variant="secondary">INCLUSO GRATUITAMENTE</Badge>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

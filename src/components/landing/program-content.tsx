import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const phases = [
  {
    phase: "FASE 1",
    title: "DESPERTAR DA CONSCIÊNCIA",
    description: "Entenda o que te bloqueia, e prepare o terreno da cura.",
    items: [
      "Boas-vindas: criando seu espaço sagrado de transformação",
      "Como usar o Caderno",
      "Como surgem as memórias dolorosas e como elas moldam sua realidade",
      "O que é Ho’oponopono e como ele atua nas suas memórias",
      "As 4 frases sagradas: o poder por trás",
      "O que é o Método SLC – Sistema de Limpeza em Camadas",
      "As 3 Camadas da Cura: Superficial, Recorrente e Profunda",
      "Diagnóstico da Dor: Qual é a sua Camada?"
    ]
  },
  {
    phase: "FASE 2",
    title: "LIMPEZA SUPERFICIAL",
    description: "Aliviando as dores do agora. Libere tensões visíveis e padrões recentes.",
    items: [
      "Ativando palavras-gatilho com intenção de cura real",
      "Rituais diários para liberar cargas emocionais",
      "Cura da ansiedade, culpa e sobrecarga",
      "Cura de Conflitos e Mágoas Familiares",
      "Primeiras Liberações: Lidando com Ansiedade, Irritação e Culpa",
      "Ferramentas do SLC e Ho’oponopono: Como Acelerar a Liberação"
    ]
  },
  {
    phase: "FASE 3",
    title: "LIMPEZA RECORRENTE",
    description: "Curando padrões que se repetem. Acesse raízes profundas, traumas e feridas invisíveis.",
    items: [
      "Cura da Criança Interior e Segurança Emocional",
      "Contratos emocionais inconscientes: por que você repete as mesmas histórias?",
      "Perdão profundo e libertador: Soltando o que prende seu coração",
      "Liberando karma, culpa ancestral e peso do passado",
      "Trabalhando o luto, a saudade e a dor da perda",
      "Curando dor física com fundo emocional",
      "Aliviando tensão mental e harmonizando a saúde vibracional"
    ]
  },
  {
    phase: "FASE 4",
    title: "LIMPEZA PROFUNDA",
    description: "Vibrando em uma nova frequência. Crie espaço para uma nova vibração em sua vida.",
    items: [
      "Curando e desbloqueando os chakras",
      "Limpeza dos Chakras",
      "Reorganizando sua vida com consciência vibracional",
      "Desbloqueio da Abundância com Palavras-Gatilho",
      "Reconstruindo sua Relação com o Dinheiro e o Merecimento",
      "Cura de Relacionamentos Amorosos (mesmo à distância ou após término)",
      "Criando Nova Realidade com Intenção (Relacionamento, Finanças, Saúde e Tudo aquilo que deseja)"
    ]
  },
  {
    phase: "FASE 5",
    title: "INTEGRAÇÃO E RENASCIMENTO",
    description: "Sua nova versão: mais leve, conectada e em paz.",
    items: [
      "Como manter o Método SLC e o Ho’oponopono no dia a dia",
      "O que fazer caso apareçam obstáculos, dúvidas e recaídas",
      "Oração de abertura para sua nova versão",
      "DESAFIO PRÁTICO: Consolidando sua Nova Versão"
    ]
  }
];

export function ProgramContentSection() {
  return (
    <section className="w-full py-24 md:py-32">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-4 bg-gradient-to-r from-primary to-accent text-gradient">
            Conteúdo Programático
          </h2>
          <p className="text-lg text-muted-foreground">Com o Método SLC – Sistema de Limpeza em Camadas</p>
          <p className="text-lg text-muted-foreground mt-2">🌱 5 fases de transformação emocional</p>
        </div>
        <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-4">
          {phases.map((phase, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="bg-card/50 rounded-lg border-primary/20 px-6">
              <AccordionTrigger className="text-lg text-left hover:no-underline">
                <div className="flex flex-col md:flex-row md:items-center gap-4 text-left">
                  <Badge variant="secondary" className="bg-primary/20 text-primary whitespace-nowrap h-fit">{phase.phase}</Badge>
                  <div>
                    <h3 className="font-bold text-xl text-foreground">{phase.title}</h3>
                    <p className="text-sm text-muted-foreground font-normal">{phase.description}</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                <ul className="list-decimal list-inside pl-5 space-y-2 mt-2">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="text-center mt-12">
          <h3 className="font-headline text-2xl md:text-3xl font-bold text-foreground">
            Transformação Completa em 5 Fases
          </h3>
          <p className="text-lg text-muted-foreground mt-2">
            Um método progressivo que te leva do sofrimento à liberdade, da confusão à clareza, da dor à paz interior duradoura.
          </p>
        </div>
      </div>
    </section>
  );
}

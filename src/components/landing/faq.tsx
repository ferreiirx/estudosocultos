import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como vou receber o Caderno?",
    answer: "Assim que seu pagamento for aprovado, você receberá em até 5 minutos um e-mail com o nome ImperiumPay para acessar nossa área de membros com todo conteúdo."
  },
  {
    question: "Posso acessar o material pelo celular?",
    answer: "Sim, e você consegue acessar todo material pelo celular, tablet ou computador."
  },
  {
    question: "Tem garantia?",
    answer: "Sim, queremos garantir o máximo sua satisfação, por isso oferecemos garantia de 30 dias."
  },
  {
    question: "O Pagamento é seguro?",
    answer: "Sim, o pagamento é processado e aprovado pela ImperiumPay, uma das maiores plataformas de infoprodutos."
  },
  {
    question: "Não estou achando o e-mail com os dados de acesso, o que eu faço?",
    answer: "As caixas de e-mail têm abas que distinguem os remetentes prioritários dos eventuais. O e-mail de acesso pode ter ido parar nessas caixas ou na caixa de spam (lixo eletrônico). Procure pelo remetente “ImperiumPay” para achar suas informações de acesso."
  },
  {
    question: "Porque o Diário tem um valor tão baixo?",
    answer: "A missão da produtora, bem como de sua equipe é levar um MATERIAL de QUALIDADE para o MAIOR número de pessoas possível para que todas elas consigam sair de uma vida estagnada e se CURAR para finalmente PROSPERAR. Entendemos que muitas pessoas que estão estagnadas não possuem condições financeiras para investir em cursos e mentorias."
  }
];

export function FaqSection() {
  return (
    <section className="w-full py-24 md:py-32 bg-card/20">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-headline text-center text-3xl md:text-4xl font-bold text-foreground mb-12 bg-gradient-to-r from-primary to-accent text-gradient">
          Perguntas Frequentes
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index} className="border-b border-primary/20">
              <AccordionTrigger className="text-lg text-left hover:no-underline">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

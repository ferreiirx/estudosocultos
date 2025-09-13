import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqAi } from "./faq-ai";

const faqs = [
  {
    question: "Como vou recebê-lo?",
    answer: "Imediatamente após o pagamento, você receberá automaticamente os detalhes de acesso em seu e-mail cadastrado em poucos minutos."
  },
  {
    question: "Quanto tempo levará para receber meu acesso?",
    answer: "Imediatamente. Assim que seu pagamento for aprovado, você receberá seus dados de login no e-mail de compra e poderá iniciar seus estudos imediatamente."
  },
  {
    question: "O pagamento é único?",
    answer: "Sim! Pagamento único, sem custos adicionais."
  },
  {
    question: "Onde entro em contato com o suporte?",
    answer: "Você pode enviar uma mensagem para nosso suporte via Whatsapp."
  },
  {
    question: "Posso imprimir meu livro?",
    answer: "Sim, todo o nosso material é compatível com impressão."
  }
];

export function FaqSection() {
  return (
    <section className="w-full py-20 md:py-28 bg-background/80">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="font-headline text-center text-3xl md:text-4xl font-bold text-foreground mb-12">
          Perguntas Frequentes
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <FaqAi />
      </div>
    </section>
  );
}

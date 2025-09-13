'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { answerQuestion } from '@/ai/flows/faq-gen-ai';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const formSchema = z.object({
  question: z.string().min(10, { message: 'Por favor, faça uma pergunta mais detalhada.' }),
});

export function FaqAi() {
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      question: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setAnswer('');
    try {
      const result = await answerQuestion({ question: values.question });
      setAnswer(result.answer);
    } catch (error) {
      console.error(error);
      toast({
        title: 'Erro',
        description: 'Não foi possível obter uma resposta. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="mt-8 border-t border-border/50 pt-8">
      <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
        <Wand2 className="text-accent" />
        Ainda tem dúvidas? Pergunte à nossa IA
      </h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-start gap-2 mb-4">
          <FormField
            control={form.control}
            name="question"
            render={({ field }) => (
              <FormItem className="flex-grow">
                <FormControl>
                  <Input placeholder="Qual é a sua pergunta sobre o livro?" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? <Loader2 className="animate-spin" /> : 'Perguntar'}
          </Button>
        </form>
      </Form>
      {isLoading && (
         <div className="flex items-center gap-2 text-muted-foreground p-4 bg-card rounded-lg">
            <Loader2 className="animate-spin" />
            <span>Nossa inteligência mística está consultando os astros...</span>
        </div>
      )}
      {answer && (
        <Card className="bg-primary/10">
          <CardContent className="p-4">
            <p className="text-foreground">{answer}</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

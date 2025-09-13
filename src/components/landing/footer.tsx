export function Footer() {
  return (
    <footer className="w-full py-12 bg-background text-muted-foreground">
      <div className="container mx-auto px-4 text-center text-sm">
        <div className="flex justify-center gap-4 mb-6">
          <a href="#" className="hover:text-foreground">Política de Privacidade</a>
          <span>|</span>
          <a href="#" className="hover:text-foreground">Termos de Uso</a>
        </div>
        <p className="mb-4 max-w-2xl mx-auto">
          Aviso Legal: Este produto não garante a obtenção de resultados. Qualquer referência ao desempenho de uma estratégia não deve ser interpretada como uma garantia de resultados.
        </p>
        <p>
          Copyright 2025 – Todos os direitos reservados a "O Portal da Mente".
        </p>
      </div>
    </footer>
  );
}

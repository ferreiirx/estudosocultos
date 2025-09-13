export function StorySection() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-background/80 overflow-hidden">
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="mx-auto h-[200px] w-[90%] max-w-4xl rounded-full bg-primary/40 opacity-30 blur-[120px]"></div>
      </div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground mb-6">
          <span className="text-primary">🧿</span> OS SÍMBOLOS CONTAM UMA HISTÓRIA...
        </h2>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          ...mas ninguém ensinou você a ler.
        </p>
        <p className="text-lg md:text-xl text-foreground mb-8">Você já viu estes?</p>
        <p className="text-4xl md:text-6xl tracking-widest mb-12 space-x-4 text-primary/80">
          <span>☥</span>
          <span>✡</span>
          <span>☯</span>
          <span>🕉️</span>
          <span>☸️</span>
          <span>♈</span>
        </p>
        <div className="max-w-3xl mx-auto space-y-6 text-lg text-foreground/90">
           <p>Eles não são aleatórios. São <strong className="text-primary">mapas criptografados</strong> com informações ocultas sobre o <strong className="text-primary">TODO</strong>, sobre <strong className="text-primary">DEUS</strong>, sobre <strong className="text-primary">VOCÊ</strong>.</p>
           <p>Nenhum símbolo é por acaso. Nenhuma palavra é em vão.</p>
           <div className="space-y-2 font-mono tracking-wider text-left bg-card/50 p-6 rounded-lg border border-border max-w-md mx-auto">
              <p>Tele<span className="text-red-500">LIE</span>vision (tele-MENTIRA-visão)</p>
              <p>Govern<span className="text-red-500">MENT</span> (controle da MENTE)</p>
              <p>Enter<span className="text-red-500">TAIN</span>ment (prender sua MENTE)</p>
              <p>Civil<span className="text-red-500">LIE</span>zation (civil-MENTIRA-nação)</p>
           </div>
        </div>
      </div>
    </section>
  );
}

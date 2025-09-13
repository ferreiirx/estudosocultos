export function StorySection() {
  return (
    <section className="relative w-full py-24 md:py-32 bg-card/20 overflow-hidden">
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="mx-auto h-[250px] w-[90%] max-w-5xl rounded-full bg-primary/40 opacity-25 blur-[120px]"></div>
      </div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary via-purple-400 to-accent text-gradient">
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
           <p>Eles não são aleatórios. São <strong className="text-primary font-bold">mapas criptografados</strong> com informações ocultas sobre o <strong className="text-primary font-bold">TODO</strong>, sobre <strong className="text-primary font-bold">DEUS</strong>, sobre <strong className="text-primary font-bold">VOCÊ</strong>.</p>
           <p>Nenhum símbolo é por acaso. Nenhuma palavra é em vão.</p>
           <div className="space-y-4 font-mono tracking-wider text-left bg-card/50 p-6 rounded-lg border border-border max-w-md mx-auto text-lg">
              <p>
                <span className="text-foreground/70">Tele</span>
                <span className="font-bold bg-gradient-to-r from-red-500 to-red-400 text-gradient">LIE</span>
                <span className="text-foreground/70">vision (tele-</span>
                <span className="font-bold bg-gradient-to-r from-red-500 to-red-400 text-gradient">MENTIRA</span>
                <span className="text-foreground/70">-visão)</span>
              </p>
              <p>
                <span className="text-foreground/70">Govern</span>
                <span className="font-bold bg-gradient-to-r from-purple-400 to-primary text-gradient">MENT</span>
                <span className="text-foreground/70"> (controle da </span>
                <span className="font-bold bg-gradient-to-r from-purple-400 to-primary text-gradient">MENTE</span>
                <span className="text-foreground/70">)</span>
              </p>
              <p>
                <span className="text-foreground/70">Enter</span>
                <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-gradient">TAIN</span>
                <span className="text-foreground/70">ment (prender sua </span>
                 <span className="font-bold bg-gradient-to-r from-purple-400 to-primary text-gradient">MENTE</span>
                <span className="text-foreground/70">)</span>
              </p>
              <p>
                <span className="text-foreground/70">Civil</span>
                <span className="font-bold bg-gradient-to-r from-red-500 to-red-400 text-gradient">LIE</span>
                <span className="text-foreground/70">zation (civil-</span>
                <span className="font-bold bg-gradient-to-r from-red-500 to-red-400 text-gradient">MENTIRA</span>
                <span className="text-foreground/70">-nação)</span>
              </p>
           </div>
        </div>
      </div>
    </section>
  );
}

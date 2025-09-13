export function StorySection() {
  return (
    <section className="relative w-full overflow-hidden bg-card/20 py-24 md:py-32">
      <div className="absolute inset-0 -z-10 flex items-center justify-center">
        <div className="mx-auto h-[250px] w-[90%] max-w-5xl rounded-full bg-primary/40 opacity-25 blur-[120px]"></div>
      </div>
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl font-bold text-foreground md:text-5xl mb-6 bg-gradient-to-r from-primary via-purple-400 to-accent text-gradient">
          <span className="text-primary">🧿</span> OS SÍMBOLOS CONTAM UMA
          HISTÓRIA...
        </h2>
        <p className="text-xl text-muted-foreground md:text-2xl mb-8">
          ...mas ninguém ensinou você a ler.
        </p>
        <p className="text-lg text-foreground md:text-xl mb-8">
          Você já viu estes?
        </p>
        <p className="space-x-4 text-4xl tracking-widest md:text-6xl mb-12 text-primary/80">
          <span>☥</span>
          <span>✡</span>
          <span>☯</span>
          <span>🕉️</span>
          <span>☸️</span>
          <span>♈</span>
        </p>
        <div className="mx-auto max-w-3xl space-y-6 text-lg text-foreground/90">
          <p>
            Eles não são aleatórios. São{' '}
            <strong className="font-bold text-primary">
              mapas criptografados
            </strong>{' '}
            com informações ocultas sobre o{' '}
            <strong className="font-bold text-primary">TODO</strong>, sobre{' '}
            <strong className="font-bold text-primary">DEUS</strong>, sobre{' '}
            <strong className="font-bold text-primary">VOCÊ</strong>.
          </p>
          <p>Nenhum símbolo é por acaso. Nenhuma palavra é em vão.</p>
          <div className="mx-auto max-w-md space-y-4 rounded-lg border border-border bg-card/50 p-6 text-left font-mono text-lg tracking-wider">
            <p>
              <span className="text-foreground/70">Tele</span>
              <span className="font-bold bg-gradient-to-r from-red-500 to-red-400 text-gradient">
                LIE
              </span>
              <span className="text-foreground/70">vision (tele-</span>
              <span className="font-bold bg-gradient-to-r from-red-500 to-red-400 text-gradient">
                MENTIRA
              </span>
              <span className="text-foreground/70">-visão)</span>
            </p>
            <p>
              <span className="font-bold bg-gradient-to-r from-purple-400 to-primary text-gradient">
                GOVERN
              </span>
              <span className="text-foreground/70">ment (</span>
              <span className="font-bold bg-gradient-to-r from-purple-400 to-primary text-gradient">
                CONTROLE
              </span>
              <span className="text-foreground/70"> da mente)</span>
            </p>
            <p>
              <span className="text-foreground/70">Enter</span>
              <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-gradient">
                TAIN
              </span>
              <span className="text-foreground/70">ment (</span>
              <span className="font-bold bg-gradient-to-r from-cyan-400 to-blue-500 text-gradient">
                PRENDER
              </span>
              <span className="text-foreground/70"> sua mente)</span>
            </p>
            <p>
              <span className="text-foreground/70">Civil</span>
              <span className="font-bold bg-gradient-to-r from-red-500 to-red-400 text-gradient">
                LIE
              </span>
              <span className="text-foreground/70">zation (civil-</span>
              <span className="font-bold bg-gradient-to-r from-red-500 to-red-400 text-gradient">
                MENTIRA
              </span>
              <span className="text-foreground/70">-nação)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

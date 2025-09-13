import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function StorySection() {
  const image = PlaceHolderImages.find(img => img.id === 'story-luminous-rock');

  return (
    <section className="w-full py-20 md:py-28 bg-background/80">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-headline text-3xl md:text-5xl font-bold text-foreground mb-8">
          OS SÍMBOLOS CONTAM UMA HISTÓRIA...
        </h2>
        <p className="text-4xl md:text-6xl tracking-widest mb-12 space-x-4">
          <span>☥</span>
          <span>✡</span>
          <span>☯</span>
          <span>🕉️</span>
          <span>☸️</span>
          <span>♈</span>
        </p>
        {image && (
          <Image
            src={image.imageUrl}
            alt={image.description}
            width={150}
            height={150}
            data-ai-hint={image.imageHint}
            className="mx-auto rounded-full shadow-lg shadow-primary/40"
          />
        )}
      </div>
    </section>
  );
}

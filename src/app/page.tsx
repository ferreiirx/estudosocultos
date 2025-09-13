import { HeroSection } from '@/components/landing/hero';
import { CuriositySection } from '@/components/landing/curiosity';
import { SymbolCarousel } from '@/components/landing/symbol-carousel';
import { StorySection } from '@/components/landing/story';
import { AdvantagesSection } from '@/components/landing/advantages';
import { SocialProofSection } from '@/components/landing/social-proof';
import { BookContentSection } from '@/components/landing/book-content';
import { BonusSection } from '@/components/landing/bonus';
import { OfferSection } from '@/components/landing/offer';
import { FaqSection } from '@/components/landing/faq';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800c_1px,transparent_1px),linear-gradient(to_bottom,#8080800c_1px,transparent_1px)] bg-[size:36px_36px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[550px] w-[550px] rounded-full bg-primary/20 opacity-30 blur-[120px]"></div>
      </div>
      <main className="w-full">
        <HeroSection />
        <CuriositySection />
        <SymbolCarousel />
        <StorySection />
        <AdvantagesSection />
        <SocialProofSection />
        <BookContentSection />
        <BonusSection />
        <OfferSection />
        <FaqSection />
        <Footer />
      </main>
    </div>
  );
}

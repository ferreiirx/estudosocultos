import { HeroSection } from '@/components/landing/hero';
import { AboutSection } from '@/components/landing/about';
import { ForWhomSection } from '@/components/landing/for-whom';
import { ContentCarouselSection } from '@/components/landing/content-carousel';
import { ProgramContentSection } from '@/components/landing/program-content';
import { BonusSection } from '@/components/landing/bonus';
import { OfferSection } from '@/components/landing/offer';
import { SocialProofSection } from '@/components/landing/social-proof';
import { GuaranteeSection } from '@/components/landing/guarantee';
import { FaqSection } from '@/components/landing/faq';
import { Footer } from '@/components/landing/footer';

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-between overflow-x-hidden">
      <div className="absolute inset-0 -z-10 h-full w-full bg-background bg-[linear-gradient(to_right,#8080800c_1px,transparent_1px),linear-gradient(to_bottom,#8080800c_1px,transparent_1px)] bg-[size:24px_24px]">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 m-auto h-[550px] w-full max-w-[550px] rounded-full bg-primary/20 opacity-30 blur-[120px]"></div>
      </div>
      <main className="w-full">
        <HeroSection />
        <AboutSection />
        <ForWhomSection />
        <ContentCarouselSection />
        <ProgramContentSection />
        <BonusSection />
        <OfferSection />
        <SocialProofSection />
        <GuaranteeSection />
        <FaqSection />
        <Footer />
      </main>
    </div>
  );
}

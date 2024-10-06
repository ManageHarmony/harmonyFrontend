import Hero from "./components/HeroSection";
import JourneyWithHarmony from "./components/Journey";
import Service from "./components/Service";
import CertifiedConsultant from "./components/Categories";
import Features from "./components/Features";
import VideoSection from './components/VideoSection'
import Blogs from './components/Blogs'
import CostSection from './components/CostSection'
import AOSWrapper from '../../src/components/AOSWrapper'

export default function Home() {
  return (
    <>
      <main className="w-full px-4 md:px-20 overflow-x-hidden">


        <AOSWrapper>
          <Hero />
          <JourneyWithHarmony />
          <Service />
          <CertifiedConsultant />
          <Features />
          <VideoSection />
          <div id="blogs">
            <Blogs />
          </div>
          <CostSection />
        </AOSWrapper>
      </main>
    </>
  );
}

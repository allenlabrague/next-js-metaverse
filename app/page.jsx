import { Navbar, Footer } from "@/components";
import {
  Hero,
  About,
  Explore,
  GetStarted,
  WhatsNew,
  World,
  Insights,
  Feedback,
} from "@/components/sections";

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
      <div className="relative">
        <Navbar />
        <div className="absolute w-[25%] h-[25%] inset-0 gradient-01" />
        <Hero />
      </div>
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-03 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-03 z-0" />
        <Feedback />
      </div>
      <Footer />
    </div>
  );
}

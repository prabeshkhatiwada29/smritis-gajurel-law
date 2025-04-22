
import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { PracticeAreas } from "@/components/home/PracticeAreas";
import { CallToAction } from "@/components/home/CallToAction";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Introduction />
      <PracticeAreas />
      <CallToAction />
    </>
  );
};

export default HomePage;

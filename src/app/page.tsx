import Image from "next/image";
import Hero from '../components/Hero';
import Stats from "@/components/Stats";
import Team from "@/components/Team";
import About from "@/components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Team />
      <Stats />
    </main>
  );
}

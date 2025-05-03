import Hero from "../components/hero";
import Heading from "../components/header";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Heading />
      <Hero />
    </div>
  );
}
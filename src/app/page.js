import { Banner, Navbar, Trusted } from "@/components";
import Slide from "@/components/slider";
import CategorySlider from "@/components/slider/categorySlider";
import { cards } from "@/constants/data";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Banner />
      <Trusted />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CategorySlider key={card.id} {...{ card }} />
        ))}
      </Slide>
    </div>
  );
}

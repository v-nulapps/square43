import { ParallaxProvider } from "react-scroll-parallax";
import Logo from "@/pages-sections/klei/Logo";
import Laptop from "@/pages-sections/klei/Laptop";
import Mobile from "@/pages-sections/klei/Mobile";
import Flowers from "@/pages-sections/klei/Flowers";
import Hands from "@/pages-sections/klei/Hands";

function Klei() {
  return (
    <div>
      <ParallaxProvider>
        <Logo />
        <Laptop />
        <Mobile />
        <Flowers />
        <Hands />
      </ParallaxProvider>
    </div>
  );
}

export default Klei;
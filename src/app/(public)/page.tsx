import { Benefits } from "@/features/benefits";
import { Boxes } from "@/features/boxes";
import { CallbackForm } from "@/features/callback";
import { HowWork } from "@/features/how-work";
import { Intro } from "@/features/intro";
import { Map } from "@/features/map";
import { Price } from "@/features/price";
import { Promoute } from "@/features/promoute";

const Home = () => {
  return (
    <>
      <Intro />
      <Map />
      <Boxes />
      <Benefits />
      <Promoute />
      <HowWork />
      <Price />
      <CallbackForm />
    </>
  );
};

export default Home;

import Title from "@/components/pl/home/Title";
import NameCard from "@/components/pl/home/NameCard";
import NameCardImage from "@/components/pl/home/NameCardImage";
import Summary from "@/components/pl/home/Summary";
import History from "@/components/pl/home/History";
import Offer from "@/components/pl/home/Offer";
import Languages from "@/components/pl/home/Languages";
import Media from "@/components/pl/home/Media";

import { AnimatePresence, motion, Spring } from "framer-motion";
import Clouds from "@/components/pl/Clouds";
import FooterBreak from "@/components/pl/FooterBreak";

export default function Home() {
  return (
    <>
      <main className="default-grid-holder transition duration-200 shadow-md  bg-white dark:bg-bgcolor px-3 max-w-fit mx-auto ">
        <Title />
        <NameCard />
        <Summary />
        <History />
        <Offer />
        <Languages />
        <Media />
      </main>
      <FooterBreak height={6} />
    </>
  );
}

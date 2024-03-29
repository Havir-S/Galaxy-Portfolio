import Title from "@/components/en/home/Title";
import NameCard from "@/components/en/home/NameCard";
import Summary from "@/components/en/home/Summary";
import History from "@/components/en/home/History";
import Offer from "@/components/en/home/Offer";
import Languages from "@/components/en/home/Languages";
import Media from "@/components/en/home/Media";
import FooterBreak from "@/components/en/FooterBreak";

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

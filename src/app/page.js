import DownloadSection from "./_components/DownloadSection";
import HomeFrame1 from "./_components/HomeFrame1";
import CardDisplay from "./_components/HomeFrame2";
import Faq from "./_components/Faq";
import Features from "./_components/Features";
import Advantages from "./_components/Advantages";
import Testimonal from "./_components/Testimonal";

export default function Home() {
  return (
    <>
      <div
        id="HomeFrame"
        className="flex flex-col md:flex-row bg-white md:ml-10"
      >
        <HomeFrame1 className="md:w-1/2" />{" "}
        {/* Adjust width for small screens */}
        <CardDisplay className="md:w-1/2" />{" "}
        {/* Adjust width for small screens */}
      </div>

      <Features />
      <Advantages />
      <Testimonal />
      <Faq />
      <DownloadSection />
    </>
  );
}

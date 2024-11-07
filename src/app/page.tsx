import Card from "@/components/cards";
import { SpotlightPreview } from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* First Section */}
      <div className="h-1/5 md:h-3/4  bg-primarycolor text-primarytext">
        <SpotlightPreview />
        <div className="flex absolute bottom-30 md:bottom-10 w-full justify-around">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      {/* Second Section */}
      <div className="h-screen bg-secondarycolor rounded-t-3xl"></div>
    </>
  );
}

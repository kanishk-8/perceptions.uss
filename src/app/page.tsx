import Card from "@/components/cards";
import { SpotlightPreview } from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* First Section */}
      <div className="h-3/4 bg-primarycolor text-primarytext">
        <SpotlightPreview />
        <Card />
      </div>

      {/* Second Section */}
      <div className="h-screen bg-secondarycolor rounded-t-3xl"></div>
    </>
  );
}

import HomeVisual from "@/app/HomeVisual";
import NavBar from "@/app/NavBar";
import AboutMeText from "@/app/AboutMeText";
import AboutMePictures from "./AboutMePictures";

export default function Home() {
  return (
    <div className="grid grid-rows-auto gap-4">
      {/* First part: navbar and home screen visual */}
      <div className="flex flex-col h-screen">
        <NavBar />
        <HomeVisual />
      </div>
      {/* Second part: about us */}
      <div className="flex flex-col lg:flex-row justify-center">
        {/* About us content here */}
        <div className="p-4 lg:w-1/2">
          <AboutMeText />
        </div>
        <div className="relative py-4 px-10 flex justify-center lg:w-1/2">
          <AboutMePictures />
        </div>
      </div>
      {/* Third part: favorites */}
      <div className="flex justify-center items-center row-start-3 hidden">
        {/* Favorites content here */}
        <p></p>
      </div>
    </div>
  );
}

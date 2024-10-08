import HomeVisual from "@/app/HomeVisual";
import NavBar from "@/app/NavBar";
import AboutMeText from "@/app/AboutMeText";

export default function Home() {
  return (
    <div className="grid grid-rows-auto gap-4">
      {/* First part: navbar and home screen visual */}
      <div className="flex flex-col h-screen">
        <NavBar />
        <HomeVisual />
      </div>
      {/* Second part: about us */}
      <div className="flex h-[100vh] justify-center border-black border-2">
        {/* About us content here */}
        <AboutMeText />
      </div>
      {/* Third part: favorites */}
      <div className="flex justify-center items-center row-start-3 hidden">
        {/* Favorites content here */}
        <p></p>
      </div>
    </div>
  );
}

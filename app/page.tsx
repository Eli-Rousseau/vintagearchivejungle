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
      <div className="flex flex-col justify-center">
        {/* About us content here */}
        <div className="p-4">
        <AboutMeText />
        </div>
        <div>
          My Pictures
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

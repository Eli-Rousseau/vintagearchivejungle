import HomeVisual from "@/app/HomeVisual";
import NavBar from "@/app/NavBar";
import AboutMeText from "@/app/AboutMeText";
import AboutMePictures from "@/app/AboutMePictures";
import FavoriteArticles from "@/app/FavoriteArticles";

export default function Home() {
  return (
    <div className="grid grid-rows-auto gap-10">
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
      <div className="p-4">
        {/* Favorites content here */}
        <FavoriteArticles />
      </div>
    </div>
  );
}

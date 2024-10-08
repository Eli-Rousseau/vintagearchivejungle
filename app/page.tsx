import HomeVisual from "@/app/HomeVisual";
import NavBar from "@/app/NavBar";

export default function Home() {
  return (
    <div className="grid grid-rows-auto gap-4">
      {/* First part: navbar and home screen visual */}
      <div className="flex flex-col h-[100vh]">
        <div>
          <NavBar />
        </div>
        <div className="h-full">
          <HomeVisual />
        </div>
      </div>
      {/* Second part: about us */}
      <div className="flex h-[100vh]">
        {/* About us content here */}
        <p>About Us</p>
      </div>
      {/* Third part: favorites */}
      <div className="flex justify-center items-center row-start-3 hidden">
        {/* Favorites content here */}
        <p></p>
      </div>
    </div>
  );
}

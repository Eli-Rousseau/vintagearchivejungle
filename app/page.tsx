import HomeVisual from "@/app/HomeVisual";

export default function Home() {
  return (
    <div className="grid grid-rows-auto gap-4">
      {/* First part: home screen visual */}
      <div className="flex justify-center items-center row-start-1">
        <HomeVisual />
      </div>
      {/* Second part: about us */}
      <div className="flex justify-center items-center row-start-2">
        {/* About us content here */}
        <p></p>
      </div>
      {/* Third part: favorites */}
      <div className="flex justify-center items-center row-start-3">
        {/* Favorites content here */}
        <p></p>
      </div>
    </div>
  );
}

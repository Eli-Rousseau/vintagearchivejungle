const AboutMeText = () => {
  return (
    <div className="flex flex-col gap-y-6 max-w-[40rem] p-6 mx-auto mt-8">
      <h2 className="text-4xl font-bold border-gray-700 border-b-2 pb-1">About Us</h2>

        {/* Quote Section */}
        <div className="flex flex-col md:flex-row items-start p-6">
          <span className="text-6xl text-gray-400 leading-tight mr-6">
            “
          </span>
          <p className="paragraph-text text-lg md:text-xl leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ex
            natus temporibus vero exercitationem atque necessitatibus quos
            ipsam, dicta praesentium doloribus pariatur nostrum rem quam qui
            magnam facere ad maiores error. Officiis, fugit dolorem deserunt ab,
            aliquam voluptate reprehenderit ullam eos quo voluptatum nihil! Et
            at pariatur quibusdam assumenda perspiciatis id voluptas vitae
            inventore, voluptates veritatis blanditiis facere, distinctio
            recusandae cum quos! Incidunt, illum quia iste officiis quisquam
            voluptate est, nostrum accusantium, nulla quasi ex inventore.
            Consectetur facere assumenda, ex quam sequi quos doloribus non
            perferendis harum laudantium est explicabo esse ad commodi fugiat
            totam provident nulla cupiditate mollitia fugit.
          </p>
        </div>
    </div>
  );
};

export default AboutMeText;

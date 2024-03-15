const Banner = () => {
  return (
    <div className="container mx-auto text-center bg-[url('./Banner.png')] bg-cover bg-center rounded-3xl lg:py-28 space-y-7 p-4">
      <h1 className="text-white text-6xl font-bold lg:px-28">
        Discover an exceptional cooking class tailored for you!
      </h1>
      <h3 className="text-white lg:px-28">
        Unleash your inner chef with a cooking class designed just for you!
        We'll whip up delicious dishes based on your cravings, dietary needs,
        and culinary adventures. Get ready to tantalize your taste buds and have
        a blast in the kitchen!
      </h3>
      <div className="flex gap-6 items-center justify-center">
        <button className="btn bg-primary-color border-none rounded-full">
          Explore Now
        </button>
        <button className="btn btn-outline text-white rounded-full">
          Our Feedback
        </button>
      </div>
    </div>
  );
};

export default Banner;

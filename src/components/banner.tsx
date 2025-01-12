import Marquee from "./ui/marquee";

const Banner = () => {
  return (
    <div className="bg-palette-primary py-2 dark:bg-palette-secondary">
      <Marquee pauseOnHover className="[--duration:20s]">
        <p className="text-xs text-white">
          Discover a world of stories with Narrato, your ultimate eBook library.
          Explore, read, and organize books effortlessly. Dive into knowledge
          anytime, anywhere!
        </p>
      </Marquee>
    </div>
  );
};

export default Banner;

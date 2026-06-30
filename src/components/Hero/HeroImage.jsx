import heroImage from "../../assets/images/hero-image.png";

const HeroImage = () => {
  return (
    <div className="relative flex justify-center lg:justify-end">

      <div className="relative w-full max-w-[560px] h-[520px]">

        {/* Purple Card */}

        <div
          className="
            absolute
            top-10
            right-0
            w-[420px]
            h-[430px]
            bg-[#BE8FF6]
            rounded-[32px]
          "
        ></div>

        {/* Image */}

        <img
          src={heroImage}
          alt="Hero"
          className="
            absolute
            bottom-0
            left-0
            w-full
            z-10
          "
        />

      </div>

    </div>
  );
};

export default HeroImage;
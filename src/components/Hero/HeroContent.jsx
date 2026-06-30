import heroData from "./heroData";
import Button from "../Button/Button";

const HeroContent = () => {
  return (
    <div className="max-w-[480px]">

      <h1 className="heading-1 mb-8">
        {heroData.title}
      </h1>

      <p className="body-2 text-gray-500 mb-10">
        {heroData.description}
      </p>

      <Button>{heroData.button}</Button>

    </div>
  );
};

export default HeroContent;
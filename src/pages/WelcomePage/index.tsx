import { Link } from "react-router-dom";
import { icons } from "../../constant/icons";
import { images } from "../../constant/images";

const WelcomePage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-title-page bg-cover bg-top laptop:bg-center">
      <img
        src={images.STAR_LOGO}
        alt="star-logo"
        className="bounce-image w-96 tablet:w-[450px] laptop:w-[550px]"
      />
      <p className="text-center font-copyduck text-lg text-red-400 tablet:text-xl">
        <span className="text-[#8FE4CD]">Descriptive</span>{" "}
        <span className="text-[#84DCE0]">Text</span>{" "}
        <span className="text-[#FFD2D6]">Application</span>{" "}
        <span className="text-[#FED38E]">Learning</span>
      </p>
      <Link to="/main-menu">
        <img
          src={icons.PLAY_BUTTON}
          alt="play-button-icon"
          className="w-32 cursor-pointer duration-300 ease-in-out hover:scale-110 active:opacity-50 tablet:w-44 laptop:w-60"
        />
      </Link>
    </div>
  );
};

export default WelcomePage;

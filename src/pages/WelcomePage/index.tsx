import { Link } from "react-router-dom";
import { icons } from "../../constant/icons";
import { images } from "../../constant/images";

const WelcomePage = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center bg-welcome-page bg-cover bg-top laptop:bg-center">
      <div className="mt-4">
        <img
          src={images.STAR_LOGO}
          alt="star-logo"
          className="bounce-image w-96 tablet:w-[450px] laptop:w-[550px]"
        />
      </div>
      {/* <p className="text-center font-copyduck text-lg text-red-400 tablet:text-xl">
        <span className="text-[#8FE4CD]">Descriptive</span>{" "}
        <span className="text-[#84DCE0]">Text</span>{" "}
        <span className="text-[#FFD2D6]">Application</span>{" "}
        <span className="text-[#FED38E]">Learning</span>
      </p> */}
      <Link to="/main-menu">
        <img
          src={icons.BUTTON_PLAY}
          alt="play-button-icon"
          className="w-32 cursor-pointer duration-300 ease-in-out hover:scale-110 active:opacity-50 tablet:w-44 laptop:w-60"
        />
      </Link>
      {/* <div className="hidden tablet:block">
        <img
          src={images.SCHOOL}
          alt="school-image"
          className="absolute h-52 w-52 tablet:bottom-16 tablet:right-10 laptop:bottom-24 laptop:right-36"
        />
        <img
          src={images.STUDENTS}
          alt="school-image"
          className="absolute h-52 w-52 tablet:bottom-10 tablet:right-48 laptop:bottom-16 laptop:right-80"
        />
      </div> */}
    </div>
  );
};

export default WelcomePage;

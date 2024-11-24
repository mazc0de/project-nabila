import { Link } from "react-router-dom";

import { Navbar } from "@/components";
import { images } from "../../constant/images";

const MainMenu = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-main-menu bg-cover bg-bottom p-5 laptop:gap-10 laptop:bg-center">
      <Navbar />
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="w-56 laptop:w-96">
          <p className="text-center font-moreSugar text-2xl font-bold laptop:text-5xl laptop:leading-[60px]">
            Welcome to my English Class !
          </p>
        </div>
        <div className="flex gap-10">
          <Link to="/material-definition">
            <img
              src={images.MATERIAL_BUTTON}
              alt="material-button"
              className="button-effect-clicked h-36 w-36 laptop:h-52 laptop:w-52"
            />
          </Link>
          <Link to="/quiz-menu">
            <img
              src={images.QUIZ_BUTTON}
              alt="material-button"
              className="button-effect-clicked h-36 w-36 laptop:h-52 laptop:w-52"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;

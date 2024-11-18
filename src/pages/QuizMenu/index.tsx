import { Link } from "react-router-dom";
import { icons } from "../../constant/icons";
import { images } from "../../constant/images";

const QuizMenu = () => {
  return (
    <div className="bg-quiz-menu relative flex h-screen w-full items-center justify-center bg-cover bg-bottom">
      <div>
        <Link to="/main-menu">
          <img
            src={icons.BUTTON_HOME}
            alt="home-button"
            className="button-effect-clicked absolute left-5 top-5 w-10"
          />
        </Link>
      </div>
      <div className="flex h-full flex-col items-center justify-center gap-8">
        <p className="text-center font-moreSugar text-4xl font-bold">QUIZ</p>
        <div className="flex gap-8">
          <Link to="/quiz/multiple-choice/1">
            <div className="flex h-full w-full flex-col items-center justify-center gap-2">
              <img
                src={icons.QUIZ_MULTIPLE_CHOICE}
                alt="material-button"
                className="button-effect-clicked h-28 w-28 laptop:h-52 laptop:w-52"
              />
              <p className="text-center font-moreSugar text-lg font-bold text-[#FACCC2]">
                MULTIPLE CHOICE
              </p>
            </div>
          </Link>
          <Link to="/material-definition">
            <div className="flex h-full w-full flex-col items-center justify-center gap-2">
              <img
                src={icons.QUIZ_TRUE_OR_FALSE}
                alt="material-button"
                className="button-effect-clicked h-28 w-28 laptop:h-52 laptop:w-52"
              />
              <p className="text-center font-moreSugar text-lg font-bold text-[#FACCC2]">
                TRUE OR FALSE
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizMenu;

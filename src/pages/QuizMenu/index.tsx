import { Link } from "react-router-dom";
import { icons } from "../../constant/icons";

const QuizMenu = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div>
        <p className="text-center font-moreSugar text-2xl font-bold lg:leading-[60px]">
          Let's start the quiz
        </p>
      </div>
      <div className="mt-5 flex justify-center">
        <div className="mr-2">
          <Link to={"/quiz/multiple-choice/1"}>
            <div className="flex h-full w-full flex-col items-center justify-center gap-2">
              <img
                src={icons.QUIZ_MULTIPLE_CHOICE}
                alt="material-button"
                className="button-effect-clicked w-2h-28 lg:w-3h-36 h-28 lg:h-36"
              />
              <p className="text-center font-moreSugar text-lg font-bold text-peach-pink">
                MULTIPLE CHOICE
              </p>
            </div>
          </Link>
        </div>

        <div className="ml-2">
          <Link to={"/quiz/true-or-false"}>
            <div className="flex h-full w-full flex-col items-center justify-center gap-2">
              <img
                src={icons.QUIZ_TRUE_OR_FALSE}
                alt="material-button"
                className="button-effect-clicked w-2h-28 lg:w-3h-36 h-28 lg:h-36"
              />
              <p className="text-center font-moreSugar text-lg font-bold text-mint-green">
                TRUE OR FALSE
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
    // <div className="relative flex h-screen w-full items-center justify-center bg-quiz-menu bg-cover bg-bottom">
    //   <div>
    //     <Link to="/main-menu">
    //       <img
    //         src={icons.BUTTON_HOME}
    //         alt="home-button"
    //         className="button-effect-clicked absolute left-5 top-5 w-10"
    //       />
    //     </Link>
    //   </div>
    //   <div className="flex h-full flex-col items-center justify-center gap-8">
    //     <p className="text-center font-moreSugar text-4xl font-bold">QUIZ</p>
    //     <div className="flex gap-8">
    //       <Link to="/quiz/multiple-choice/1">
    // <div className="flex h-full w-full flex-col items-center justify-center gap-2">
    //   <img
    //     src={icons.QUIZ_MULTIPLE_CHOICE}
    //     alt="material-button"
    //     className="button-effect-clicked h-28 w-28 laptop:h-36 laptop:w-3h-36"
    //   />
    //   <p className="text-center font-moreSugar text-lg font-bold text-[#FACCC2]">
    //     MULTIPLE CHOICE
    //   </p>
    // </div>
    //       </Link>
    //       <Link to="/quiz/true-or-false">
    //         <div className="flex h-full w-full flex-col items-center justify-center gap-2">
    //           <img
    //             src={icons.QUIZ_TRUE_OR_FALSE}
    //             alt="material-button"
    //             className="button-effect-clicked h-28 w-28 laptop:h-36 laptop:w-3h-36"
    //           />
    //           <p className="text-center font-moreSugar text-lg font-bold text-[#FACCC2]">
    //             TRUE OR FALSE
    //           </p>
    //         </div>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
};

export default QuizMenu;

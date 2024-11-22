import { Link } from "react-router-dom";
import { icons } from "../../constant/icons";
import { explanatoryText } from "./explanatoryText";
import { ExplanatoryTextType } from "../../types";

const TrueOrFalse = () => {
  return (
    <div className="relative flex h-screen w-full flex-col bg-grass bg-cover bg-bottom p-5">
      <div className="absolute">
        <Link to="/main-menu">
          <img
            src={icons.BUTTON_HOME}
            alt="home-button"
            className="button-effect-clicked w-10"
          />
        </Link>
      </div>
      <div className="w-full">
        <p className="text-peach-orange text-center font-moreSugar text-xl font-bold laptop:text-5xl laptop:leading-[60px]">
          True or False Quiz
        </p>
      </div>
      <div className="flex w-full justify-center">
        <div className="shadow-card__generic-structure flex h-64 w-1/2 flex-row gap-2 rounded-lg bg-off-white-100 p-2">
          {explanatoryText?.map((item: ExplanatoryTextType) => {
            return (
              <div className="flex h-full w-1/2 flex-col items-center justify-start rounded-md bg-off-white-200 p-2">
                <p className="font-moreSugar text-sm font-bold text-black laptop:text-5xl laptop:leading-[60px]">
                  {item?.title}
                </p>
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="aspect-square h-20 w-20 rounded-lg object-cover"
                />
                <div className="mt-2 overflow-scroll">
                  <p className="font-moreSugar text-xs text-black laptop:text-5xl laptop:leading-[60px]">
                    {item?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <Link to={`/quiz/true-or-false/1`}>
          <img
            src={icons.BUTTON_NEXT}
            alt="next-button"
            className="button-effect-clicked h-[35px] w-[95px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default TrueOrFalse;

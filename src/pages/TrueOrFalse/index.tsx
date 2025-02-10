import { Link } from "react-router-dom";
import { icons } from "../../constant/icons";
import { explanatoryText } from "./explanatoryText";
import { ExplanatoryTextType } from "../../types";

const TrueOrFalse = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-cover bg-center p-5">
      <p className="text-center font-moreSugar text-2xl font-bold text-peach-orange">
        True or False Quiz
      </p>
      <div className="shadow-card__material-definition mt-2 flex flex-col justify-between rounded-lg bg-vanilla-cream p-5 lg:w-[720px]">
        <div className="flex flex-col lg:flex-row">
          {explanatoryText?.map((item: ExplanatoryTextType) => {
            return (
              <div className="mx-0 flex h-60 flex-col items-center justify-center overflow-scroll first:mb-2 last:mt-2 lg:h-96 lg:w-1/2 lg:first:mb-0 lg:first:mr-3 lg:last:ml-3 lg:last:mt-0">
                <p className="font-moreSugar text-sm font-bold text-black lg:text-lg">
                  {item?.title}
                </p>
                <img
                  src={item?.image}
                  alt={item?.title}
                  className="aspect-square h-20 w-20 rounded-lg object-cover"
                />
                <div className="mt-2 overflow-scroll">
                  <p className="text-justify font-moreSugar text-sm text-black lg:text-lg">
                    {item?.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-4 flex justify-center">
          <Link to={`/quiz/true-or-false/1`}>
            <img
              src={icons.BUTTON_NEXT}
              alt="next-button"
              className="button-effect-clicked h-[35px] w-[95px] lg:h-[50px] lg:w-[125px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrueOrFalse;

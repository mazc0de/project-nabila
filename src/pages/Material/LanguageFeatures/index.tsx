import { Link } from "react-router-dom";
import { icons } from "../../../constant/icons";
import { data } from "./data";

const LanguageFeatures = () => {
  return (
    <div className="bg-language-features flex h-screen w-full flex-col gap-3 bg-cover bg-bottom px-10 py-5">
      <div className="flex h-10 items-center justify-between">
        <Link to="/main-menu">
          <img src={icons.BUTTON_HOME} alt="home-button" className="h-9 w-10" />
        </Link>
        <div className="flex-grow">
          <p className="text-center font-moreSugar text-2xl font-bold">
            Language Features
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-3">
        {data?.map((item: any, index: number) => {
          return (
            <div
              key={index}
              className="flex aspect-square w-44 flex-col gap-5 rounded-2xl p-5 odd:bg-[#FACCC2] even:bg-[#FEEDAA]"
            >
              <div>
                <p className="text-center font-moreSugar text-lg font-bold">
                  {item?.title}
                </p>
              </div>
              <div className="rounded-xl bg-[#FDFCF4] p-2">
                <p className="text-center font-moreSugar text-sm">
                  {item?.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-center gap-5">
        <Link to="/material-definition/generic-structure">
          <img
            src={icons.BUTTON_PREV}
            alt="prev-button"
            className="active: button-effect-clicked h-[40px] w-[115px]"
          />
        </Link>
        <Link to="/material-definition/language-features">
          <img
            src={icons.BUTTON_NEXT}
            alt="next-button"
            className="button-effect-clicked h-[40px] w-[115px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default LanguageFeatures;
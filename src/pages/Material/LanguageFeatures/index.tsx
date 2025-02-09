import { Link } from "react-router-dom";
import { icons } from "../../../constant/icons";
import { languageFeaturesData } from "@/constant/languageFeaturesData";
import ROUTES from "@/constant/routes";

const LanguageFeatures = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-cover bg-center p-5">
      <div>
        <p className="text-center font-moreSugar text-3xl font-bold">
          Language Features
        </p>
      </div>
      <div className="mt-5 flex w-full overflow-x-scroll lg:w-[992px]">
        {languageFeaturesData.map((item: any) => {
          return (
            <div
              key={item?.id}
              className="even:bg-light-mustard-yellow odd:bg-peach-pink mx-3 flex aspect-square min-h-[230px] min-w-[230px] flex-col rounded-xl p-5 first:ml-0 last:mr-0 lg:max-h-[230px] lg:max-w-[230px]"
            >
              <div className="">
                <p className="text-center font-moreSugar text-xl font-bold">
                  {item?.title}
                </p>
              </div>
              <div className="rounded-xl bg-off-white-100 p-2">
                <p className="text-center font-moreSugar text-lg">
                  {item?.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-5 flex justify-center">
        <div className="mr-1">
          <Link to={ROUTES.GENERIC_STRUCTURE}>
            <img
              src={icons.BUTTON_PREV}
              alt="next-button"
              className="button-effect-clicked h-[55px] w-[150px]"
            />
          </Link>
        </div>
        <div className="ml-1">
          <Link to={ROUTES.LANGUAGE_FEATURES}>
            <img
              src={icons.BUTTON_NEXT}
              alt="next-button"
              className="button-effect-clicked h-[55px] w-[150px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LanguageFeatures;

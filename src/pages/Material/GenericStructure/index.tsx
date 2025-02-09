import { Link } from "react-router-dom";
import { icons } from "../../../constant/icons";
import ROUTES from "@/constant/routes";

const GenericStructure = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-cover bg-center p-5">
      <div>
        <p className="text-center font-moreSugar text-3xl font-bold">
          Generic Structure
        </p>
        <div className="shadow-card__material-definition bg-vanilla-cream mt-5 flex h-auto flex-col gap-3 rounded-lg p-5 lg:w-[550px]">
          <p className="text-center font-moreSugar text-xl font-bold">
            Identification
          </p>
          <p className="text-center font-moreSugar text-lg">
            Identification introduces and identifies specific objects (a person,
            thing, place, animal, or event) intended to be described.
          </p>
        </div>
        <div className="shadow-card__material-definition bg-vanilla-cream mt-5 flex h-auto flex-col gap-3 rounded-lg p-5 lg:w-[550px]">
          <p className="text-center font-moreSugar text-xl font-bold">
            Description
          </p>
          <p className="text-center font-moreSugar text-lg">
            Description describes the intended objects using descriptive details
            or information about the objects’ characteristics, appearances,
            personality, habits, or qualities.
          </p>
        </div>
        <div className="mt-5 flex justify-center">
          <div className="mr-1">
            <Link to={ROUTES.MATERIAL_DEFINITION}>
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
    </div>
  );
};

export default GenericStructure;

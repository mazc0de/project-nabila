import { Link } from "react-router-dom";
import { icons } from "../../constant/icons";
import ROUTES from "@/constant/routes";

const Material = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-5">
      <div className="shadow-card__material-definition bg-vanilla-cream flex h-auto flex-col gap-3 rounded-lg p-5 lg:w-[550px]">
        <p className="text-center font-moreSugar text-3xl font-bold">
          Definition
        </p>
        <p className="text-center font-moreSugar text-lg">
          Descriptive text is a text used to give a piece of detailed
          information (description) about a particular object. It describes
          particular objects like things, animals, persons, or places.
        </p>
      </div>
      <div className="mt-5 flex justify-center">
        <Link to={ROUTES.GENERIC_STRUCTURE}>
          <img
            src={icons.BUTTON_NEXT}
            alt="next-button"
            className="button-effect-clicked h-[55px] w-[150px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default Material;

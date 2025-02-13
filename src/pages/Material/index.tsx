import { Link } from "react-router-dom";
import { icons } from "../../constant/icons";
import ROUTES from "@/constant/routes";

const Material = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center p-5">
      <div className="shadow-card__material-definition flex h-auto flex-col gap-3 rounded-lg bg-vanilla-cream p-5 lg:w-[550px]">
        <p className="text-center font-moreSugar text-3xl font-bold">
          Definition
        </p>
        <p className="text-center font-moreSugar text-lg">
          Descriptive text is a kind of text used to give a piece of detailed
          information about a particular object. The context of this kind of
          text is the description of a particular person, animal, place, or
          things. The social function of descriptive text is to describe a
          particular person, animal, place, or things.
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

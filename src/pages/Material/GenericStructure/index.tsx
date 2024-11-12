import { Link } from "react-router-dom";
import { icons } from "../../../constant/icons";

const GenericStructure = () => {
  return (
    <div className="flex h-screen w-full justify-between bg-generic-structure bg-cover bg-bottom px-10 py-5">
      <div className="flex h-10 items-center gap-10">
        <img src={icons.BUTTON_HOME} alt="home-button" className="h-9 w-10" />
        <p className="font-moreSugar text-2xl font-bold">Generic Structure</p>
      </div>
      <div className="flex flex-col gap-5">
        <div className="shadow-card__generic-structure flex h-auto w-96 flex-col gap-1 rounded-lg bg-[#FDFCF4] p-3">
          <p className="text-center font-moreSugar text-xl font-bold">
            Identification
          </p>
          <p className="text-center font-moreSugar text-sm">
            Identification introduces and identifies specific objects (a person,
            thing, place, animal, or event) intended to be described.
          </p>
        </div>
        <div className="shadow-card__generic-structure flex h-auto w-96 flex-col gap-1 rounded-lg bg-[#FDFCF4] p-3">
          <p className="text-center font-moreSugar text-xl font-bold">
            Description
          </p>
          <p className="text-center font-moreSugar text-sm">
            Description describes the intended objects using descriptive details
            or information about the objects’ characteristics, appearances,
            personality, habits, or qualities.
          </p>
        </div>
        <div className="flex justify-center gap-10">
          <Link to="/main-menu">
            <img
              src={icons.BUTTON_PREV}
              alt="prev-button"
              className="active: button-effect-clicked h-[35px] w-[95px]"
            />
          </Link>
          <Link to="/material-definition/generic-structure">
            <img
              src={icons.BUTTON_NEXT}
              alt="next-button"
              className="button-effect-clicked h-[35px] w-[95px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GenericStructure;

import { Link } from "react-router-dom";
import { icons } from "../../constant/icons";

const Material = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-center bg-material-definition bg-cover bg-bottom">
      <Link to="/main-menu">
        <img
          src={icons.BUTTON_HOME}
          alt="home-button"
          className="button-effect-clicked absolute left-6 top-10 w-14"
        />
      </Link>

      <div className="flex w-[550px] flex-col gap-8">
        <div className="shadow-card__material-definition flex h-auto w-auto flex-col gap-3 rounded-lg bg-[#FFF1BF] p-5">
          <p className="text-center font-moreSugar text-3xl font-bold">
            Definition
          </p>
          <p className="text-center font-moreSugar text-lg">
            Descriptive text is a text used to give a piece of detailed
            information (description) about a particular object. It describes
            particular objects like things, animals, persons, or places.
          </p>
        </div>
        <div className="flex justify-center gap-5">
          {/* <Link to="/main-menu">
            <img
              src={icons.BUTTON_PREV}
              alt="prev-button"
              className="active: button-effect-clicked h-[55px] w-[150px]"
            />
          </Link> */}
          <Link to="/material-definition/generic-structure">
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

export default Material;

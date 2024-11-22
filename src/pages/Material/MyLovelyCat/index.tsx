import { Link } from "react-router-dom";
import { icons } from "../../../constant/icons";

const MyLovelyCat = () => {
  return (
    <div className="flex h-screen w-full items-center justify-between bg-my-lovely-cat bg-cover bg-bottom p-5">
      <div className="self-start">
        <Link to="/main-menu">
          <img src={icons.BUTTON_HOME} alt="home-button" className="h-9 w-10" />
        </Link>
      </div>
      <div className="shadow-card__generic-structure relative flex h-auto w-[550px] flex-col gap-1 rounded-lg bg-off-white-100 p-3">
        <p className="text-center font-moreSugar text-xl font-bold">
          My Lovely Cat, Bebe
        </p>
        <p className="indent-5 font-moreSugar text-sm">
          My mother bought me a present I’ve wanted for years. It’s a cat. A
          kitten to be exact. I called her Bebe.
        </p>
        <p className="indent-5 font-moreSugar text-sm">
          Bebe is a small kitten. Her size is as big as the palm of my hand. So
          cute! She has white and grey color, and lovely yellow eyes. She is
          very soft and furry. Bebe is so fragile. Sometimes, I’m afraid I will
          hurt her if I want to take her up.
        </p>
        <p className="mb-2 indent-5 font-moreSugar text-sm">
          Bebe is a good eater. She always finished everything we gave to her.
          But, she likes snacks and wet food the most. Now, it’s been a year
          since Bebe came to our family. Her small body has grown up into the
          size of a football ball. Bebe is a good cat, and we love her so much.
        </p>
        <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 transform gap-5">
          <Link to="/material-definition/prambanan-temple">
            <img
              src={icons.BUTTON_PREV}
              alt="prev-button"
              className="active: button-effect-clicked h-[40px] w-[115px]"
            />
          </Link>
          <Link to="/material-definition/my-lovely-cat">
            <img
              src={icons.BUTTON_NEXT}
              alt="next-button"
              className="button-effect-clicked h-[40px] w-[115px]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyLovelyCat;

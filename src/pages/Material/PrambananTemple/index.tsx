import { Link } from "react-router-dom";
import { icons } from "../../../constant/icons";

const PrambananTemple = () => {
  return (
    <div className="relative flex h-screen w-full items-center justify-between bg-prambanan-temple bg-cover bg-bottom p-5">
      <div className="shadow-card__generic-structure relative flex h-auto w-[550px] flex-col gap-1 rounded-lg bg-off-white-100 p-3">
        <p className="text-center font-moreSugar text-xl font-bold">
          Prambanan Temple
        </p>
        <p className="indent-5 font-moreSugar text-sm">
          Prambanan the second largest Hindu temple in Indonesia after
          Borobudur. It is located on the boundary between Central Java and
          Yogyakarta provinces. The temple attracts many visitors from around
          the world.
        </p>
        <p className="indent-5 font-moreSugar text-sm">
          The building has tall and pointed character, typical of Hindu
          architecture. The Shiva is the main temple which standing 47 meters
          high and surrounded by 240 small temples. It is considered as a
          masterpiece of the classical period in Indonesia.
        </p>
        <p className="mb-2 indent-5 font-moreSugar text-sm">
          Prambanan is strongly assumed it was built in the mid-9th century by
          the King Balitung Maha Sambu from Hindu Sanjaya Dynasty. According to
          Hindu's belief, this building is dedicated to the Trimurti, the three
          main gods namely Brahma, Vishnu, and Shiva.
        </p>
        <div className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 transform gap-5">
          <Link to="/material-definition/language-features">
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
      <div className="absolute right-5 top-5">
        <Link to="/main-menu">
          <img src={icons.BUTTON_HOME} alt="home-button" className="h-9 w-10" />
        </Link>
      </div>
    </div>
  );
};

export default PrambananTemple;

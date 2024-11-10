import { images } from "../../constant/images";

const MainMenu = () => {
  return (
    <div className="bg-main-menu flex h-screen w-full overflow-hidden bg-cover bg-center">
      <div className="flex w-1/2 justify-center">
        <div className="relative h-screen w-3/4">
          <img
            src={images.STAR_LOGO}
            alt="star-logo"
            className="bounce-image mt-5 w-96 tablet:w-[450px] laptop:w-[550px]"
          />
          <img
            src={images.TEACHER}
            alt="teacher-image"
            className="absolute bottom-0 left-1/2 w-96 -translate-x-1/2 transform tablet:w-56"
          />
        </div>
      </div>
      <div className="flex w-1/2 items-center justify-center gap-10">
        <img
          src={images.QUIZ_BUTTON}
          alt="quiz-button"
          className="w-56 cursor-pointer duration-300 ease-in-out hover:scale-110 active:opacity-50"
        />
        <img
          src={images.MATERIAL_BUTTON}
          alt="material-button"
          className="w-56 cursor-pointer duration-300 ease-in-out hover:scale-110 active:opacity-50"
        />
        {/* <div className="bg-off-white-100 shadow-card h-[280px] w-[280px] rounded-2xl"></div>
        <div className="bg-off-white-100 shadow-card h-[280px] w-[280px] rounded-2xl"></div> */}
      </div>
    </div>
  );
};

export default MainMenu;

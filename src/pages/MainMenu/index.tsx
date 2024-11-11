import { images } from "../../constant/images";

const MainMenu = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-main-menu bg-cover bg-bottom laptop:gap-10 laptop:bg-center">
      <div className="w-56 laptop:w-96">
        <p className="font-moresugar-regular text-center text-2xl laptop:text-5xl laptop:leading-[60px]">
          Welcome to my English Class !
        </p>
      </div>
      <div className="flex gap-10">
        <img
          src={images.MATERIAL_BUTTON}
          alt="material-button"
          className="h-36 w-36 cursor-pointer duration-300 ease-in-out hover:scale-110 laptop:h-52 laptop:w-52"
        />
        <img
          src={images.QUIZ_BUTTON}
          alt="material-button"
          className="h-36 w-36 cursor-pointer duration-300 ease-in-out hover:scale-110 laptop:h-52 laptop:w-52"
        />
      </div>
    </div>
  );
};

export default MainMenu;

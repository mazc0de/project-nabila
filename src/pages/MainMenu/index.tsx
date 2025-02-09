import { Link } from "react-router-dom";

import { mainMenu } from "@/constant/mainMenu";

const MainMenu = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <div>
        <p className="text-center font-moreSugar text-2xl font-bold laptop:text-5xl laptop:leading-[60px]">
          Welcome to my English Class !
        </p>
      </div>
      <div className="mt-5 flex flex-wrap justify-center">
        {mainMenu.map((item: any) => {
          return (
            <Link to={item?.link}>
              <img
                src={item?.imageUrl}
                alt={item?.title}
                className="button-effect-clicked h-36 w-36 laptop:h-52 laptop:w-52"
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MainMenu;

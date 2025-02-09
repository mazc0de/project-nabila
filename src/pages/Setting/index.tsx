import { icons } from "@/constant/icons";
import { images } from "@/constant/images";
import { Link, NavLink, Outlet } from "react-router-dom";
import { headerMenu } from "@/constant/headerMenu";

const Setting = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center bg-material-definition bg-cover bg-bottom p-5">
      <div className="flex w-full justify-between">
        <Link to="/main-menu">
          <img
            src={icons.BUTTON_HOME}
            alt="home-button"
            className="button-effect-clicked left-6 top-10 h-9 w-10"
          />
        </Link>
        <img
          src={images.LOGO_UNIMUS}
          alt="star-logo"
          className="h-10 tablet:w-[150px] laptop:h-16 laptop:w-[250px]"
        />
      </div>
      <div className="flex w-[550px] flex-col laptop:w-[850px]">
        <div className="flex w-full flex-col items-center justify-center pt-2 laptop:pt-14">
          <div className="flex w-full justify-between">
            {headerMenu.map((item: any) => {
              return (
                <NavLink to={item.link}>
                  {({ isActive }) => (
                    <div
                      className={`shadow-card__material-definition w-[150px] rounded-lg p-1 laptop:p-3 ${isActive ? "bg-[#f2d260]" : "bg-[#FFF1BF]"}`}
                    >
                      <p
                        className={`text-center font-moreSugar text-sm laptop:text-base ${isActive && "font-bold"}`}
                      >
                        {item.menu}
                      </p>
                    </div>
                  )}
                </NavLink>
              );
            })}
          </div>
          <div className="shadow-card__material-definition mt-5 flex h-auto w-full flex-col gap-3 rounded-lg bg-[#FFF1BF] p-5">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Setting;

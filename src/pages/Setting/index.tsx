import { NavLink, Outlet } from "react-router-dom";
import { headerMenu } from "@/constant/headerMenu";

const Setting = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-cover bg-center p-5">
      <div className="flex flex-col lg:flex-row">
        {headerMenu.map((item: any) => {
          return (
            <NavLink to={item.link}>
              {({ isActive }) => (
                <div
                  className={`shadow-card__material-definition my-2 flex h-10 w-[150px] items-center justify-center rounded-lg p-1 lg:mx-3 lg:my-0 lg:h-auto laptop:p-3 ${isActive ? "bg-[#f2d260]" : "bg-[#FFF1BF]"}`}
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
      <div className="shadow-card__material-definition mt-5 flex h-96 w-full flex-col flex-wrap gap-3 overflow-y-scroll rounded-lg bg-[#FFF1BF] p-5 lg:w-[650px]">
        <Outlet />
      </div>
    </div>
  );
};

export default Setting;

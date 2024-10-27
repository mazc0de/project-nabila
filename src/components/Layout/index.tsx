import { Outlet } from "react-router-dom";
import { icons } from "../../constant/icons";

const Layout = () => {
  return (
    <>
      <div className="tablet:hidden flex h-screen w-full flex-col items-center justify-center bg-black">
        <div className="phone"></div>
        <div className="mt-10">
          <p className="text-white">Please rotate your device!</p>
        </div>
      </div>
      <div className="tablet:block hidden">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

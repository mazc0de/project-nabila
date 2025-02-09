import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useState } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { removeUser } from "@/redux/reducer/userSlice";
import { useNavigate } from "react-router-dom";
import { images } from "@/constant/images";
import { navbarMenu } from "@/constant/navbarMenu";
import ROUTES from "@/constant/routes";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);

  const [openPoppover, setOpenPoppover] = useState(false);

  const handleNavbarMenu = (menu: string) => {
    if (menu === "Home") {
      navigate(ROUTES.HOME);
    } else if (menu === "Profile") {
      navigate(ROUTES.PROFILE);
    } else if (menu === "Logout") {
      setTimeout(() => {
        dispatch(removeUser());
        navigate(ROUTES.HOME);
      }, 1000);
    }
    setOpenPoppover(false);
  };

  return (
    <div className="flex h-16 w-full items-center justify-between p-3 lg:h-auto lg:p-5">
      <img
        src={images.LOGO_UNIMUS}
        alt="logo-unimus"
        className="h-auto w-36 lg:w-52"
      />

      {user?.name !== "-" && (
        <div className="flex items-center">
          <p className="font-moreSugar text-base lg:text-lg">
            Hi <span className="capitalize">{user.name}</span>!
          </p>
          <div className="ml-2 flex">
            <Popover open={openPoppover} onOpenChange={setOpenPoppover}>
              <PopoverTrigger className="transition duration-300 ease-in-out data-[state=closed]:rotate-180 data-[state=open]:rotate-90">
                <Menu className="w-5 fill-black" />
              </PopoverTrigger>
              <PopoverContent className="mr-5 flex h-auto w-40 flex-col gap-2 p-3">
                {navbarMenu.map((item: any) => {
                  return (
                    <div
                      key={item?.id}
                      className="flex cursor-pointer items-center rounded-sm p-2 transition duration-300 hover:bg-gray-200"
                      onClick={() => handleNavbarMenu(item?.label)}
                    >
                      {item?.icon}
                      <p className="ml-2 font-moreSugar text-sm">
                        {item?.label}
                      </p>
                    </div>
                  );
                })}
                {/* <div
                  className="flex cursor-pointer items-center rounded-sm p-2 transition duration-300 hover:bg-gray-200"
                  onClick={handleProfileButton}
                >
                  <UserPen className="w-5" />
                  <p className="ml-2 font-moreSugar text-sm">Profile</p>
                </div> */}
                {/* <div className="" onClick={handleProfileButton}>
                  <Power /> Logout
                </div> */}
              </PopoverContent>
            </Popover>
          </div>
        </div>
      )}
    </div>

    // <>
    //   {user.name?.length !== 0 && (
    //     <div className="flex gap-2 self-end">
    //       <p className="font-moreSugar text-base">
    //         Hi <span className="capitalize">{user.name}</span>!
    //       </p>
    // <Popover>
    //   <PopoverTrigger className="transition duration-300 ease-in-out data-[state=closed]:rotate-180">
    //     <Triangle className="w-2.5 fill-black" />
    //   </PopoverTrigger>
    //   <PopoverContent className="mr-5 flex w-auto flex-col gap-2 p-2">
    //     <Button
    //       loadingColor="text-green-900"
    //       loading={loadingProfile}
    //       className="w-24 bg-mint-green hover:bg-mint-green/90 active:bg-mint-green"
    //       onClick={handleProfileButton}
    //     >
    //       <UserPen /> Profile
    //     </Button>
    //     <Button
    //       loading={loading}
    //       className="w-24"
    //       onClick={handleLogoutButton}
    //     >
    //       <Power /> Logout
    //     </Button>
    //   </PopoverContent>
    // </Popover>
    //     </div>
    //   )}
    // </>
  );
};

export default Navbar;

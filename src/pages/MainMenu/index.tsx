import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Power, Triangle } from "lucide-react";

import { useAppSelector } from "@/hooks/useAppSelector";

import { images } from "../../constant/images";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { removeUser } from "@/redux/reducer/userSlice";
import { useDispatch } from "react-redux";

const MainMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(removeUser());
      setLoading(false);
      navigate("/");
    }, 1000);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-5 bg-main-menu bg-cover bg-bottom p-5 laptop:gap-10 laptop:bg-center">
      {user.name?.length !== 0 && (
        <div className="flex gap-2 self-end">
          <p className="font-moreSugar text-base">Hi {user.name}!</p>
          <Popover>
            <PopoverTrigger className="transition duration-300 ease-in-out data-[state=closed]:rotate-180">
              <Triangle className="w-2.5 fill-black" />
            </PopoverTrigger>
            <PopoverContent className="mr-5 w-auto p-2">
              <Button loading={loading} className="w-24" onClick={handleLogout}>
                <Power /> Logout
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      )}
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="w-56 laptop:w-96">
          <p className="text-center font-moreSugar text-2xl font-bold laptop:text-5xl laptop:leading-[60px]">
            Welcome to my English Class !
          </p>
        </div>
        <div className="flex gap-10">
          <Link to="/material-definition">
            <img
              src={images.MATERIAL_BUTTON}
              alt="material-button"
              className="button-effect-clicked h-36 w-36 laptop:h-52 laptop:w-52"
            />
          </Link>
          <Link to="/quiz-menu">
            <img
              src={images.QUIZ_BUTTON}
              alt="material-button"
              className="button-effect-clicked h-36 w-36 laptop:h-52 laptop:w-52"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainMenu;

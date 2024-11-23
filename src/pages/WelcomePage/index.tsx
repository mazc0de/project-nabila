import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Power, Triangle } from "lucide-react";
import { useDispatch } from "react-redux";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useAppSelector } from "@/hooks/useAppSelector";
import { removeUser, saveUser } from "@/redux/reducer/userSlice";

import { icons } from "../../constant/icons";
import { images } from "../../constant/images";

const WelcomePage = () => {
  const dispatch = useDispatch();
  const user = useAppSelector((state) => state.user);

  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleForm = (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const name = formData.get("name") as string;

    setTimeout(() => {
      dispatch(saveUser({ ...user, name }));
      setOpenDialog(false);
      setLoading(false);
    }, 1000);
  };

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(removeUser());
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    if (user?.name?.length !== 0) {
      setOpenDialog(false);
    } else {
      setOpenDialog(true);
    }
  }, [user]);

  return (
    <div className="relative flex h-screen w-full flex-col items-center bg-welcome-page bg-cover bg-top p-5 tablet:justify-center laptop:justify-start laptop:bg-center">
      <Dialog open={openDialog}>
        <DialogContent className="shadow-card__generic-structure w-full bg-off-white-100 [&>button]:hidden">
          <DialogHeader className="">
            <DialogTitle className="text-center font-moreSugar">
              What's your name?
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={(e) => handleForm(e)}>
                <Input
                  name="name"
                  className="w-full border-blush-pink font-moreSugar focus-visible:ring-pink-400"
                  placeholder="Input your name"
                  required
                />
                <div className="mt-2 flex justify-center">
                  <Button loading={loading} className="w-24">
                    Save
                  </Button>
                </div>
              </form>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>

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
        <div className="mt-4">
          <img
            src={images.STAR_LOGO}
            alt="star-logo"
            className="bounce-image w-96 tablet:w-[450px] laptop:w-[550px]"
          />
        </div>
        <Link to="/main-menu">
          <img
            src={icons.BUTTON_PLAY}
            alt="play-button-icon"
            className="w-32 cursor-pointer duration-300 ease-in-out hover:scale-110 active:opacity-50 tablet:w-44 laptop:w-60"
          />
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;

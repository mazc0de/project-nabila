import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { useAppSelector } from "@/hooks/useAppSelector";
import { saveUser } from "@/redux/reducer/userSlice";

import { icons } from "../../constant/icons";
import { images } from "../../constant/images";
import { Navbar } from "@/components";

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

      <Navbar />
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

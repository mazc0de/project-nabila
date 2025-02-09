import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Power, Triangle, UserPen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/hooks/useAppSelector";
import { useState } from "react";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { removeUser } from "@/redux/reducer/userSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);

  const [loading, setLoading] = useState<boolean>(false);
  const [loadingProfile, setLoadingProfile] = useState<boolean>(false);

  const handleLogoutButton = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(removeUser());
      setLoading(false);
      navigate("/");
    }, 1000);
  };

  const handleProfileButton = () => {
    setLoadingProfile(true);
    setTimeout(() => {
      setLoadingProfile(false);
      navigate("/setting/profile");
    }, 1000);
  };

  return (
    <>
      {user.name?.length !== 0 && (
        <div className="flex gap-2 self-end">
          <p className="font-moreSugar text-base">
            Hi <span className="capitalize">{user.name}</span>!
          </p>
          <Popover>
            <PopoverTrigger className="transition duration-300 ease-in-out data-[state=closed]:rotate-180">
              <Triangle className="w-2.5 fill-black" />
            </PopoverTrigger>
            <PopoverContent className="mr-5 flex w-auto flex-col gap-2 p-2">
              <Button
                loadingColor="text-green-900"
                loading={loadingProfile}
                className="w-24 bg-mint-green hover:bg-mint-green/90 active:bg-mint-green"
                onClick={handleProfileButton}
              >
                <UserPen /> Profile
              </Button>
              <Button
                loading={loading}
                className="w-24"
                onClick={handleLogoutButton}
              >
                <Power /> Logout
              </Button>
            </PopoverContent>
          </Popover>
        </div>
      )}
    </>
  );
};

export default Navbar;

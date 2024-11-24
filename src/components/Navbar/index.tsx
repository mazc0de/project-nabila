import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Power, Triangle } from "lucide-react";
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

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(removeUser());
      setLoading(false);
      navigate("/");
    }, 1000);
  };

  return (
    <>
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
    </>
  );
};

export default Navbar;

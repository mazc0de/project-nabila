import { images } from "@/constant/images";
import { useAppSelector } from "@/hooks/useAppSelector";
import { SquarePen } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { saveUser } from "@/redux/reducer/userSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";

const Profile = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [label, setLabel] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>("");
  const [field, setField] = useState<string>("");

  const user = useAppSelector((state) => state.user);

  const handleUpdateProfile = (field: string) => {
    try {
      setOpenDialog(true);
      if (field === "name") {
        setField(field);
        setLabel("What's your name?");
        setPlaceholder("Input your name");
      } else if (field === "bio") {
        setField(field);
        setLabel("What's your bio?");
        setPlaceholder("Input your bio");
      } else if (field === "studentId") {
        setField(field);
        setLabel("What's your Student ID?");
        setPlaceholder("Input your student id");
      } else if (field === "instagramUsername") {
        setField(field);
        setLabel("What's your instagram?");
        setPlaceholder("Input your instagram username (@...)");
      } else if (field === "email") {
        setField(field);
        setLabel("What's your email?");
        setPlaceholder("Input your email");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleForm = (e: any, field: string) => {
    try {
      e.preventDefault();
      setLoading(true);

      const formData = new FormData(e.target);
      const inputField = formData.get(field) as string;

      if (field === "name") {
        setTimeout(() => {
          dispatch(saveUser({ ...user, name: inputField }));
          setOpenDialog(false);
          setLoading(false);
        }, 1000);
      } else if (field === "bio") {
        setTimeout(() => {
          dispatch(saveUser({ ...user, bio: inputField }));
          setOpenDialog(false);
          setLoading(false);
        }, 1000);
      } else if (field === "studentId") {
        setTimeout(() => {
          dispatch(saveUser({ ...user, studentId: inputField }));
          setOpenDialog(false);
          setLoading(false);
        }, 1000);
      } else if (field === "instagramUsername") {
        setTimeout(() => {
          dispatch(saveUser({ ...user, instagramUsername: inputField }));
          setOpenDialog(false);
          setLoading(false);
        }, 1000);
      } else if (field === "email") {
        setTimeout(() => {
          dispatch(saveUser({ ...user, email: inputField }));
          setOpenDialog(false);
          setLoading(false);
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex">
      <div>
        <img
          src={images.DEFAULT_PROFILE_PICTURE}
          alt="profile-picture"
          className="w-32 laptop:w-44"
        />
      </div>
      <div className="w-full pl-5">
        <div className="flex h-32 w-full justify-between overflow-y-scroll">
          <div className="w-3/6">
            {/* Name */}
            <div className="flex flex-col">
              <div className="flex items-center">
                <p className="font-moreSugar text-sm font-bold laptop:text-base">
                  Name
                </p>
                <div className="pl-1">
                  <SquarePen
                    width={12}
                    className="text-gray-400"
                    onClick={() => {
                      handleUpdateProfile("name");
                    }}
                  />
                </div>
              </div>
              <p className="font-moreSugar text-sm capitalize laptop:text-base">
                {user.name}
              </p>
            </div>
            {/* Bio */}
            <div className="flex flex-col">
              <div className="flex items-center">
                <p className="font-moreSugar text-sm font-bold laptop:text-base">
                  Bio
                </p>
                <div className="pl-1">
                  <SquarePen
                    width={12}
                    className="text-gray-400"
                    onClick={() => {
                      handleUpdateProfile("bio");
                    }}
                  />
                </div>
              </div>
              <p className="font-moreSugar text-sm capitalize laptop:text-base">
                {user.bio}
              </p>
            </div>
          </div>
          <div className="w-3/6 pl-4">
            {/* Student ID */}
            <div className="flex flex-col">
              <div className="flex items-center">
                <p className="font-moreSugar text-sm font-bold laptop:text-base">
                  Student ID
                </p>
                <div className="pl-1">
                  <SquarePen
                    width={12}
                    className="text-gray-400"
                    onClick={() => {
                      handleUpdateProfile("studentId");
                    }}
                  />
                </div>
              </div>
              <p className="font-moreSugar text-sm capitalize laptop:text-base">
                {user.studentId}
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <p className="font-moreSugar text-sm font-bold laptop:text-base">
                  Instagram
                </p>
                <div className="pl-1">
                  <SquarePen
                    width={12}
                    className="text-gray-400"
                    onClick={() => {
                      handleUpdateProfile("instagramUsername");
                    }}
                  />
                </div>
              </div>
              <p className="font-moreSugar text-sm capitalize laptop:text-base">
                {user.instagramUsername}
              </p>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <p className="font-moreSugar text-sm font-bold laptop:text-base">
                  Email
                </p>
                <div className="pl-1">
                  <SquarePen
                    width={12}
                    className="text-gray-400"
                    onClick={() => {
                      handleUpdateProfile("email");
                    }}
                  />
                </div>
              </div>
              <p className="font-moreSugar text-sm capitalize laptop:text-base">
                {user.email}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="shadow-card__generic-structure w-full bg-off-white-100 [&>button]:hidden">
          <DialogHeader className="">
            <DialogTitle className="text-center font-moreSugar">
              {label}
            </DialogTitle>
            <DialogDescription>
              <form onSubmit={(e) => handleForm(e, field)}>
                <Input
                  name={field}
                  className="w-full border-blush-pink font-moreSugar focus-visible:ring-pink-400"
                  placeholder={placeholder}
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
    </div>
  );
};

export default Profile;

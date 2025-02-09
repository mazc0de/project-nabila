import { useAppSelector } from "@/hooks/useAppSelector";
import { SquarePen, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { saveUser } from "@/redux/reducer/userSlice";
import { useAppDispatch } from "@/hooks/useAppDispatch";
import { FileUploader } from "@/components";
import { images } from "@/constant/images";
import { UserType } from "@/types";

const Profile = () => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState<boolean>(false);
  const [loadingCancel, setLoadingCancel] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [label, setLabel] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>("");
  const [field, setField] = useState<any>();
  const [profilePicture, setProfilePicture] = useState<string>("");
  const [formValues, setFormValues] = useState<{ [key: string]: string }>({});

  const user: any = useAppSelector((state) => state.user);

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleForm = (
    e: React.FormEvent<HTMLFormElement>,
    field: keyof UserType,
  ) => {
    try {
      e.preventDefault();
      setLoading(true);

      const inputField = formValues[field] || "";
      setTimeout(() => {
        dispatch(saveUser({ ...user, [field]: inputField }));
        setOpenDialog(false);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = () => {
    setLoadingCancel(true);
    setTimeout(() => {
      setFormValues({ ...formValues, [field]: user[field] || "" });
      setOpenDialog(false);
      setLoadingCancel(false);
    }, 500);
  };

  const handleDeleteProfilePicture = () => {
    localStorage.removeItem("profilePicture");
    setProfilePicture("");
  };

  useEffect(() => {
    const profilePicture = localStorage.getItem("profilePicture");
    if (profilePicture) {
      setProfilePicture(profilePicture);
    } else {
      setProfilePicture(images.DEFAULT_PROFILE_PICTURE);
    }
  }, [profilePicture]);

  useEffect(() => {
    if (user) {
      setFormValues({
        name: user.name || "",
        bio: user.bio || "",
        studentId: user.studentId || "",
        instagramUsername: user.instagramUsername || "",
        email: user.email || "",
      });
    }
  }, [user]);

  return (
    <div className="w-full flex-col items-center justify-center lg:flex lg:flex-row lg:items-start lg:justify-between">
      <div className="mb-3 flex flex-col items-center justify-center lg:w-1/3 lg:items-start">
        <div className="relative w-40">
          <img
            src={profilePicture}
            alt="profile-picture"
            className="aspect-[3/4] w-40 rounded-sm object-cover laptop:w-44"
          />
          {profilePicture !== images.DEFAULT_PROFILE_PICTURE && (
            <div
              className="absolute right-0 top-0 rounded-full bg-gray-200 p-1"
              onClick={handleDeleteProfilePicture}
            >
              <Trash2 className="h-3 w-3 text-red-500" />
            </div>
          )}
        </div>
        <div className="pt-2">
          <FileUploader />
        </div>
      </div>
      <div className="mt-3 lg:mt-0 lg:w-2/3">
        {/* Name */}
        <div className="mb-3 flex flex-col">
          <div className="flex">
            <p className="font-moreSugar text-xl font-bold laptop:text-base">
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
          <p className="font-moreSugar text-xl capitalize laptop:text-base">
            {user?.name !== "" ? user?.name : "-"}
          </p>
        </div>
        {/* Bio */}
        <div className="mb-3 flex flex-col">
          <div className="flex">
            <p className="font-moreSugar text-xl font-bold laptop:text-base">
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
          <p className="whitespace-pre-line font-moreSugar text-xl capitalize laptop:text-base">
            {user?.bio !== "" ? user?.bio : "-"}
          </p>
        </div>
        {/* Student ID */}
        <div className="mb-3 flex flex-col">
          <div className="flex">
            <p className="font-moreSugar text-xl font-bold laptop:text-base">
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
          <p className="font-moreSugar text-xl capitalize laptop:text-base">
            {user?.studentId !== "" ? user?.studentId : "-"}
          </p>
        </div>
        {/*  Instagram */}
        <div className="mb-3 flex flex-col">
          <div className="flex">
            <p className="font-moreSugar text-xl font-bold laptop:text-base">
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
          <p className="font-moreSugar text-xl capitalize laptop:text-base">
            {user?.instagramUsername !== "" ? user?.instagramUsername : "-"}
          </p>
        </div>
        {/* Email */}
        <div className="flex flex-col">
          <div className="flex">
            <p className="font-moreSugar text-xl font-bold laptop:text-base">
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
          <p className="font-moreSugar text-xl capitalize laptop:text-base">
            {user?.email !== "" ? user?.email : "-"}
          </p>
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
                {field !== "bio" ? (
                  <Input
                    name={field}
                    className="w-full border-blush-pink font-moreSugar focus-visible:ring-pink-400"
                    placeholder={placeholder}
                    required
                    value={formValues[field] || ""}
                    onChange={handleInputChange}
                  />
                ) : (
                  <Textarea
                    name={field}
                    placeholder={placeholder}
                    className="w-full border-blush-pink font-moreSugar focus-visible:ring-pink-400"
                    value={formValues[field] || ""}
                    onChange={handleInputChange}
                  />
                )}
                <div className="mt-2 flex justify-center">
                  <div className="mr-1">
                    <Button
                      loading={loading}
                      className="w-24 bg-mint-green hover:bg-mint-green/90 active:bg-mint-green"
                      loadingColor="text-green-900"
                    >
                      Save
                    </Button>
                  </div>
                  <div className="ml-1">
                    <Button
                      loading={loadingCancel}
                      className="w-24"
                      onClick={handleCancel}
                    >
                      Cancel
                    </Button>
                  </div>
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

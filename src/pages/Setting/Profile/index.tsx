import { images } from "@/constant/images";
import { useAppSelector } from "@/hooks/useAppSelector";

const Profile = () => {
  const user = useAppSelector((state) => state.user);

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
          <div className="w-2/3">
            {/* Name */}
            <div className="flex flex-col">
              <p className="font-moreSugar text-sm font-bold laptop:text-base">
                Name
              </p>
              <p className="font-moreSugar text-sm capitalize laptop:text-base">
                {user.name}
              </p>
            </div>
            {/* Bio */}
            <div className="flex flex-col">
              <p className="font-moreSugar text-sm font-bold laptop:text-base">
                Bio
              </p>
              <p className="font-moreSugar text-sm capitalize laptop:text-base">
                {user.bio}
              </p>
            </div>
          </div>
          <div className="w-1/3 pl-4">
            {/* Student ID */}
            <div className="flex flex-col">
              <p className="font-moreSugar text-sm font-bold laptop:text-base">
                Student ID
              </p>
              <p className="font-moreSugar text-sm capitalize laptop:text-base">
                {user.studentId}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-moreSugar text-sm font-bold laptop:text-base">
                Instagram
              </p>
              <p className="font-moreSugar text-sm capitalize laptop:text-base">
                {user.instagramUsername}
              </p>
            </div>
            <div className="flex flex-col">
              <p className="font-moreSugar text-sm font-bold laptop:text-base">
                Email
              </p>
              <p className="font-moreSugar text-sm capitalize laptop:text-base">
                {user.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

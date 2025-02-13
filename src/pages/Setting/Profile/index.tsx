import { SquareArrowUpRight } from "lucide-react";
import { images } from "@/constant/images";

const Profile = () => {
  return (
    <div className="w-full lg:flex">
      <div className="mx-auto w-40 lg:mx-10">
        <img
          src={images.SHAFA_ALYANABILA}
          alt="profile-picture"
          className="w-40 rounded-sm object-cover lg:w-44"
        />
      </div>
      <div className="mt-2">
        <p className="text-crimson-red font-moreSugar font-bold lg:text-lg">
          Shafa Alyanabila
        </p>
        <p className="text-crimson-red font-moreSugar font-bold lg:text-lg">
          F2B021008
        </p>
        <p className="text-crimson-red font-moreSugar font-bold lg:text-lg">
          English Education Department
        </p>
        <p className="text-crimson-red font-moreSugar font-bold lg:text-lg">
          Faculty of Education and Humanities
        </p>
        <p className="text-crimson-red font-moreSugar font-bold lg:text-lg">
          Universitas Muhammadiyah Semarang
        </p>
        <p className="text-crimson-red flex font-moreSugar font-bold lg:text-lg">
          Instagram:
          <a
            href="https://www.instagram.com/shafalyan"
            className="ml-1 flex underline"
            target="_blank"
          >
            @shafalyan{" "}
            <SquareArrowUpRight className="text-crimson-red ml-1 w-3 text-sm" />
          </a>
        </p>
        <p className="text-crimson-red flex font-moreSugar font-bold lg:text-lg">
          Email :
          <a
            href="mailto:shafaalya057@gmail.com"
            className="ml-1 flex underline"
            target="_blank"
          >
            shafaalya057@gmail.com{" "}
            <SquareArrowUpRight className="text-crimson-red ml-1 w-3 text-sm" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Profile;

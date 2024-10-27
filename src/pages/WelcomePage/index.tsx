import { icons } from "../../constant/icons";
import { images } from "../../constant/images";

const WelcomePage = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-title-page bg-cover bg-center">
      <img src={images.STAR_LOGO} alt="star-logo" className="w-96" />
      <p className="text-center font-copyduck text-lg text-red-400">
        <span className="text-[#8FE4CD]">Descriptive</span>{" "}
        <span className="text-[#84DCE0]">Text</span>{" "}
        <span className="text-[#FFD2D6]">Application</span>{" "}
        <span className="text-[#FED38E]">Learning</span>
      </p>
      <img src={icons.PLAY_BUTTON} alt="play-button-icon" className="w-32" />
    </div>
  );
  // <div className="flex h-screen w-full items-center justify-center bg-title-page bg-cover bg-center">
  //   <div className="flex flex-col items-center justify-center gap-14">
  //     <div className="flex flex-col items-center justify-center">
  //       <img src={images.STAR_LOGO} alt="star-logo" className="w-96" />
  //       {/* <p className="font-copyduck text-[200px] leading-[180px] text-red-400">
  //         {"<"}STAR{">"}
  //       </p> */}
  //       <p className="text-center font-copyduck text-lg text-red-400">
  //         Descriptive Text Application Learning
  //       </p>
  //     </div>
  //     <div>
  //       <img
  //         src={icons.PLAY_BUTTON}
  //         alt="play-button-icon"
  //         className="w-32"
  //       />
  //     </div>
  //   </div>
  // </div>
};

export default WelcomePage;

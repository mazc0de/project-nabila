import { Outlet } from "react-router-dom";
import { useEffect, useRef } from "react";

const Layout = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current) {
        audioRef.current.play().catch((error) => {
          console.log("Autoplay prevented:", error);
        });
      }
    };

    // Tambahkan event listener di window
    window.addEventListener("click", playAudio, { once: true });
    window.addEventListener("touchstart", playAudio, { once: true });

    return () => {
      window.removeEventListener("click", playAudio);
      window.removeEventListener("touchstart", playAudio);
    };
  }, []);

  return (
    <>
      <audio ref={audioRef} src="/public/backsound.mp3" loop className="hidden">
        Your browser does not support the audio element.
      </audio>

      <div className="flex h-screen w-full flex-col items-center justify-center bg-black tablet:hidden">
        <div className="phone"></div>
        <div className="mt-10">
          <p className="mx-14 text-center text-white">
            Please rotate your device or use a laptop for a better experience!
          </p>
        </div>
      </div>
      <div className="hidden tablet:block">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

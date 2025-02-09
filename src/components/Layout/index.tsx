import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ROUTES from "@/constant/routes";
import Navbar from "../Navbar";

const Layout = () => {
  const { pathname } = useLocation();

  const audioRef = useRef<HTMLAudioElement>(null);
  const [bgImage, setBgImage] = useState<string>("");

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

  useEffect(() => {
    if (pathname === ROUTES.HOME) {
      setBgImage("bg-welcome-page");
    } else if (pathname === ROUTES.MAIN_MENU) {
      setBgImage("bg-main-menu");
    } else if (pathname === ROUTES.MATERIAL_DEFINITION) {
      setBgImage("bg-material-definition");
    } else if (pathname === ROUTES.GENERIC_STRUCTURE) {
      setBgImage("bg-generic-structure");
    } else if (pathname === ROUTES.LANGUAGE_FEATURES) {
      setBgImage("bg-language-features");
    } else if (/^\/material\/[^/]+$/.test(pathname)) {
      setBgImage("bg-language-features");
    }
  }, [location.pathname]);

  return (
    <>
      <audio ref={audioRef} src="/backsound.mp3" loop className="hidden">
        Your browser does not support the audio element.
      </audio>

      <div
        className={`${bgImage} flex h-screen w-full flex-col bg-cover bg-center`}
      >
        <Navbar />
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

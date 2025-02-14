import { icons } from "@/constant/icons";
import { materialData } from "@/constant/materialText";
import ROUTES from "@/constant/routes";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const MaterialText = () => {
  const { id } = useParams<{ id: string }>();
  const currentId = Number(id);

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchMaterial = (id: number) => {
    try {
      setLoading(true);
      setData(null);
      const findMaterial = materialData.find((item: any) => item?.id === id);
      setTimeout(() => {
        setData(findMaterial);
        setLoading(false);
      }, 1000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMaterial(currentId);
  }, [id]);

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-cover bg-center p-5">
      <div className="shadow-card__generic-structure h-[480px] w-full flex-col overflow-scroll rounded-lg bg-off-white-100 p-5 lg:w-[650px]">
        {loading && data === null ? (
          <div className="flex h-full w-full items-center justify-center">
            <Loader2 className={`h-10 w-10 animate-spin text-blush-pink`} />
          </div>
        ) : (
          <>
            <p className="mb-2 text-center font-moreSugar text-2xl font-bold">
              {data?.title}
            </p>
            <img
              src={data?.imageUrl}
              alt=""
              className={`mx-auto mb-5 rounded-lg ${data?.id === 5 || data?.id === 6 ? "w-60 lg:w-80" : "w-44"}`}
            />
            <p className="text-center font-moreSugar text-xl font-bold">
              Identification
            </p>
            <p className="mb-2 whitespace-pre-line text-justify font-moreSugar text-lg">
              {data?.identification}
            </p>
            <p className="text-center font-moreSugar text-xl font-bold">
              Description
            </p>
            <p className="mb-2 whitespace-pre-line text-justify font-moreSugar text-lg">
              {data?.description}
            </p>
          </>
        )}
      </div>
      <div className="mt-5 flex justify-center">
        <div className="mr-1">
          <Link
            to={`${currentId > 1 ? `/material/${currentId - 1}` : ROUTES.LANGUAGE_FEATURES}`}
          >
            <img
              src={icons.BUTTON_PREV}
              alt="prev-button"
              className="button-effect-clicked h-[55px] w-[150px]"
            />
          </Link>
        </div>
        <div className="ml-1">
          {currentId < 8 && (
            <Link to={`/material/${currentId + 1}`}>
              <img
                src={icons.BUTTON_NEXT}
                alt="next-button"
                className="button-effect-clicked h-[55px] w-[150px]"
              />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MaterialText;

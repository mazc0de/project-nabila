import { sourceData } from "@/constant/sourceData";

const Source = () => {
  return (
    <div className="overflow-y-scroll">
      {sourceData.map((item) => {
        return (
          <div className="last:mt-2">
            <p className="font-moreSugar text-base font-bold" key={item?.id}>
              {item?.title}
            </p>
            <ul className="ml-6 list-disc">
              {item?.list?.map((item) => {
                return (
                  <li key={item?.id}>
                    <p className="font-moreSugar text-base">{item?.label}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default Source;

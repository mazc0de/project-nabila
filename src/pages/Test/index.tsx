import {
  descriptiveTextCriteria,
  descriptiveTextCriteriaType,
  subDescriptionType,
} from "@/constant/descriptiveTextCriteria";

const Test = () => {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-cover bg-center p-5">
      <div className="shadow-card__material-definition mt-5 flex h-[480px] flex-col gap-3 overflow-scroll rounded-lg bg-vanilla-cream p-5 lg:h-auto lg:w-[650px]">
        <p className="text-center font-moreSugar text-base font-bold lg:text-xl">
          Pre-Test & Post-Test: Make a Descriptive Text
        </p>
        <div>
          <form>
            <div className="flex items-center">
              <div className="w-4/12">
                <label htmlFor="name" className="font-moreSugar">
                  Name
                </label>
              </div>
              <div className="w-1/12">
                <span className="ml-5 font-moreSugar">:</span>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="ml-1 w-full border-b-2 border-black bg-transparent font-moreSugar focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-4/12">
                <label htmlFor="number" className="font-moreSugar">
                  Number
                </label>
              </div>
              <div className="w-1/12">
                <span className="ml-5 font-moreSugar">:</span>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  id="number"
                  name="number"
                  className="ml-1 w-full border-b-2 border-black bg-transparent font-moreSugar focus:outline-none"
                />
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-4/12">
                <label htmlFor="class" className="font-moreSugar">
                  Class
                </label>
              </div>
              <div className="w-1/12">
                <span className="ml-5 font-moreSugar">:</span>
              </div>
              <div className="w-full">
                <input
                  type="text"
                  id="class"
                  name="class"
                  className="ml-1 w-full border-b-2 border-black bg-transparent font-moreSugar focus:outline-none"
                />
              </div>
            </div>
          </form>
          <div className="my-2">
            <p className="text-left font-moreSugar lg:text-lg">
              Please write a Descriptive Text based on the criteria below:
            </p>
            <div>
              {descriptiveTextCriteria?.map(
                (item: descriptiveTextCriteriaType) => {
                  return (
                    <>
                      {" "}
                      <div className="flex">
                        <p className="mr-1 text-left font-moreSugar lg:text-lg">
                          {item?.id}.
                        </p>
                        <p className="text-left font-moreSugar lg:text-lg">
                          {item?.description}
                        </p>
                      </div>
                      <div>
                        {item?.subDescription?.map(
                          (item: subDescriptionType) => {
                            return (
                              <div className="ml-3 flex">
                                <p className="mr-1 text-left font-moreSugar lg:text-lg">
                                  {item?.id}.
                                </p>
                                <p className="text-left font-moreSugar lg:text-lg">
                                  {item?.description}
                                </p>
                              </div>
                            );
                          },
                        )}
                      </div>
                    </>
                  );
                },
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;

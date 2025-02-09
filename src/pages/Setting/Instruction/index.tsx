import { instructionData } from "@/constant/instructionData";

const Instruction = () => {
  return (
    <div>
      {instructionData.map((item: any) => {
        return (
          <div
            className="my-3 flex items-center first:mt-0 last:mb-0"
            key={item?.id}
          >
            <img
              src={item?.imageUrl}
              alt={item?.title}
              className="h-auto w-24"
            />
            <div className="ml-3">
              <p className="font-moreSugar font-bold">{item?.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Instruction;

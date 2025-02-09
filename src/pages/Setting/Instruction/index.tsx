import { instructionData } from "@/constant/instructionData";

const Instruction = () => {
  return (
    <div>
      {instructionData.map((item: any) => {
        return (
          <div className="flex items-center">
            <img
              src={item?.imageUrl}
              alt={item?.title}
              className="h-auto w-36"
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

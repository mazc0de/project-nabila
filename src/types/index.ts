export type OptionType = {
  id: string;
  text: string;
};
export type QuestionType = {
  questionId: string | number;
  questionText: string;
  descriptionText: string | undefined | null;
  options: OptionType[];
  correctAnswer: string;
};

export type PapuaWoodenHousesParagraph = {
  p1: string;
  p2: string;
  p3: string;
  p4: string;
};

export type PapuaWoodenHouses = {
  title: string;
  paragraph: PapuaWoodenHousesParagraph;
};

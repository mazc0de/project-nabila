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

export type PapuaWoodenHousesParagraphType = {
  p1: string;
  p2: string;
  p3: string;
  p4: string;
};

export type PapuaWoodenHousesType = {
  title: string;
  paragraph: PapuaWoodenHousesParagraphType;
};

export type UserAnswerType = {
  questionId: string | number;
  userAnswer: string | boolean;
};

export type ExplanatoryTextType = {
  id: number;
  title: string;
  image: string;
  description: string;
};

export type TrueOrFalseQuestionType = {
  id: string;
  question: string;
  correctAnswer: boolean;
};

export type UserType = {
  name: string;
  multipleChoiceValue: number;
  TrueOrFalseValue: number;
};

export type descriptiveTextCriteriaType = {
  id: number;
  description: string;
  subDescription: subDescriptionType[];
};

export type subDescriptionType = {
  id: string;
  description: string;
};

export const descriptiveTextCriteria: descriptiveTextCriteriaType[] = [
  {
    id: 1,
    description: "The descriptive text must consist of at least 150 words",
    subDescription: [],
  },
  {
    id: 2,
    description:
      "The descriptive text must pay attention to descriptive generic structure:",
    subDescription: [
      {
        id: "a",
        description: "Identification",
      },
      {
        id: "b",
        description: "Description",
      },
    ],
  },
  {
    id: 3,
    description: "Choose one of the topics and sub-topics below:",
    subDescription: [
      {
        id: "a",
        description: "People; example: artists, singers, idols, etc..",
      },
      {
        id: "b",
        description:
          "Animal; example pet, cat, dog, bird, elephant, tiger, etc..",
      },
      {
        id: "c",
        description:
          "Things;  example: foods, school stuff, electronic devices, etc..",
      },
      {
        id: "d",
        description: "Place; example: tourism place, history place, etc..",
      },
    ],
  },
];

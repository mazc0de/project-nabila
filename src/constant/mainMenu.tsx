import { images } from "./images";
import ROUTES from "./routes";

export const mainMenu = [
  {
    id: 1,
    imageUrl: images.MATERIAL_BUTTON,
    link: ROUTES.MATERIAL_DEFINITION,
    title: "material-definition",
  },
  {
    id: 2,
    imageUrl: images.QUIZ_BUTTON,
    link: ROUTES.QUIZ,
    title: "quiz",
  },
  {
    id: 3,
    imageUrl: images.TEST_BUTTON,
    link: ROUTES.TEST,
    title: "test",
  },
];

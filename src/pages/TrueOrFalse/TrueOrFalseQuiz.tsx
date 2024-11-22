import { Link, useParams } from "react-router-dom";
import { icons } from "../../constant/icons";
import { trueOrFalseQuestion } from "./trueOrFalseQuestion";
import { TrueOrFalseQuestionType } from "../../types";
import { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { saveTrueOrFalseAnswer } from "../../redux/reducer/userTrueOrFalseAnswerSlice";

const TrueOrFalseQuiz = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const userAnswer = useAppSelector((state) => state.userTrueOrFalseAnswer);

  const [question, setQuestion] = useState<TrueOrFalseQuestionType>();

  const fetchQuestion = () => {
    try {
      const response = trueOrFalseQuestion?.find(
        (item: TrueOrFalseQuestionType) => item?.id?.toString() === id,
      );
      setQuestion(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveTrueOrFalse = (questionId: any, option: boolean) => {
    const answer = { questionId, userAnswer: option };
    dispatch(saveTrueOrFalseAnswer(answer));
  };

  useEffect(() => {
    fetchQuestion();
  }, [id]);

  return (
    <div className="relative flex h-screen w-full flex-col bg-grass bg-cover bg-bottom p-5">
      <div className="absolute">
        <Link to="/main-menu">
          <img
            src={icons.BUTTON_HOME}
            alt="home-button"
            className="button-effect-clicked w-10"
          />
        </Link>
      </div>
      <div className="flex h-full w-full items-center justify-center">
        <div className="shadow-card__generic-structure flex h-20 w-1/2 flex-col items-center justify-center gap-3 rounded-lg bg-off-white-100 p-3">
          <p className="font-moreSugar text-sm">{question?.question}</p>
          <div className="flex gap-5">
            <div
              className={`hover:bg-mint-green/50 flex cursor-pointer gap-2 rounded-full ${
                userAnswer?.some(
                  (item) =>
                    item?.questionId === question?.id?.toString() &&
                    item?.userAnswer,
                )
                  ? "bg-mint-green/50"
                  : ""
              }`}
              onClick={() => handleSaveTrueOrFalse(question?.id, true)}
            >
              <img src={icons.THUMB_UP} alt="thumb-up" className="h-5 w-5" />
              <p className="font-moreSugar text-sm">TRUE</p>
            </div>
            <div
              className={`hover:bg-blush-pink/50 flex cursor-pointer gap-2 rounded-full ${
                userAnswer?.some(
                  (item) =>
                    item?.questionId === question?.id?.toString() &&
                    !item?.userAnswer,
                )
                  ? "bg-blush-pink/50"
                  : ""
              }`}
              onClick={() => handleSaveTrueOrFalse(question?.id, false)}
            >
              <img src={icons.THUMB_DOWN} alt="thumb-up" className="h-5 w-5" />
              <p className="font-moreSugar text-sm">FALSE</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-10">
        <Link
          to={`/quiz/true-or-false/${Number(id) === 1 ? "" : Number(id) - 1}`}
        >
          <img
            src={icons.BUTTON_PREV}
            alt="prev-button"
            className="active: button-effect-clicked h-[35px] w-[95px]"
          />
        </Link>
        {Number(id) < 10 && (
          <Link to={`/quiz/true-or-false/${Number(id) + 1}`}>
            <img
              src={icons.BUTTON_NEXT}
              alt="next-button"
              className="button-effect-clicked h-[35px] w-[95px]"
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default TrueOrFalseQuiz;

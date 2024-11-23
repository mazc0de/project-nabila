import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { icons } from "../../constant/icons";
import { OptionType, QuestionType } from "../../types";
import { question6to8 } from "./question6to8";
import { multipleChoiceQuestion } from "./multipleChoiceQuestion";
import { question10to11 } from "./question10to11";
import { question12to14 } from "./question12to14";
import { question15to16 } from "./question15to16";
import { question17to19 } from "./question17to19";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { saveMultipleChoiceAnswer } from "../../redux/reducer/userMultipleChoiceAnswerSlice";

const MultipleChoice = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const userAnswer = useAppSelector((state) => state.userMultipleChoiceAnswer);

  const [question, setQuestion] = useState<QuestionType>();

  const fetchQuestion = (id: any) => {
    try {
      const response = multipleChoiceQuestion.find(
        (item: QuestionType) => item.questionId === id,
      );
      setQuestion(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSaveMultipleChoice = (option: OptionType, questionId: any) => {
    const answer = { questionId, userAnswer: option.id };
    dispatch(saveMultipleChoiceAnswer(answer));
  };

  useEffect(() => {
    fetchQuestion(id);
  }, [id]);

  return (
    <div className="relative flex h-screen w-full bg-grass bg-cover bg-bottom p-5">
      <div className="absolute">
        <Link to="/main-menu">
          <img
            src={icons.BUTTON_HOME}
            alt="home-button"
            className="button-effect-clicked w-10"
          />
        </Link>
      </div>

      {/* Question number 1-5 and 9,20 */}
      {(Number(id) >= 1 && Number(id) <= 5) ||
      Number(id) === 9 ||
      Number(id) === 20 ? (
        <div className="flex h-full w-full flex-col items-center justify-center gap-5">
          <div
            className={`shadow-card__generic-structure flex h-64 flex-col gap-1 rounded-lg bg-off-white-100 p-3 ${Number(id) >= 1 && Number(id) <= 5 && "w-[450px]"} ${Number(id) === 9 && "w-[680px]"} ${Number(id) === 20 && "w-[700px]"}`}
          >
            <p className="font-moreSugar text-sm">
              <span className="font-bold">{question?.questionId}.</span>{" "}
              {question?.questionText}
            </p>
            {question?.descriptionText?.length !== 0 && (
              <p className="font-moreSugar text-sm">
                {question?.descriptionText}
              </p>
            )}
            <div className="ml-5 flex flex-col gap-1">
              {question?.options?.map((option: OptionType) => {
                const isSelectedOption = userAnswer.some(
                  (item) =>
                    item.questionId === question.questionId &&
                    item.userAnswer === option.id,
                );
                return (
                  <div
                    key={option?.id}
                    className="group flex"
                    onClick={() =>
                      handleSaveMultipleChoice(option, question?.questionId)
                    }
                  >
                    <div className="w-8">
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full transition duration-300 group-hover:bg-green-400 ${isSelectedOption ? "bg-green-400" : "bg-red-400"}`}
                      >
                        <p className="font-moreSugar text-xs leading-none text-white">
                          {option?.id}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`w-full cursor-pointer rounded-full transition duration-300 group-hover:bg-red-400/20 ${isSelectedOption ? "bg-red-400/20" : ""}`}
                    >
                      <p className="font-moreSugar text-xs">{option?.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-center gap-10">
            {Number(id) !== 1 && (
              <Link to={`/quiz/multiple-choice/${Number(id) - 1}`}>
                <img
                  src={icons.BUTTON_PREV}
                  alt="prev-button"
                  className="active: button-effect-clicked h-[35px] w-[95px]"
                />
              </Link>
            )}
            {Number(id) !== 20 ? (
              <Link to={`/quiz/multiple-choice/${Number(id) + 1}`}>
                <img
                  src={icons.BUTTON_NEXT}
                  alt="next-button"
                  className="button-effect-clicked h-[35px] w-[95px]"
                />
              </Link>
            ) : (
              <Link to={`/quiz/multiple-choice/${Number(id) + 1}`}>
                <img
                  src={icons.BUTTON_FINISH}
                  alt="next-button"
                  className="button-effect-clicked h-[35px] w-[95px]"
                />
              </Link>
            )}
          </div>
        </div>
      ) : null}

      {/* Question number 6-8 */}
      {Number(id) >= 6 && Number(id) <= 8 && (
        <div className="flex h-full w-full items-start justify-center gap-5 pt-10">
          <div className="shadow-card__generic-structure flex h-64 w-1/2 flex-col gap-1 rounded-lg bg-off-white-100 p-3">
            <p className="font-moreSugar text-xs font-bold">
              Look at the following text to answer questions 6-8!
            </p>
            <p className="text-center font-moreSugar text-sm font-bold">
              {question6to8?.title}
            </p>
            <div className="overflow-scroll">
              {Object.entries(question6to8?.paragraph || {}).map(
                ([key, value]) => (
                  <p key={key} className="indent-5 font-moreSugar text-xs">
                    {value}
                  </p>
                ),
              )}
            </div>
          </div>
          <div className="flex w-1/2 flex-col gap-5">
            <div className="shadow-card__generic-structure flex h-48 flex-col gap-1 rounded-lg bg-off-white-100 p-3">
              <p className="font-moreSugar text-sm">
                <span className="font-bold">{question?.questionId}. </span>
                {question?.questionText}
              </p>
              <div className="ml-5 flex flex-col gap-1">
                {question?.options?.map((option: OptionType) => {
                  const isSelectedOption = userAnswer.some(
                    (item) =>
                      item.questionId === question.questionId &&
                      item.userAnswer === option.id,
                  );
                  return (
                    <div
                      key={option?.id}
                      className="group flex"
                      onClick={() =>
                        handleSaveMultipleChoice(option, question?.questionId)
                      }
                    >
                      <div className="w-8">
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full transition duration-300 group-hover:bg-green-400 ${isSelectedOption ? "bg-green-400" : "bg-red-400"}`}
                        >
                          <p className="font-moreSugar text-xs leading-none text-white">
                            {option?.id}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-full cursor-pointer rounded-full transition duration-300 group-hover:bg-red-400/20 ${isSelectedOption ? "bg-red-400/20" : ""}`}
                      >
                        <p className="font-moreSugar text-xs">{option?.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center gap-10">
              {Number(id) !== 1 && (
                <Link to={`/quiz/multiple-choice/${Number(id) - 1}`}>
                  <img
                    src={icons.BUTTON_PREV}
                    alt="prev-button"
                    className="active: button-effect-clicked h-[35px] w-[95px]"
                  />
                </Link>
              )}
              <Link to={`/quiz/multiple-choice/${Number(id) + 1}`}>
                <img
                  src={icons.BUTTON_NEXT}
                  alt="next-button"
                  className="button-effect-clicked h-[35px] w-[95px]"
                />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Question number 10 */}
      {Number(id) === 10 && (
        <div className="flex h-full w-full items-start justify-center gap-5 pt-10">
          <div className="shadow-card__generic-structure flex h-64 w-1/2 flex-col gap-1 rounded-lg bg-off-white-100 p-3">
            <p className="font-moreSugar text-xs font-bold">
              Look at the following text to answer questions 10-11!
            </p>
            <div className="overflow-scroll">
              <p className="indent-5 font-moreSugar text-sm">
                {question10to11}
              </p>
            </div>
          </div>
          <div className="flex w-1/2 flex-col gap-5">
            <div className="shadow-card__generic-structure flex h-52 flex-col gap-1 rounded-lg bg-off-white-100 p-3">
              <p className="font-moreSugar text-sm">
                <span className="font-bold">{question?.questionId}. </span>
                {question?.questionText}
              </p>
              {question?.descriptionText?.length !== 0 && (
                <p className="font-moreSugar text-sm">
                  {question?.descriptionText}
                </p>
              )}
              <div className="ml-5 flex flex-col gap-1">
                {question?.options?.map((option: OptionType) => {
                  const isSelectedOption = userAnswer.some(
                    (item) =>
                      item.questionId === question.questionId &&
                      item.userAnswer === option.id,
                  );
                  return (
                    <div
                      key={option?.id}
                      className="group flex"
                      onClick={() =>
                        handleSaveMultipleChoice(option, question?.questionId)
                      }
                    >
                      <div className="w-8">
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full transition duration-300 group-hover:bg-green-400 ${isSelectedOption ? "bg-green-400" : "bg-red-400"}`}
                        >
                          <p className="font-moreSugar text-xs leading-none text-white">
                            {option?.id}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-full cursor-pointer rounded-full transition duration-300 group-hover:bg-red-400/20 ${isSelectedOption ? "bg-red-400/20" : ""}`}
                      >
                        <p className="font-moreSugar text-xs">{option?.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center gap-10">
              {Number(id) !== 1 && (
                <Link to={`/quiz/multiple-choice/${Number(id) - 1}`}>
                  <img
                    src={icons.BUTTON_PREV}
                    alt="prev-button"
                    className="active: button-effect-clicked h-[35px] w-[95px]"
                  />
                </Link>
              )}
              <Link to={`/quiz/multiple-choice/${Number(id) + 1}`}>
                <img
                  src={icons.BUTTON_NEXT}
                  alt="next-button"
                  className="button-effect-clicked h-[35px] w-[95px]"
                />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Question number 11 */}
      {Number(id) === 11 && (
        <div className="flex h-full w-full items-start justify-center gap-5 pt-10">
          <div className="shadow-card__generic-structure flex h-64 w-1/2 flex-col gap-1 rounded-lg bg-off-white-100 p-3">
            <p className="font-moreSugar text-xs font-bold">
              Look at the following text to answer questions 10-11!
            </p>
            <div className="overflow-scroll">
              <p className="indent-5 font-moreSugar text-sm">
                {question10to11}
              </p>
            </div>
          </div>
          <div className="flex w-1/2 flex-col gap-5">
            <div className="shadow-card__generic-structure flex h-52 flex-col gap-1 rounded-lg bg-off-white-100 p-3">
              <p className="font-moreSugar text-sm">
                <span className="font-bold">{question?.questionId}. </span>“
                <span className="underline">Inadequate</span> conditions can not
                only cause stress but also affect their growth.”,
              </p>
              {question?.descriptionText?.length !== 0 && (
                <p className="font-moreSugar text-sm">
                  {question?.descriptionText}
                </p>
              )}
              <div className="ml-5 flex flex-col gap-1">
                {question?.options?.map((option: OptionType) => {
                  const isSelectedOption = userAnswer.some(
                    (item) =>
                      item.questionId === question.questionId &&
                      item.userAnswer === option.id,
                  );
                  return (
                    <div
                      key={option?.id}
                      className="group flex"
                      onClick={() =>
                        handleSaveMultipleChoice(option, question?.questionId)
                      }
                    >
                      <div className="w-8">
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full transition duration-300 group-hover:bg-green-400 ${isSelectedOption ? "bg-green-400" : "bg-red-400"}`}
                        >
                          <p className="font-moreSugar text-xs leading-none text-white">
                            {option?.id}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-full cursor-pointer rounded-full transition duration-300 group-hover:bg-red-400/20 ${isSelectedOption ? "bg-red-400/20" : ""}`}
                      >
                        <p className="font-moreSugar text-xs">{option?.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center gap-10">
              {Number(id) !== 1 && (
                <Link to={`/quiz/multiple-choice/${Number(id) - 1}`}>
                  <img
                    src={icons.BUTTON_PREV}
                    alt="prev-button"
                    className="active: button-effect-clicked h-[35px] w-[95px]"
                  />
                </Link>
              )}
              <Link to={`/quiz/multiple-choice/${Number(id) + 1}`}>
                <img
                  src={icons.BUTTON_NEXT}
                  alt="next-button"
                  className="button-effect-clicked h-[35px] w-[95px]"
                />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Question number 12-13 */}
      {[12, 13].includes(Number(id)) && (
        <div className="flex h-full w-full items-start justify-center gap-5 pt-10">
          <div className="flex w-1/2 flex-col gap-5">
            <div className="shadow-card__generic-structure flex h-52 flex-col gap-1 rounded-lg bg-off-white-100 p-3">
              <p className="font-moreSugar text-sm">
                <span className="font-bold">{question?.questionId}. </span>
                {question?.questionText}
              </p>
              {question?.descriptionText?.length !== 0 && (
                <p className="font-moreSugar text-sm">
                  {question?.descriptionText}
                </p>
              )}
              <div className="ml-5 flex flex-col gap-1">
                {question?.options?.map((option: OptionType) => {
                  const isSelectedOption = userAnswer.some(
                    (item) =>
                      item.questionId === question.questionId &&
                      item.userAnswer === option.id,
                  );
                  return (
                    <div
                      key={option?.id}
                      className="group flex"
                      onClick={() =>
                        handleSaveMultipleChoice(option, question?.questionId)
                      }
                    >
                      <div className="w-8">
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full transition duration-300 group-hover:bg-green-400 ${isSelectedOption ? "bg-green-400" : "bg-red-400"}`}
                        >
                          <p className="font-moreSugar text-xs leading-none text-white">
                            {option?.id}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-full cursor-pointer rounded-full transition duration-300 group-hover:bg-red-400/20 ${isSelectedOption ? "bg-red-400/20" : ""}`}
                      >
                        <p className="font-moreSugar text-xs">{option?.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center gap-10">
              {Number(id) !== 1 && (
                <Link to={`/quiz/multiple-choice/${Number(id) - 1}`}>
                  <img
                    src={icons.BUTTON_PREV}
                    alt="prev-button"
                    className="active: button-effect-clicked h-[35px] w-[95px]"
                  />
                </Link>
              )}
              <Link to={`/quiz/multiple-choice/${Number(id) + 1}`}>
                <img
                  src={icons.BUTTON_NEXT}
                  alt="next-button"
                  className="button-effect-clicked h-[35px] w-[95px]"
                />
              </Link>
            </div>
          </div>
          <div className="shadow-card__generic-structure flex h-64 w-1/2 flex-col gap-1 rounded-lg bg-off-white-100 p-3">
            <p className="font-moreSugar text-xs font-bold">
              Look at the following text to answer questions 12-14!
            </p>
            <p className="text-center font-moreSugar text-sm font-bold">
              {question12to14?.title}
            </p>
            <div className="overflow-scroll">
              {Object.entries(question12to14?.paragraph || {}).map(
                ([key, value]) => (
                  <p key={key} className="indent-5 font-moreSugar text-xs">
                    {value}
                  </p>
                ),
              )}
              <div className="text-end font-moreSugar text-xs">
                <p>Adapted from: I Can Jump Puddles by Alan Marshall</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Question number 14 */}
      {Number(id) === 14 && (
        <div className="flex h-full w-full items-start justify-center gap-5 pt-10">
          <div className="flex w-1/2 flex-col gap-5">
            <div className="shadow-card__generic-structure flex h-52 flex-col gap-1 rounded-lg bg-off-white-100 p-3">
              <p className="font-moreSugar text-sm">
                <span className="font-bold">{question?.questionId}. </span>
                “He dries each finger{" "}
                <span className="underline">separately</span>...”
              </p>
              {question?.descriptionText?.length !== 0 && (
                <p className="font-moreSugar text-sm">
                  {question?.descriptionText}
                </p>
              )}
              <div className="ml-5 flex flex-col gap-1">
                {question?.options?.map((option: OptionType) => {
                  const isSelectedOption = userAnswer.some(
                    (item) =>
                      item.questionId === question.questionId &&
                      item.userAnswer === option.id,
                  );
                  return (
                    <div
                      key={option?.id}
                      className="group flex"
                      onClick={() =>
                        handleSaveMultipleChoice(option, question?.questionId)
                      }
                    >
                      <div className="w-8">
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full transition duration-300 group-hover:bg-green-400 ${isSelectedOption ? "bg-green-400" : "bg-red-400"}`}
                        >
                          <p className="font-moreSugar text-xs leading-none text-white">
                            {option?.id}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-full cursor-pointer rounded-full transition duration-300 group-hover:bg-red-400/20 ${isSelectedOption ? "bg-red-400/20" : ""}`}
                      >
                        <p className="font-moreSugar text-xs">{option?.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center gap-10">
              {Number(id) !== 1 && (
                <Link to={`/quiz/multiple-choice/${Number(id) - 1}`}>
                  <img
                    src={icons.BUTTON_PREV}
                    alt="prev-button"
                    className="active: button-effect-clicked h-[35px] w-[95px]"
                  />
                </Link>
              )}
              <Link to={`/quiz/multiple-choice/${Number(id) + 1}`}>
                <img
                  src={icons.BUTTON_NEXT}
                  alt="next-button"
                  className="button-effect-clicked h-[35px] w-[95px]"
                />
              </Link>
            </div>
          </div>
          <div className="shadow-card__generic-structure flex h-64 w-1/2 flex-col gap-1 rounded-lg bg-off-white-100 p-3">
            <p className="font-moreSugar text-xs font-bold">
              Look at the following text to answer questions 12-14!
            </p>
            <p className="text-center font-moreSugar text-sm font-bold">
              {question12to14?.title}
            </p>
            <div className="overflow-scroll">
              {Object.entries(question12to14?.paragraph || {}).map(
                ([key, value]) => (
                  <p key={key} className="indent-5 font-moreSugar text-xs">
                    {value}
                  </p>
                ),
              )}
              <div className="text-end font-moreSugar text-xs">
                <p>Adapted from: I Can Jump Puddles by Alan Marshall</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Question number 15 */}
      {Number(id) === 15 && (
        <div className="flex h-full w-full items-start justify-center gap-5 pt-10">
          <div className="shadow-card__generic-structure flex h-64 w-1/2 flex-col gap-1 rounded-lg bg-off-white-100 p-3">
            <p className="font-moreSugar text-xs font-bold">
              Look at the following text to answer questions 15-16!
            </p>
            <div className="overflow-scroll">
              <p className="indent-5 font-moreSugar text-sm">
                {question15to16}
              </p>
            </div>
          </div>
          <div className="flex w-1/2 flex-col gap-5">
            <div className="shadow-card__generic-structure flex h-52 flex-col gap-1 rounded-lg bg-off-white-100 p-3">
              <p className="font-moreSugar text-sm">
                <span className="font-bold">{question?.questionId}. </span>
                {question?.questionText}
              </p>
              {question?.descriptionText?.length !== 0 && (
                <p className="font-moreSugar text-sm">
                  {question?.descriptionText}
                </p>
              )}
              <div className="ml-5 flex flex-col gap-1">
                {question?.options?.map((option: OptionType) => {
                  const isSelectedOption = userAnswer.some(
                    (item) =>
                      item.questionId === question.questionId &&
                      item.userAnswer === option.id,
                  );
                  return (
                    <div
                      key={option?.id}
                      className="group flex"
                      onClick={() =>
                        handleSaveMultipleChoice(option, question?.questionId)
                      }
                    >
                      <div className="w-8">
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full transition duration-300 group-hover:bg-green-400 ${isSelectedOption ? "bg-green-400" : "bg-red-400"}`}
                        >
                          <p className="font-moreSugar text-xs leading-none text-white">
                            {option?.id}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-full cursor-pointer rounded-full transition duration-300 group-hover:bg-red-400/20 ${isSelectedOption ? "bg-red-400/20" : ""}`}
                      >
                        <p className="font-moreSugar text-xs">{option?.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center gap-10">
              {Number(id) !== 1 && (
                <Link to={`/quiz/multiple-choice/${Number(id) - 1}`}>
                  <img
                    src={icons.BUTTON_PREV}
                    alt="prev-button"
                    className="active: button-effect-clicked h-[35px] w-[95px]"
                  />
                </Link>
              )}
              <Link to={`/quiz/multiple-choice/${Number(id) + 1}`}>
                <img
                  src={icons.BUTTON_NEXT}
                  alt="next-button"
                  className="button-effect-clicked h-[35px] w-[95px]"
                />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Question number 16 */}
      {Number(id) === 16 && (
        <div className="flex h-full w-full items-start justify-center gap-5 pt-10">
          <div className="shadow-card__generic-structure flex h-64 w-1/2 flex-col gap-1 rounded-lg bg-off-white-100 p-3">
            <p className="font-moreSugar text-xs font-bold">
              Look at the following text to answer questions 15-16!
            </p>
            <div className="overflow-scroll">
              <p className="indent-5 font-moreSugar text-sm">
                {question15to16}
              </p>
            </div>
          </div>
          <div className="flex w-1/2 flex-col gap-5">
            <div className="shadow-card__generic-structure flex h-52 flex-col gap-1 rounded-lg bg-off-white-100 p-3">
              <p className="font-moreSugar text-sm">
                <span className="font-bold">{question?.questionId}. </span>“She{" "}
                <span className="underline">loathe</span> spider because her
                brother once pranked her by putting a spider in her skirt when
                she was a kid.”
              </p>
              {question?.descriptionText?.length !== 0 && (
                <p className="font-moreSugar text-sm">
                  {question?.descriptionText}
                </p>
              )}
              <div className="ml-5 flex flex-col gap-1">
                {question?.options?.map((option: OptionType) => {
                  const isSelectedOption = userAnswer.some(
                    (item) =>
                      item.questionId === question.questionId &&
                      item.userAnswer === option.id,
                  );
                  return (
                    <div
                      key={option?.id}
                      className="group flex"
                      onClick={() =>
                        handleSaveMultipleChoice(option, question?.questionId)
                      }
                    >
                      <div className="w-8">
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full transition duration-300 group-hover:bg-green-400 ${isSelectedOption ? "bg-green-400" : "bg-red-400"}`}
                        >
                          <p className="font-moreSugar text-xs leading-none text-white">
                            {option?.id}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-full cursor-pointer rounded-full transition duration-300 group-hover:bg-red-400/20 ${isSelectedOption ? "bg-red-400/20" : ""}`}
                      >
                        <p className="font-moreSugar text-xs">{option?.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center gap-10">
              {Number(id) !== 1 && (
                <Link to={`/quiz/multiple-choice/${Number(id) - 1}`}>
                  <img
                    src={icons.BUTTON_PREV}
                    alt="prev-button"
                    className="active: button-effect-clicked h-[35px] w-[95px]"
                  />
                </Link>
              )}
              <Link to={`/quiz/multiple-choice/${Number(id) + 1}`}>
                <img
                  src={icons.BUTTON_NEXT}
                  alt="next-button"
                  className="button-effect-clicked h-[35px] w-[95px]"
                />
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Question number 17-19 */}
      {Number(id) >= 17 && Number(id) <= 19 && (
        <div className="flex h-full w-full items-start justify-center gap-5 pt-10">
          <div className="flex w-1/2 flex-col gap-5">
            <div className="shadow-card__generic-structure flex h-52 flex-col gap-1 rounded-lg bg-off-white-100 p-3">
              <p className="font-moreSugar text-sm">
                <span className="font-bold">{question?.questionId}. </span>
                {question?.questionText}
              </p>
              {question?.descriptionText?.length !== 0 && (
                <p className="font-moreSugar text-sm">
                  {question?.descriptionText}
                </p>
              )}
              <div className="ml-5 flex flex-col gap-1">
                {question?.options?.map((option: OptionType) => {
                  const isSelectedOption = userAnswer.some(
                    (item) =>
                      item.questionId === question.questionId &&
                      item.userAnswer === option.id,
                  );
                  return (
                    <div
                      key={option?.id}
                      className="group flex"
                      onClick={() =>
                        handleSaveMultipleChoice(option, question?.questionId)
                      }
                    >
                      <div className="w-8">
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full transition duration-300 group-hover:bg-green-400 ${isSelectedOption ? "bg-green-400" : "bg-red-400"}`}
                        >
                          <p className="font-moreSugar text-xs leading-none text-white">
                            {option?.id}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-full cursor-pointer rounded-full transition duration-300 group-hover:bg-red-400/20 ${isSelectedOption ? "bg-red-400/20" : ""}`}
                      >
                        <p className="font-moreSugar text-xs">{option?.text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex justify-center gap-10">
              {Number(id) !== 1 && (
                <Link to={`/quiz/multiple-choice/${Number(id) - 1}`}>
                  <img
                    src={icons.BUTTON_PREV}
                    alt="prev-button"
                    className="active: button-effect-clicked h-[35px] w-[95px]"
                  />
                </Link>
              )}
              <Link to={`/quiz/multiple-choice/${Number(id) + 1}`}>
                <img
                  src={icons.BUTTON_NEXT}
                  alt="next-button"
                  className="button-effect-clicked h-[35px] w-[95px]"
                />
              </Link>
            </div>
          </div>
          <div className="shadow-card__generic-structure flex h-64 w-1/2 flex-col gap-1 rounded-lg bg-off-white-100 p-3">
            <p className="font-moreSugar text-xs font-bold">
              Look at the following text to answer questions 17-19!
            </p>
            <div className="overflow-scroll">
              <p className="indent-5 font-moreSugar text-sm">
                {question17to19}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultipleChoice;

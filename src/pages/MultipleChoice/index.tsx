import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

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

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { images } from "@/constant/images";

const MultipleChoice = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const userAnswer = useAppSelector((state) => state.userMultipleChoiceAnswer);

  const [question, setQuestion] = useState<QuestionType>();
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

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

  const handleFinishDialog = () => {
    setOpenDialog(true);
  };

  const handleFinish = () => {
    setLoading(true);
    setTimeout(() => {
      setOpenDialog(false);
      setLoading(false);
      navigate("/quiz/multiple-choice/result");
    }, 1000);
  };

  useEffect(() => {
    fetchQuestion(id);
  }, [id]);

  return (
    <>
      <div className="mx-auto flex h-screen w-full flex-col items-center justify-center bg-cover bg-center p-5 lg:w-[650px]">
        {/* Question number 1-5 and 9,20 */}
        {(Number(id) >= 1 && Number(id) <= 5) ||
        Number(id) === 9 ||
        Number(id) === 20 ? (
          <div className="shadow-card__generic-structure w-full rounded-lg bg-off-white-100 p-3">
            {(Number(id) === 9 || Number(id) === 20) && question?.imageUrl && (
              <div className="flex w-full justify-center">
                <img
                  src={question.imageUrl}
                  alt={id}
                  className="w-36 rounded-lg"
                />
              </div>
            )}

            <p className="font-moreSugar text-sm lg:text-lg">
              <span className="font-bold">{question?.questionId}.</span>{" "}
              {question?.questionText}
            </p>
            {question?.imageUrl && Number(id) === 5 && (
              <div className="flex w-full justify-center">
                <img
                  src={question?.imageUrl}
                  alt={String(question.questionId)}
                  className="w-36 rounded-lg"
                />
              </div>
            )}
            {question?.descriptionText?.length !== 0 && (
              <p className="font-moreSugar text-sm lg:text-lg">
                {question?.descriptionText}
              </p>
            )}
            <div className="mt-2">
              {question?.options?.map((option: OptionType) => {
                const isSelectedOption = userAnswer.some(
                  (item) =>
                    item.questionId === question.questionId &&
                    item.userAnswer === option.id,
                );
                return (
                  <div
                    key={option?.id}
                    className="group mb-2 flex"
                    onClick={() =>
                      handleSaveMultipleChoice(option, question?.questionId)
                    }
                  >
                    <div className="w-8">
                      <div
                        className={`flex h-5 w-5 items-center justify-center rounded-full transition duration-300 group-hover:bg-green-400 lg:h-7 lg:w-7 ${isSelectedOption ? "bg-green-400" : "bg-red-400"}`}
                      >
                        <p className="font-moreSugar text-sm leading-none text-white lg:text-lg">
                          {option?.id}
                        </p>
                      </div>
                    </div>
                    <div
                      className={`w-full cursor-pointer rounded-full transition duration-300 group-hover:bg-red-400/20 lg:ml-2 ${isSelectedOption ? "bg-red-400/20" : ""}`}
                    >
                      <p className="font-moreSugar text-sm lg:text-lg">
                        {option?.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center">
              {Number(id) !== 1 && (
                <div className="mr-5">
                  <Link to={`/quiz/multiple-choice/${Number(id) - 1}`}>
                    <img
                      src={icons.BUTTON_PREV}
                      alt="prev-button"
                      className="active: button-effect-clicked h-[35px] w-[95px] lg:h-[50px] lg:w-[125px]"
                    />
                  </Link>
                </div>
              )}
              {Number(id) !== 20 ? (
                <div className="ml-5">
                  <Link to={`/quiz/multiple-choice/${Number(id) + 1}`}>
                    <img
                      src={icons.BUTTON_NEXT}
                      alt="next-button"
                      className="button-effect-clicked h-[35px] w-[95px] lg:h-[50px] lg:w-[125px]"
                    />
                  </Link>
                </div>
              ) : (
                <div onClick={handleFinishDialog} className="ml-5">
                  <img
                    src={icons.BUTTON_FINISH}
                    alt="next-button"
                    className="button-effect-clicked h-[35px] w-[95px] lg:h-[50px] lg:w-[125px]"
                  />
                </div>
              )}
            </div>
          </div>
        ) : null}

        {/* Question number 6-8 */}
        {Number(id) >= 6 && Number(id) <= 8 && (
          <>
            <div className="shadow-card__generic-structure mb-2 h-52 w-full overflow-scroll rounded-lg bg-off-white-100 p-3 lg:h-64">
              <p className="font-moreSugar text-sm font-bold lg:text-lg">
                Look at the following text to answer questions 6-8!
              </p>
              <p className="text-center font-moreSugar text-sm font-bold lg:text-lg">
                {question6to8?.title}
              </p>
              {question6to8?.imageUrl && (
                <div className="flex w-full justify-center">
                  <img
                    src={question6to8?.imageUrl}
                    alt={question6to8.title}
                    className="w-32 rounded-lg lg:w-48"
                  />
                </div>
              )}
              <div className="overflow-scroll">
                {Object.entries(question6to8?.paragraph || {}).map(
                  ([key, value]) => (
                    <p
                      key={key}
                      className="indent-5 font-moreSugar text-sm lg:text-lg"
                    >
                      {value}
                    </p>
                  ),
                )}
              </div>
            </div>
            <div className="shadow-card__generic-structure mt-2 h-auto w-full overflow-scroll rounded-lg bg-off-white-100 p-3">
              <p className="font-moreSugar text-sm lg:text-lg">
                <span className="font-bold">{question?.questionId}. </span>
                {question?.questionText}
              </p>
              <div className="mt-2">
                {question?.options?.map((option: OptionType) => {
                  const isSelectedOption = userAnswer.some(
                    (item) =>
                      item.questionId === question.questionId &&
                      item.userAnswer === option.id,
                  );
                  return (
                    <div
                      key={option?.id}
                      className="group mb-2 flex"
                      onClick={() =>
                        handleSaveMultipleChoice(option, question?.questionId)
                      }
                    >
                      <div className="w-8">
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full transition duration-300 group-hover:bg-green-400 lg:h-7 lg:w-7 ${isSelectedOption ? "bg-green-400" : "bg-red-400"}`}
                        >
                          <p className="font-moreSugar text-sm leading-none text-white lg:text-lg">
                            {option?.id}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-full cursor-pointer rounded-full transition duration-300 group-hover:bg-red-400/20 lg:ml-2 ${isSelectedOption ? "bg-red-400/20" : ""}`}
                      >
                        <p className="font-moreSugar text-sm lg:text-lg">
                          {option?.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center">
                {Number(id) !== 1 && (
                  <div className="mr-5">
                    <Link to={`/quiz/multiple-choice/${Number(id) - 1}`}>
                      <img
                        src={icons.BUTTON_PREV}
                        alt="prev-button"
                        className="active: button-effect-clicked h-[35px] w-[95px] lg:h-[50px] lg:w-[125px]"
                      />
                    </Link>
                  </div>
                )}
                <div className="ml-5">
                  <Link to={`/quiz/multiple-choice/${Number(id) + 1}`}>
                    <img
                      src={icons.BUTTON_NEXT}
                      alt="next-button"
                      className="button-effect-clicked h-[35px] w-[95px] lg:h-[50px] lg:w-[125px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Question number 10 */}
        {Number(id) === 10 && (
          <>
            <div className="shadow-card__generic-structure mb-2 h-52 w-full overflow-scroll rounded-lg bg-off-white-100 p-3 lg:h-64">
              <p className="font-moreSugar text-sm font-bold lg:text-lg">
                Look at the following text to answer questions 10-11!
              </p>
              <div className="flex w-full justify-center">
                <img
                  src={images.HAMSTER}
                  alt="hamster-image"
                  className="w-32 rounded-lg lg:w-48"
                />
              </div>
              <div className="overflow-scroll">
                <p className="indent-5 font-moreSugar text-sm lg:text-lg">
                  {question10to11}
                </p>
              </div>
            </div>
            <div className="shadow-card__generic-structure mt-2 h-auto w-full overflow-scroll rounded-lg bg-off-white-100 p-3">
              <p className="font-moreSugar text-sm lg:text-lg">
                <span className="font-bold">{question?.questionId}. </span>
                {question?.questionText}
              </p>
              {question?.descriptionText?.length !== 0 && (
                <p className="font-moreSugar text-sm lg:text-lg">
                  {question?.descriptionText}
                </p>
              )}
              <div className="mt-2">
                {question?.options?.map((option: OptionType) => {
                  const isSelectedOption = userAnswer.some(
                    (item) =>
                      item.questionId === question.questionId &&
                      item.userAnswer === option.id,
                  );
                  return (
                    <div
                      key={option?.id}
                      className="group mb-2 flex"
                      onClick={() =>
                        handleSaveMultipleChoice(option, question?.questionId)
                      }
                    >
                      <div className="w-8">
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full transition duration-300 group-hover:bg-green-400 lg:h-7 lg:w-7 ${isSelectedOption ? "bg-green-400" : "bg-red-400"}`}
                        >
                          <p className="font-moreSugar text-sm leading-none text-white lg:text-lg">
                            {option?.id}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-full cursor-pointer rounded-full transition duration-300 group-hover:bg-red-400/20 lg:ml-2 ${isSelectedOption ? "bg-red-400/20" : ""}`}
                      >
                        <p className="font-moreSugar text-sm lg:text-lg">
                          {option?.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="flex justify-center">
                {Number(id) !== 1 && (
                  <div className="mr-5">
                    <Link to={`/quiz/multiple-choice/${Number(id) - 1}`}>
                      <img
                        src={icons.BUTTON_PREV}
                        alt="prev-button"
                        className="active: button-effect-clicked h-[35px] w-[95px] lg:h-[50px] lg:w-[125px]"
                      />
                    </Link>
                  </div>
                )}
                <div className="ml-5">
                  <Link to={`/quiz/multiple-choice/${Number(id) + 1}`}>
                    <img
                      src={icons.BUTTON_NEXT}
                      alt="next-button"
                      className="button-effect-clicked h-[35px] w-[95px] lg:h-[50px] lg:w-[125px]"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Question number 11 */}
        {Number(id) === 11 && (
          <>
            <div className="shadow-card__generic-structure mb-2 h-52 w-full overflow-scroll rounded-lg bg-off-white-100 p-3 lg:h-64">
              <p className="font-moreSugar text-sm font-bold lg:text-lg">
                Look at the following text to answer questions 10-11!
              </p>
              <div className="flex w-full justify-center">
                <img
                  src={images.HAMSTER}
                  alt="hamster-image"
                  className="w-32 rounded-lg lg:w-48"
                />
              </div>
              <div className="overflow-scroll">
                <p className="indent-5 font-moreSugar text-sm lg:text-lg">
                  {question10to11}
                </p>
              </div>
            </div>
            <div className="shadow-card__generic-structure mt-2 h-auto w-full overflow-scroll rounded-lg bg-off-white-100 p-3">
              <p className="font-moreSugar text-sm lg:text-lg">
                <span className="font-bold">{question?.questionId}. </span>"
                <span className="underline">Inadequate</span> conditions can not
                only cause stress but also affect their growth.",
              </p>
              {question?.descriptionText?.length !== 0 && (
                <p className="font-moreSugar text-sm lg:text-lg">
                  {question?.descriptionText}
                </p>
              )}
              <div className="mt-2">
                {question?.options?.map((option: OptionType) => {
                  const isSelectedOption = userAnswer.some(
                    (item) =>
                      item.questionId === question.questionId &&
                      item.userAnswer === option.id,
                  );
                  return (
                    <div
                      key={option?.id}
                      className="group mb-2 flex"
                      onClick={() =>
                        handleSaveMultipleChoice(option, question?.questionId)
                      }
                    >
                      <div className="w-8">
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full transition duration-300 group-hover:bg-green-400 lg:h-7 lg:w-7 ${isSelectedOption ? "bg-green-400" : "bg-red-400"}`}
                        >
                          <p className="font-moreSugar text-sm leading-none text-white lg:text-lg">
                            {option?.id}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-full cursor-pointer rounded-full transition duration-300 group-hover:bg-red-400/20 lg:ml-2 ${isSelectedOption ? "bg-red-400/20" : ""}`}
                      >
                        <p className="font-moreSugar text-sm lg:text-lg">
                          {option?.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
                <div className="flex justify-center">
                  {Number(id) !== 1 && (
                    <div className="mr-5">
                      <Link to={`/quiz/multiple-choice/${Number(id) - 1}`}>
                        <img
                          src={icons.BUTTON_PREV}
                          alt="prev-button"
                          className="active: button-effect-clicked h-[35px] w-[95px] lg:h-[50px] lg:w-[125px]"
                        />
                      </Link>
                    </div>
                  )}
                  <div className="ml-5">
                    <Link to={`/quiz/multiple-choice/${Number(id) + 1}`}>
                      <img
                        src={icons.BUTTON_NEXT}
                        alt="next-button"
                        className="button-effect-clicked h-[35px] w-[95px] lg:h-[50px] lg:w-[125px]"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Question number 12-13 */}
        {[12, 13].includes(Number(id)) && (
          <>
            <div className="shadow-card__generic-structure mb-2 h-52 w-full overflow-scroll rounded-lg bg-off-white-100 p-3 lg:h-64">
              <p className="font-moreSugar text-sm font-bold lg:text-lg">
                Look at the following text to answer questions 12-14!
              </p>
              <p className="text-center font-moreSugar text-sm font-bold lg:text-lg">
                {question12to14?.title}
              </p>
              <div className="overflow-scroll">
                {Object.entries(question12to14?.paragraph || {}).map(
                  ([key, value]) => (
                    <p
                      key={key}
                      className="indent-5 font-moreSugar text-sm lg:text-lg"
                    >
                      {value}
                    </p>
                  ),
                )}
                <div className="text-end font-moreSugar text-sm lg:text-lg">
                  <p>Adapted from: I Can Jump Puddles by Alan Marshall</p>
                </div>
              </div>
            </div>
            <div className="shadow-card__generic-structure mt-2 h-auto w-full overflow-scroll rounded-lg bg-off-white-100 p-3">
              <p className="font-moreSugar text-sm lg:text-lg">
                <span className="font-bold">{question?.questionId}. </span>
                {question?.questionText}
              </p>
              {question?.descriptionText?.length !== 0 && (
                <p className="font-moreSugar text-sm lg:text-lg">
                  {question?.descriptionText}
                </p>
              )}
              <div className="mt-2">
                {question?.options?.map((option: OptionType) => {
                  const isSelectedOption = userAnswer.some(
                    (item) =>
                      item.questionId === question.questionId &&
                      item.userAnswer === option.id,
                  );
                  return (
                    <div
                      key={option?.id}
                      className="group mb-2 flex"
                      onClick={() =>
                        handleSaveMultipleChoice(option, question?.questionId)
                      }
                    >
                      <div className="w-8">
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full transition duration-300 group-hover:bg-green-400 lg:h-7 lg:w-7 ${isSelectedOption ? "bg-green-400" : "bg-red-400"}`}
                        >
                          <p className="font-moreSugar text-sm leading-none text-white lg:text-lg">
                            {option?.id}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-full cursor-pointer rounded-full transition duration-300 group-hover:bg-red-400/20 lg:ml-2 ${isSelectedOption ? "bg-red-400/20" : ""}`}
                      >
                        <p className="font-moreSugar text-sm lg:text-lg">
                          {option?.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
                <div className="flex justify-center">
                  {Number(id) !== 1 && (
                    <div className="mr-5">
                      <Link to={`/quiz/multiple-choice/${Number(id) - 1}`}>
                        <img
                          src={icons.BUTTON_PREV}
                          alt="prev-button"
                          className="active: button-effect-clicked h-[35px] w-[95px] lg:h-[50px] lg:w-[125px]"
                        />
                      </Link>
                    </div>
                  )}
                  <div className="ml-5">
                    <Link to={`/quiz/multiple-choice/${Number(id) + 1}`}>
                      <img
                        src={icons.BUTTON_NEXT}
                        alt="next-button"
                        className="button-effect-clicked h-[35px] w-[95px] lg:h-[50px] lg:w-[125px]"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Question number 14 */}
        {Number(id) === 14 && (
          <>
            <div className="shadow-card__generic-structure mb-2 h-52 w-full overflow-scroll rounded-lg bg-off-white-100 p-3 lg:h-64">
              <p className="font-moreSugar text-sm font-bold lg:text-lg">
                Look at the following text to answer questions 12-14!
              </p>
              <p className="text-center font-moreSugar text-sm font-bold lg:text-lg">
                {question12to14?.title}
              </p>
              <div className="overflow-scroll">
                {Object.entries(question12to14?.paragraph || {}).map(
                  ([key, value]) => (
                    <p
                      key={key}
                      className="indent-5 font-moreSugar text-sm lg:text-lg"
                    >
                      {value}
                    </p>
                  ),
                )}
                <div className="pt-2 text-end font-moreSugar text-sm lg:text-lg">
                  <p>Adapted from: I Can Jump Puddles by Alan Marshall</p>
                </div>
              </div>
            </div>
            <div className="shadow-card__generic-structure mt-2 h-auto w-full overflow-scroll rounded-lg bg-off-white-100 p-3">
              <p className="font-moreSugar text-sm lg:text-lg">
                <span className="font-bold">{question?.questionId}. </span>
                "He dries each finger{" "}
                <span className="underline">separately</span>
                ..."
              </p>
              {question?.descriptionText?.length !== 0 && (
                <p className="font-moreSugar text-sm lg:text-lg">
                  {question?.descriptionText}
                </p>
              )}
              <div className="mt-2">
                {question?.options?.map((option: OptionType) => {
                  const isSelectedOption = userAnswer.some(
                    (item) =>
                      item.questionId === question.questionId &&
                      item.userAnswer === option.id,
                  );
                  return (
                    <div
                      key={option?.id}
                      className="group mb-2 flex"
                      onClick={() =>
                        handleSaveMultipleChoice(option, question?.questionId)
                      }
                    >
                      <div className="w-8">
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full transition duration-300 group-hover:bg-green-400 lg:h-7 lg:w-7 ${isSelectedOption ? "bg-green-400" : "bg-red-400"}`}
                        >
                          <p className="font-moreSugar text-sm leading-none text-white lg:text-lg">
                            {option?.id}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-full cursor-pointer rounded-full transition duration-300 group-hover:bg-red-400/20 lg:ml-2 ${isSelectedOption ? "bg-red-400/20" : ""}`}
                      >
                        <p className="font-moreSugar text-sm lg:text-lg">
                          {option?.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
                <div className="flex justify-center">
                  {Number(id) !== 1 && (
                    <div className="mr-5">
                      <Link to={`/quiz/multiple-choice/${Number(id) - 1}`}>
                        <img
                          src={icons.BUTTON_PREV}
                          alt="prev-button"
                          className="active: button-effect-clicked h-[35px] w-[95px] lg:h-[50px] lg:w-[125px]"
                        />
                      </Link>
                    </div>
                  )}
                  <div className="ml-5">
                    <Link to={`/quiz/multiple-choice/${Number(id) + 1}`}>
                      <img
                        src={icons.BUTTON_NEXT}
                        alt="next-button"
                        className="button-effect-clicked h-[35px] w-[95px] lg:h-[50px] lg:w-[125px]"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Question number 15 */}
        {Number(id) === 15 && (
          <>
            <div className="shadow-card__generic-structure mb-2 h-52 w-full overflow-scroll rounded-lg bg-off-white-100 p-3 lg:h-64">
              <p className="font-moreSugar text-sm font-bold lg:text-lg">
                Look at the following text to answer questions 15-16!
              </p>
              <div className="flex w-full justify-center">
                <img
                  src={images.LUCY}
                  alt="lucy-image"
                  className="w-28 rounded-lg lg:w-36"
                />
              </div>
              <div className="overflow-scroll">
                <p className="indent-5 font-moreSugar text-sm lg:text-lg">
                  {question15to16}
                </p>
              </div>
            </div>
            <div className="shadow-card__generic-structure mt-2 h-auto w-full overflow-scroll rounded-lg bg-off-white-100 p-3">
              <p className="font-moreSugar text-sm lg:text-lg">
                <span className="font-bold">{question?.questionId}. </span>
                {question?.questionText}
              </p>
              {question?.descriptionText?.length !== 0 && (
                <p className="font-moreSugar text-sm lg:text-lg">
                  {question?.descriptionText}
                </p>
              )}
              <div className="mt-2">
                {question?.options?.map((option: OptionType) => {
                  const isSelectedOption = userAnswer.some(
                    (item) =>
                      item.questionId === question.questionId &&
                      item.userAnswer === option.id,
                  );
                  return (
                    <div
                      key={option?.id}
                      className="group mb-2 flex"
                      onClick={() =>
                        handleSaveMultipleChoice(option, question?.questionId)
                      }
                    >
                      <div className="w-8">
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full transition duration-300 group-hover:bg-green-400 lg:h-7 lg:w-7 ${isSelectedOption ? "bg-green-400" : "bg-red-400"}`}
                        >
                          <p className="font-moreSugar text-sm leading-none text-white lg:text-lg">
                            {option?.id}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-full cursor-pointer rounded-full transition duration-300 group-hover:bg-red-400/20 lg:ml-2 ${isSelectedOption ? "bg-red-400/20" : ""}`}
                      >
                        <p className="font-moreSugar text-sm lg:text-lg">
                          {option?.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
                <div className="flex justify-center">
                  {Number(id) !== 1 && (
                    <div className="mr-5">
                      <Link to={`/quiz/multiple-choice/${Number(id) - 1}`}>
                        <img
                          src={icons.BUTTON_PREV}
                          alt="prev-button"
                          className="active: button-effect-clicked h-[35px] w-[95px] lg:h-[50px] lg:w-[125px]"
                        />
                      </Link>
                    </div>
                  )}
                  <div className="ml-5">
                    <Link to={`/quiz/multiple-choice/${Number(id) + 1}`}>
                      <img
                        src={icons.BUTTON_NEXT}
                        alt="next-button"
                        className="button-effect-clicked h-[35px] w-[95px] lg:h-[50px] lg:w-[125px]"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Question number 16 */}
        {Number(id) === 16 && (
          <>
            <div className="shadow-card__generic-structure mb-2 h-52 w-full overflow-scroll rounded-lg bg-off-white-100 p-3 lg:h-64">
              <p className="font-moreSugar text-sm font-bold lg:text-lg">
                Look at the following text to answer questions 15-16!
              </p>
              <div className="flex w-full justify-center">
                <img
                  src={images.LUCY}
                  alt="lucy-image"
                  className="w-28 rounded-lg lg:w-36"
                />
              </div>
              <div className="overflow-scroll">
                <p className="indent-5 font-moreSugar text-sm lg:text-lg">
                  {question15to16}
                </p>
              </div>
            </div>
            <div className="shadow-card__generic-structure mt-2 h-auto w-full overflow-scroll rounded-lg bg-off-white-100 p-3">
              <p className="font-moreSugar text-sm lg:text-lg">
                <span className="font-bold">{question?.questionId}. </span>"She{" "}
                <span className="underline">loathe</span> spider because her
                brother once pranked her by putting a spider in her skirt when
                she was a kid."
              </p>
              {question?.descriptionText?.length !== 0 && (
                <p className="font-moreSugar text-sm lg:text-lg">
                  {question?.descriptionText}
                </p>
              )}
              <div className="mt-2">
                {question?.options?.map((option: OptionType) => {
                  const isSelectedOption = userAnswer.some(
                    (item) =>
                      item.questionId === question.questionId &&
                      item.userAnswer === option.id,
                  );
                  return (
                    <div
                      key={option?.id}
                      className="group mb-2 flex"
                      onClick={() =>
                        handleSaveMultipleChoice(option, question?.questionId)
                      }
                    >
                      <div className="w-8">
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full transition duration-300 group-hover:bg-green-400 lg:h-7 lg:w-7 ${isSelectedOption ? "bg-green-400" : "bg-red-400"}`}
                        >
                          <p className="font-moreSugar text-sm leading-none text-white lg:text-lg">
                            {option?.id}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-full cursor-pointer rounded-full transition duration-300 group-hover:bg-red-400/20 lg:ml-2 ${isSelectedOption ? "bg-red-400/20" : ""}`}
                      >
                        <p className="font-moreSugar text-sm lg:text-lg">
                          {option?.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
                <div className="flex justify-center">
                  {Number(id) !== 1 && (
                    <div className="mr-5">
                      <Link to={`/quiz/multiple-choice/${Number(id) - 1}`}>
                        <img
                          src={icons.BUTTON_PREV}
                          alt="prev-button"
                          className="active: button-effect-clicked h-[35px] w-[95px] lg:h-[50px] lg:w-[125px]"
                        />
                      </Link>
                    </div>
                  )}
                  <div className="ml-5">
                    <Link to={`/quiz/multiple-choice/${Number(id) + 1}`}>
                      <img
                        src={icons.BUTTON_NEXT}
                        alt="next-button"
                        className="button-effect-clicked h-[35px] w-[95px] lg:h-[50px] lg:w-[125px]"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        {/* Question number 17-19 */}
        {Number(id) >= 17 && Number(id) <= 19 && (
          <>
            <div className="shadow-card__generic-structure mb-2 h-52 w-full overflow-scroll rounded-lg bg-off-white-100 p-3 lg:h-64">
              <p className="font-moreSugar text-sm font-bold lg:text-lg">
                Look at the following text to answer questions 17-19!
              </p>
              <div className="flex w-full justify-center">
                <img
                  src={images.MONAS}
                  alt="monas-image"
                  className="w-36 rounded-lg lg:w-48"
                />
              </div>
              <div className="overflow-scroll">
                <p className="indent-5 font-moreSugar text-sm lg:text-lg">
                  {question17to19}
                </p>
              </div>
            </div>
            <div className="shadow-card__generic-structure mt-2 h-auto w-full overflow-scroll rounded-lg bg-off-white-100 p-3">
              <p className="font-moreSugar text-sm lg:text-lg">
                <span className="font-bold">{question?.questionId}. </span>
                {question?.questionText}
              </p>
              {question?.descriptionText?.length !== 0 && (
                <p className="font-moreSugar text-sm lg:text-lg">
                  {question?.descriptionText}
                </p>
              )}
              <div className="mt-2">
                {question?.options?.map((option: OptionType) => {
                  const isSelectedOption = userAnswer.some(
                    (item) =>
                      item.questionId === question.questionId &&
                      item.userAnswer === option.id,
                  );
                  return (
                    <div
                      key={option?.id}
                      className="group mb-2 flex"
                      onClick={() =>
                        handleSaveMultipleChoice(option, question?.questionId)
                      }
                    >
                      <div className="w-8">
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full transition duration-300 group-hover:bg-green-400 lg:h-7 lg:w-7 ${isSelectedOption ? "bg-green-400" : "bg-red-400"}`}
                        >
                          <p className="font-moreSugar text-sm leading-none text-white lg:text-lg">
                            {option?.id}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`w-full cursor-pointer rounded-full transition duration-300 group-hover:bg-red-400/20 lg:ml-2 ${isSelectedOption ? "bg-red-400/20" : ""}`}
                      >
                        <p className="font-moreSugar text-sm lg:text-lg">
                          {option?.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
                <div className="flex justify-center">
                  {Number(id) !== 1 && (
                    <div className="mr-5">
                      <Link to={`/quiz/multiple-choice/${Number(id) - 1}`}>
                        <img
                          src={icons.BUTTON_PREV}
                          alt="prev-button"
                          className="active: button-effect-clicked h-[35px] w-[95px] lg:h-[50px] lg:w-[125px]"
                        />
                      </Link>
                    </div>
                  )}
                  <div className="ml-5">
                    <Link to={`/quiz/multiple-choice/${Number(id) + 1}`}>
                      <img
                        src={icons.BUTTON_NEXT}
                        alt="next-button"
                        className="button-effect-clicked h-[35px] w-[95px] lg:h-[50px] lg:w-[125px]"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <Dialog open={openDialog}>
        <DialogContent className="shadow-card__generic-structure w-full rounded-lg bg-off-white-100 [&>button]:hidden">
          <DialogHeader className="">
            <DialogTitle className="text-center font-moreSugar">
              Are you sure you want to end the quiz?
            </DialogTitle>
            <DialogDescription>
              <div className="flex justify-center gap-5">
                <Button
                  loading={loading}
                  className="w-24 bg-mint-green hover:bg-mint-green/90 active:bg-mint-green"
                  onClick={handleFinish}
                  loadingColor="text-green-500"
                >
                  Yes
                </Button>
                <Button className="w-24" onClick={() => setOpenDialog(false)}>
                  No
                </Button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MultipleChoice;

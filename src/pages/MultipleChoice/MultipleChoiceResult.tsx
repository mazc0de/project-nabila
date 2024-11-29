import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "@/hooks/useAppSelector";
import { icons } from "@/constant/icons";
import { Navbar } from "@/components";
import { resetMultipleChoiceAnswer } from "@/redux/reducer/userMultipleChoiceAnswerSlice";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { multipleChoiceQuestion } from "./multipleChoiceQuestion";

const MultipleChoiceResult = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const QUESTION_TOTAL = 20;
  const userMultipleChoiceAnswer = useAppSelector(
    (state) => state.userMultipleChoiceAnswer,
  );

  const [isCalculating, setIsCalculating] = useState<boolean>(true);
  const [dots, setDots] = useState<string>("");
  const [correctAnswerCount, setCorrectAnswerCount] = useState<number>(0);
  const [wrongAnswerCount, setWrongAnswerCount] = useState<number>(0);
  const [questionAnswered, setQuestionAnswered] = useState<number>(0);
  const [questionNotAnswered, setQuestionNotAnswered] = useState<number>(0);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const [finalPoint, setFinalPoint] = useState<number>(0);

  const calculatePoint = () => {
    try {
      // Pertanyaan yang dijawab
      const questionAnswered = userMultipleChoiceAnswer?.length;
      const questionNotAnswered =
        QUESTION_TOTAL - userMultipleChoiceAnswer?.length;
      // Pertanyaan yang tidak dijawab
      setQuestionAnswered(questionAnswered);
      setQuestionNotAnswered(questionNotAnswered);

      let correctAnswerCount = 0;
      let wrongAnswerCount = 0;

      userMultipleChoiceAnswer.forEach((userAnswer) => {
        const correctAnswer = multipleChoiceQuestion?.find(
          (item) => item?.questionId === userAnswer?.questionId,
        )?.correctAnswer;

        if (userAnswer.userAnswer === correctAnswer) {
          correctAnswerCount++;
        } else if (userAnswer.userAnswer !== correctAnswer) {
          wrongAnswerCount++;
        }

        setCorrectAnswerCount(correctAnswerCount);
        setWrongAnswerCount(wrongAnswerCount);
      });

      const finalPoint = (correctAnswerCount / QUESTION_TOTAL) * 100;
      setFinalPoint(finalPoint);

      const timer = setTimeout(() => {
        setIsCalculating(false);
      }, 4000);

      return () => clearTimeout(timer);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    calculatePoint();
  }, []);

  useEffect(() => {
    if (!isCalculating) {
      dispatch(resetMultipleChoiceAnswer());
    }
  }, [isCalculating]);

  const handleGoToHome = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpenDialog(false);
      dispatch(resetMultipleChoiceAnswer());
      navigate("/main-menu");
    }, 1500);
  };

  useEffect(() => {
    if (isCalculating) {
      const interval = setInterval(() => {
        setDots((prevState) => (prevState.length < 3 ? prevState + "." : ""));
      }, 1000);

      return () => clearInterval(interval);
    } else {
      setDots("");
    }
  }, [isCalculating]);

  return (
    <div className="relative flex h-screen w-full flex-col bg-grass bg-cover bg-bottom p-5">
      <div className="absolute">
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogTrigger>
            <img
              src={icons.BUTTON_HOME}
              alt="home-button"
              className="button-effect-clicked w-10"
            />
          </DialogTrigger>
          <DialogContent className="shadow-card__generic-structure w-full bg-off-white-100 [&>button]:hidden">
            <DialogHeader className="">
              <DialogTitle className="text-center font-moreSugar">
                Are you sure you want to go back to the main menu?
              </DialogTitle>
              <DialogDescription>
                <div className="flex justify-center gap-5">
                  <Button
                    loading={loading}
                    className="w-24 bg-mint-green hover:bg-mint-green/90 active:bg-mint-green"
                    onClick={handleGoToHome}
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
      </div>
      <Navbar />
      <div className="flex h-full items-center justify-center">
        <div className="shadow-card__generic-structure flex h-auto min-h-44 w-96 flex-col gap-1 rounded-lg bg-off-white-100 p-3">
          {isCalculating ? (
            <p className="font-moreSugar">Calculating{dots}</p>
          ) : (
            <div className="flex flex-col gap-1">
              <p className="font-moreSugar">
                Calculation complete your result is here!
              </p>
              <p className="font-moreSugar">
                Question Answered: {questionAnswered}
              </p>
              <p className="font-moreSugar">
                Question Not Answered: {questionNotAnswered}
              </p>
              <p className="font-moreSugar text-green-400">
                Correct Answer : {correctAnswerCount}
              </p>
              <p className="font-moreSugar text-red-400">
                Wrong Answer: {wrongAnswerCount}
              </p>
              <div className="flex items-center gap-2">
                <p className="font-moreSugar">Your point is : {finalPoint}</p>
                <img
                  src={
                    finalPoint === 0
                      ? icons.FEEL_BAD_EMOJI
                      : finalPoint <= 50
                        ? icons.SAD_EMOJI
                        : finalPoint <= 75
                          ? icons.NEUTRAL_EMOJI
                          : finalPoint < 90
                            ? icons.SMILE_EMOJI
                            : finalPoint >= 90
                              ? icons.SMILE_EMOJI
                              : undefined
                  }
                  alt="emoji-icon"
                  className="w-5"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultipleChoiceResult;

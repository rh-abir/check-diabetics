import { createBrowserRouter } from "react-router-dom";
import QuizRoot from "../layout/QuizRoot";
import Root from "../layout/Root";
import Questions from "../pages/Home/Questions/Questions";
import QuizHome from "../pages/Home/QuizHome/QuizHome";
import Result from "../pages/Home/Result/Result";
import Age from "../pages/Home/UserData/Age";
import Gender from "../pages/Home/UserData/Gender";
import SugarLevel from "../pages/Home/UserData/SugarLevel";

const router = createBrowserRouter([
  // Normal Routes
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <QuizRoot />,
        children: [
          {
            path: "/",
            element: <QuizHome />,
          },
          {
            path: "/gender",
            element: <Gender />,
          },
          {
            path: "/age",
            element: <Age />,
          },
          {
            path: "/suger-level",
            element: <SugarLevel />,
          },
          // {
          //   path: "/question-four",
          //   element: <QuestionFour />,
          // },
          // {
          //   path: "/question-five",
          //   element: <QuestionFive />,
          // },
          // {
          //   path: "/question-six",
          //   element: <QuestionSix />,
          // },
          // {
          //   path: "/question-seven",
          //   element: <QuestionSeven />,
          // },
          // {
          //   path: "/question-eight",
          //   element: <QuestionEight />,
          // },
          // {
          //   path: "/question-nine",
          //   element: <QuestionNine />,
          // },
          // {
          //   path: "/question-ten",
          //   element: <QuestionTen />,
          // },
          // {
          //   path: "/question-eleven",
          //   element: <QuestionEleven />,
          // },
          {
            path: "/question",
            element: <Questions />,
          },
          {
            path: "/result",
            element: <Result />,
          },
        ],
      },
    ],
  },

  // Quiz Routes
]);

export default router;

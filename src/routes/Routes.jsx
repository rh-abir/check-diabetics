import { createBrowserRouter } from "react-router-dom";
import QuizRoot from "../layout/QuizRoot";
import Root from "../layout/Root";
import QuestionOne from "../pages/Home/Questions/QuestionOne";
import QuestionThree from "../pages/Home/Questions/QuestionThree";
import QuestionTwo from "../pages/Home/Questions/QuestionTwo";
import QuizHome from "../pages/Home/QuizHome/QuizHome";
import Result from "../pages/Home/Result/Result";

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
            path: "/question-one",
            element: <QuestionOne />,
          },
          {
            path: "/question-two",
            element: <QuestionTwo />,
          },
          {
            path: "/question-three",
            element: <QuestionThree />,
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

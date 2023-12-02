import { createBrowserRouter } from "react-router-dom";
import QuizRoot from "../layout/QuizRoot";
import Root from "../layout/Root";
import Quiz from "../pages/Home/Quiz/Quiz";
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
            path: "/quiz",
            element: <Quiz />,
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

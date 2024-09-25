import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { QuestionComponent } from "./components/questionComponent";
import { Home } from "./components/home";
import { Projects } from "./components/projectDisplays";
import { NotFound } from "./components/404";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
                index: true
            },
            {
                path: '/about',
                element: <QuestionComponent />
            },
            {
                path: '/projects',
                element: <Projects />,
            },
            {
                path: "*",
                element: <NotFound />
            }

        ]
    },

])
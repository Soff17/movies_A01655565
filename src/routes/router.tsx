import {RouteObject, createBrowserRouter} from "react-router-dom";
import PrivateRouter from "./PrivateRouter";
import { ROTES } from "./constants";
import { Home } from "../pages/Home";
import { Popular } from "../pages/Popular";
import { Rated } from "../pages/Rated";
import { Favorite } from "../pages/Favorite";
import { Playing } from "../pages/Playing";
import { Show } from "../pages/Show";

const routes: RouteObject[] = [
    {
        path: ROTES.HOME,
        element: <PrivateRouter />,
        children: [
            {
                path: ROTES.HOME,
                element: <Home />,
            },
            {
                path: ROTES.POPULAR,
                element: <Popular />,
            },
            {
                path: ROTES.RATED,
                element: <Rated />,
            },
            {
                path: ROTES.PLAYING,
                element: <Playing />,
            },
            {
                path: ROTES.FAVORITE,
                element: <Favorite />,
            },
            {
                path: `${ROTES.SHOW}:id`,
                element: <Show />,
            },
        ],
    },
];

export const router = createBrowserRouter(routes);
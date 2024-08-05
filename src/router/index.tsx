import React from "react";
import { Navigate, RouteObject } from "react-router";

const Discover = React.lazy(() => import("@/views/discover"));
const Album = React.lazy(() => import("@/views/discover/c-views/album"));
const Artist = React.lazy(() => import("@/views/discover/c-views/artist"));
const Djradio = React.lazy(() => import("@/views/discover/c-views/djradio"));
const Ranking = React.lazy(() => import("@/views/discover/c-views/ranking"));
const Recommend = React.lazy(() => import("@/views/discover/c-views/recommend"));
const Songs = React.lazy(() => import("@/views/discover/c-views/songs"));

const Focus = React.lazy(() => import("@/views/focus/Focus"));
const Mine = React.lazy(() => import("@/views/mine/Mine"));
const Download = React.lazy(() => import("@/views/download/Download"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navigate to={"/discover"} />,
  },
  {
    path: "/discover",
    element: <Discover />,
    children: [
      {
        path: "/discover/album",
        element: <Album />,
      },
      {
        path: "/discover/artist",
        element: <Artist />,
      },
      {
        path: "/discover/djradio",
        element: <Djradio />,
      },
      {
        path: "/discover/ranking",
        element: <Ranking />,
      },
      {
        path: "/discover/recommend",
        element: <Recommend />,
      },
      {
        path: "/discover/songs",
        element: <Songs />,
      },
    ],
  },
  {
    path: "/focus",
    element: <Focus />,
  },
  {
    path: "/mine",
    element: <Mine />,
  },
  {
    path: "/download",
    element: <Download />,
  },
];

export default routes;

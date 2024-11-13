import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ProtectedRoute, WithSuspense } from "@hoc";

import { useLoggedUser } from "@src/context/libs/contextUser";
import {
  Convertisseur,
  Count,
  HeaderRappelReact,
  Increment,
  Todo,
  Arrays,
  MapArray,
  FilterArray,
  SpreadRest,
  Variables,
  Lifecycle,
  StatePropsDerived,
} from "@components";

const PostsPage = WithSuspense(
  lazy(() =>
    import(/* webpackChunkName: "prestations détail" */ "@pages").then(
      ({ PostsPage }) => ({
        default: PostsPage,
      }),
    ),
  ),
);

const PostPage = WithSuspense(
  lazy(() =>
    import(/* webpackChunkName: "prestations détail" */ "@pages").then(
      ({ PostPage }) => ({
        default: PostPage,
      }),
    ),
  ),
);

export const Router = () => {
  const { loggedUser } = useLoggedUser();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/posts" replace />} />
      <Route path="/posts" element={<PostsPage />} />
      <Route
        path="/post/:postId?"
        element={
          <ProtectedRoute isAllowed={!!loggedUser} redirectionPath="/posts">
            <PostPage />
          </ProtectedRoute>
        }
      />

      <Route path="/rappel" element={<HeaderRappelReact />}>
        <Route path="arrays" element={<Arrays />}>
          <Route path="maparray" element={<MapArray />} />
          <Route path="filterarray" element={<FilterArray />} />
        </Route>

        <Route path="variables" element={<Variables />} />
        <Route path="statepropsderived" element={<StatePropsDerived />} />
        <Route path="livecycle" element={<Lifecycle />} />
        <Route path="spreadrest" element={<SpreadRest />} />
        <Route path="count" element={<Count />} />
        <Route path="todo" element={<Todo />} />
        <Route path="increment" element={<Increment />} />
        <Route path="convertisseur" element={<Convertisseur />} />
      </Route>

      <Route path="*" element={<div>Error</div>} />
    </Routes>
  );
};

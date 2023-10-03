import { lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { ProtectedRoute, WithSuspense } from "@hoc";

import { useLoggedUser } from "@src/context/libs/contextUser";

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

      <Route path="*" element={<div>Error</div>} />
    </Routes>
  );
};

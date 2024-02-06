import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deletePost,
  getUserPost,
  getUsers,
  getPost,
  addPost,
  patchPost,
} from "../api/api";
import { Post, UserType } from "@interface";
import { useToastContext } from "@src/components";
import { useNavigate } from "react-router-dom";

/**
 * User
 */
export const useGetUsers = () => {
  return useQuery<Array<UserType>, Error>(["users"], getUsers);
};

export const useGetPostsUser = (userId: number) => {
  return useQuery<Array<Post>, Error>(
    ["userPosts", userId],
    () => getUserPost(userId),
    { enabled: !!userId, keepPreviousData: true },
  );
};

/**
 * CRUD Post
 */
export const useGetPost = (postId: number) => {
  return useQuery<Post, Error>(["getPost", postId], () => getPost(postId), {
    enabled: !!postId,
  });
};

export const useDeletePostUser = (userId) => {
  const queryCache = useQueryClient();
  const displayToast = useToastContext();
  return useMutation(deletePost, {
    onSuccess: () => {
      displayToast({
        severity: "success",
        summary: "Succès",
        detail: "L'article a été supprimer.",
      });
      queryCache.invalidateQueries(["userPosts", userId]);
    },
    onError: (error) => {
      console.error(error);
      displayToast({
        severity: "error",
        summary: "Erreur",
        detail: "Une erreur est survenue",
      });
    },
  });
};

export const usePatchPostUser = (postId: number) => {
  const queryCache = useQueryClient();
  const displayToast = useToastContext();

  return useMutation(patchPost, {
    onSuccess: () => {
      displayToast({
        severity: "success",
        summary: "Succès",
        detail: "L'article a été modifier.",
      });
      queryCache.invalidateQueries(["getPost", postId]);
    },
    onError: (error) => {
      console.error(error);
      displayToast({
        severity: "error",
        summary: "Erreur",
        detail: "Une erreur est survenue",
      });
    },
  });
};
export const useAddPostUser = (userId: number) => {
  const navigate = useNavigate();
  const queryCache = useQueryClient();
  const displayToast = useToastContext();
  return useMutation(addPost, {
    onSuccess: () => {
      displayToast({
        severity: "success",
        summary: "Succès",
        detail: "L'article a été ajouté",
      });
      queryCache.invalidateQueries(["userPosts", userId]);
      navigate("/posts");
    },
    onError: (error) => {
      console.error(error);
      displayToast({
        severity: "error",
        summary: "Erreur",
        detail: "Une erreur est survenue",
      });
    },
  });
};

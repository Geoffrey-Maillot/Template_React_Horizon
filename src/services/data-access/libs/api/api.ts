import { z } from "zod";
import { Post, PostSchema, UserSchema } from "@src/interface";
import { checkSchemaError } from "@src/utils/libs";

/**
 * User
 */
export const getUsers = () => {
  const url = "http://localhost:3000/users?limit=5";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const result = z.array(UserSchema).safeParse(data);
      checkSchemaError(result, data, url);
      return result?.data || data;
    });
};

export const getUserPost = (userId: number) => {
  const url = `http://localhost:3000/posts?userId=${userId}limit=5`;
  return fetch(url).then((response) =>
    response.json().then((data) => {
      const result = z.array(PostSchema).safeParse(data);
      checkSchemaError(result, data, url);
      return result?.data || data;
    }),
  );
};

/**
 * CRUD Post
 */
export const getPost = (postId: number) => {
  const url = `http://localhost:3000/posts/${postId}`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const result = PostSchema.safeParse(data);
      checkSchemaError(result, data, url);
      return result?.data || data;
    });
};

export const deletePost = (postId: number) => {
  return fetch(`http://localhost:3000/posts/${postId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const patchPost = (post: Post) => {
  return fetch(`http://localhost:3000/posts/${post.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  }).then((response) => response.json());
};

export const addPost = (post: Post) => {
  return fetch(`http://localhost:3000/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  }).then((response) => response.json());
};

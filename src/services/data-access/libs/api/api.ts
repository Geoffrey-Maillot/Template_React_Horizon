import { Post } from "@src/interface";

/**
 * User
 */
export const getUsers = () => {
  return fetch("http://localhost:3000/users?limit=5").then((response) =>
    response.json(),
  );
};

export const getUserPost = (userId: number) => {
  return fetch(`http://localhost:3000/posts?userId=${userId}limit=5`).then(
    (response) => response.json(),
  );
};

/**
 * CRUD Post
 */
export const getPost = (postId: number) => {
  return fetch(`http://localhost:3000/posts/${postId}`).then((response) =>
    response.json(),
  );
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

import { PropsWithChildren, useEffect } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";

import { validationSchema } from "./validationSchema";
import { Post } from "@src/interface";
import { useGetPost } from "@src/services/data-access";

import { usePatchPostUser, useAddPostUser } from "@src/services/data-access";
interface Props extends PropsWithChildren {
  postId: string;
  userId: number;
}

export function Form({ children, postId, userId }: Props) {
  const { data: dataPost } = useGetPost(postId);

  const sideEffect = () => {
    alert("Salut");
  };
  const { mutate: modifyPost } = usePatchPostUser(postId);
  const { mutate: addPost } = useAddPostUser(userId);

  // Instanciation du formulaire
  const methods = useForm<Partial<Post>>({
    resolver: yupResolver(validationSchema),
    shouldFocusError: true,
    mode: "onSubmit",
    defaultValues: {
      title: "",
      body: "",
      published: false,
    },
  });

  const { handleSubmit, reset } = methods;

  useEffect(() => {
    if (dataPost) {
      reset({ ...dataPost });
    }
  }, [dataPost]);

  const onSubmit = (post: Post) => {
    if (postId) {
      modifyPost({
        ...post,
        id: postId,
        userId,
      });
    } else {
      addPost({ ...post, userId });
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}

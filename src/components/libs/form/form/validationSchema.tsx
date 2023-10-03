import { Post } from "@src/interface";
import * as yup from "yup";

export const validationSchema = yup.object<Partial<Post>>({
  title: yup.string().required(),
  body: yup.string().required(),
});

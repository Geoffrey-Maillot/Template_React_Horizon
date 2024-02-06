import { Post } from "@src/interface";
import * as yup from "yup";

export const validationSchema = yup.object<Partial<Post>>({
  title: yup.string().required("Le titre est obligatoire"),
  body: yup
    .string()
    .required("Un contenu est obligatoire")
    .min(3, "Minimun trois caractères"),
});

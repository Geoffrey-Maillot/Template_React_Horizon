import { Header, PageTitle } from "@src/components";
import { useParams } from "react-router-dom";
import { useQuery } from "@src/hook";

import { Form, InputText, InputTextArea, Toggle } from "@components";
import { Button } from "primereact/button";
import clsx from "clsx";
import { ContentLayout, HeaderLayout } from "@src/layout";

export function PostPage() {
  const { postId } = useParams();
  let query = useQuery();
  const userId = query.get("user_id");

  return (
    <>
      <HeaderLayout>
        <Header />
        <PageTitle title={postId ? "Modifier article" : "Nouvelle article"} />
      </HeaderLayout>
      <ContentLayout>
        <Form postId={Number(postId)} userId={Number(userId)}>
          <div className={clsx("flex justify-center")}>
            <div
              className={clsx(
                "flex flex-col items-center gap-4",
                "relative",
                "w-full max-w-2xl pt-6",
              )}
            >
              <div className={clsx("w-full max-w-sm")}>
                <InputText name="title" label="Titre" />
              </div>
              <div className={clsx("w-full max-w-sm")}>
                <InputTextArea name="body" label="Contenu" rows={15} />
              </div>
              <div className={clsx("absolute right-4 top-0 ")}>
                <Toggle
                  name="published"
                  labelYes="Publié"
                  labelNo="Brouillon"
                  disabled={!postId}
                  color="secondary"
                />
              </div>
              <Button label="Enregistrer" type="submit" severity="success" />
            </div>
          </div>
        </Form>
      </ContentLayout>
    </>
  );
}

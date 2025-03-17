import { useGetPostsUser } from "@data-access";
import { Link } from "react-router-dom";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";

import {
  PublishedTemplate,
  DeleteButton,
  ModifyButton,
} from "./columTemplates.tsx";

interface PostsProps {
  idUserSeleted: number;
  idUserLogged: number | string;
}

export function Posts({ idUserSeleted, idUserLogged }: PostsProps) {
  const {
    data: dataPosts,
    isLoading: isLoadingPosts,
    isError: isErrorLoading,
    fetchStatus: fetchingStatusPosts,
  } = useGetPostsUser(idUserSeleted);

  const object = useGetPostsUser(idUserSeleted);

  const isLoading = isLoadingPosts && fetchingStatusPosts === "fetching";
  const isWaiting = isLoadingPosts && fetchingStatusPosts === "idle";
  const userLoggedSelected: boolean =
    Number(idUserLogged) === Number(idUserSeleted);

  return (
    <div className="w-full">
      <div>
        <DataTable
          className="w-full"
          value={dataPosts}
          loading={isLoading}
          scrollHeight="600px"
          paginator
          rowsPerPageOptions={[10, 20, 30, 50]}
          rows={10}
          emptyMessage={
            isWaiting
              ? "Sélectionnez un utilisateur"
              : isErrorLoading
                ? "Une erreur est survenue pendant le chargement des articles"
                : "Cet utilisateur n'a posté aucun article"
          }
        >
          <Column
            key="id"
            header="Titre"
            body={({ title }) => (
              <span className="line-clamp-1 font-semibold">{title}</span>
            )}
          />
          <Column
            key="id"
            header="Contenu"
            body={({ body }) => <span className="line-clamp-2">{body}</span>}
          />
          <Column
            header="Publication"
            body={PublishedTemplate}
            className="w-28"
          />
          <Column
            frozen
            alignFrozen="right"
            body={(post) => ModifyButton(post, idUserLogged)}
            className="w-28"
          />
          <Column
            frozen
            alignFrozen="right"
            body={(post) => DeleteButton(post, idUserLogged)}
            className="w-28"
          />
        </DataTable>
      </div>
      {!!userLoggedSelected && (
        <div className="my-2">
          <Link to={`/post?user_id=${idUserLogged}`}>
            <Button severity="success" label="Nouveau" />
          </Link>
        </div>
      )}
    </div>
  );
}

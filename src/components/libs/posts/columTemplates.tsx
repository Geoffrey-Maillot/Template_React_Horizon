import { ConfirmPopup } from "primereact/confirmpopup";

import { Link } from "react-router-dom";
import { Post } from "@src/interface";
import clsx from "clsx";
import { useDeletePostUser } from "../../../services/data-access/libs/hook/hook";
import { useRef, useState } from "react";
import { Button } from "primereact/button";


export const ModifyButton = (post: Post, idUserLogged) => {
  return (
    <Link
      to={`/post/${post.id}?user_id=${idUserLogged}`}
      className={clsx(post.userId !== idUserLogged && "pointer-events-none")}
    >
      <Button
        label="Modifier"
        severity="info"
        disabled={post.userId !== idUserLogged}
      />
    </Link>
  );
};

export const DeleteButton = (post: Post, idUserLogged) => {
  const { mutate: deletePost } = useDeletePostUser(idUserLogged);
  const [visible, toggleVisible] = useState<boolean>();
  const btn = useRef();
  return (
    <>
      <ConfirmPopup
        message="Supprimer l'arcticle?"
        accept={() => deletePost(post.id)}
        target={btn.current}
        visible={visible}
        onHide={() => toggleVisible(false)}
      />
      <Button
        ref={btn}
        label="supprimer"
        severity="danger"
        disabled={post.userId !== idUserLogged}
        onClick={() => {
          toggleVisible(true);
        }}
      />
    </>
  );
};

export const PublishedTemplate = ({ published }: Post) => (
  <div className="text-center">
    <div
      className={clsx("badge", published ? "badge-success" : "badge-warning")}
    >
      {published ? "Publié" : "Brouillon"}
    </div>
  </div>
);

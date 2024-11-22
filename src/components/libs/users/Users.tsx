import { useGetUsers } from "@data-access";
import { ContainerUserList } from "./ContainerUserList";
import { SkeletonUserList } from "./SkeletonUserList";
import { Button } from "primereact/button";

import { User } from "@src/components/libs/user/user";
import { Dispatch, SetStateAction } from "react";

interface UserListProps {
  selectUser: Dispatch<SetStateAction<number | string>>;
  idUserLogged: number | string;
  idSelectedUser: number;
}

export function Users({
  selectUser,
  idUserLogged,
  idSelectedUser,
}: UserListProps) {
  const {
    data: dataUsers = [],
    isLoading: isLoadingUsers,
    isError: isErrorUsers,
    refetch: refetchUser,
  } = useGetUsers();

  if (isLoadingUsers) {
    return (
      <ContainerUserList>
        <SkeletonUserList />
      </ContainerUserList>
    );
  }

  if (isErrorUsers) {
    <ContainerUserList>
      <div>
        <p>Une erreur s'est produite pendsant le chargement des données</p>
        <Button onClick={() => refetchUser()}>Réessayer</Button>
      </div>
    </ContainerUserList>;
  }

  return (
    <ContainerUserList>
      {dataUsers.length > 0 ? (
        dataUsers.map((user) => (
          <User
            key={user.id}
            selectUser={selectUser}
            {...user}
            isLogged={idUserLogged === user.id}
            isSelected={idSelectedUser === user.id}
          />
        ))
      ) : (
        <p>Aucun utilisateur</p>
      )}
    </ContainerUserList>
  );
}

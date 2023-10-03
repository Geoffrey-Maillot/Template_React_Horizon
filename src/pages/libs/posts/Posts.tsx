import { Posts, Users, Header, PageTitle } from "@components";
import { useLoggedUser } from "@src/context/libs/contextUser";
import { useLocalStorage } from "@src/hook";
import { ContentLayout, HeaderLayout } from "@src/layout";
export function PostsPage() {
  const { loggedUser } = useLoggedUser();
  const [selectedUserid, setSelectedUserId] = useLocalStorage(
    "selectedUserId",
    0,
  );

  return (
    <>
      <HeaderLayout>
        <Header />
        <PageTitle title="Liste des articles" />
      </HeaderLayout>
      <ContentLayout>
        <div className="flex gap-4">
          <Users
            selectUser={setSelectedUserId}
            idUserLogged={loggedUser?.id}
            idSelectedUser={selectedUserid}
          />
          <Posts idUserSeleted={selectedUserid} idUserLogged={loggedUser?.id} />
        </div>
      </ContentLayout>
    </>
  );
}

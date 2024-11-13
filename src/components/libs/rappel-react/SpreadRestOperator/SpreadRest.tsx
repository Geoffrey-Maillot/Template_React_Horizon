import { TabView, TabPanel } from "primereact/tabview";

import { ParentUserCard } from "./exemple/UserCard";
import { ParentButton } from "./exemple/Button";
import { ParentProfileCard } from "./exemple/ProfileCard";
import { UserForm } from "./exemple/UserForm";

export const SpreadRest = () => {
  return (
    <TabView>
      <TabPanel header="User card">
        <ParentUserCard />
      </TabPanel>
      <TabPanel header="Button">
        <ParentButton />
      </TabPanel>
      <TabPanel header="User form">
        <UserForm />
      </TabPanel>
      <TabPanel header="Profile card">
        <ParentProfileCard />
      </TabPanel>
    </TabView>
  );
};

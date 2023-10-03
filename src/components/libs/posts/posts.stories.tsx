import type { Meta, StoryObj } from "@storybook/react";

import { Posts } from "./Posts";

const meta = {
  title: "Composants/Posts",
  component: Posts,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Posts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    idUserLogged: 0,
    idUserSeleted: 3,
  },
};

export const UserLogged: Story = {
  args: {
    idUserLogged: 3,
    idUserSeleted: 3,
  },
};

import type { Meta, StoryObj } from "@storybook/react";

import { User } from "./user";

const meta = {
  title: "Composants/User item",
  component: User,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof User>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Geoffrey Maillot",
    isLogged: false,
    id: 10,
  },
};

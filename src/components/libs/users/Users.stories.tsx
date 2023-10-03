import type { Meta, StoryObj } from "@storybook/react";

import { Users } from "./Users";

const meta = {
  title: "Composants/User List",
  component: Users,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Users>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

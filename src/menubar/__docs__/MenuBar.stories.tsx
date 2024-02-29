import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { MenuBar } from "..";

const meta: Meta<typeof Example> = {
  title: "MenuBar",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {},
};

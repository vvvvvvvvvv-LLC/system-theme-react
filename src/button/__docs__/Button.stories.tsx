import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "Button",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    children: "Primary",
    primary: true,
    disabled: false,
    onClick: fn(),
  },
};

export const Typical: Story = {
  args: {
    children: "Button",
    primary: false,
    disabled: false,
    onClick: fn(),
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    primary: false,
    disabled: true,
    onClick: fn(),
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";

const meta: Meta<typeof Example> = {
  title: "TitleBar",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    title: "A Titlebar",
  },
};

export const WithClose: Story = {
  args: {
    title: "With Close",
    onClose: () => console.log("Close"),
    onResize: undefined,
  },
};

export const WithResize: Story = {
  args: {
    title: "With Resize",
    onClose: undefined,
    onResize: () => console.log("Resize"),
  },
};

export const WithBoth: Story = {
  args: {
    title: "With Both",
    onClose: () => console.log("Close"),
    onResize: () => console.log("Resize"),
  },
};


export const Inactive: Story = {
  args: {
    title: "Inactive",
    inactive: true,
  },
};

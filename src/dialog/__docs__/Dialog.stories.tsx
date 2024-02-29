import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import { Dialog } from "..";

const meta: Meta<typeof Example> = {
  title: "Dialog",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    line1: "System.css, Version 0.0.1 (2 Feb 24)",
    line2: "Look how neat this is! 💩",
  },
};

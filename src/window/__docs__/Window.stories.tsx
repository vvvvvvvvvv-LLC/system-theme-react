import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Example from "./Example";
import Window from "..";

const meta: Meta<typeof Example> = {
  title: "Window",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    children: [
      <Window.TitleBar title="A Titlebar" />,
      <Window.Pane>
        <h1>Look a window!</h1>
        <p>Here's a bunch of content in a window</p>
        <p>Lorem ipsum bla bla bla</p>
      </Window.Pane>,
    ],
  },
};

export const WithDetails: Story = {
  args: {
    children: [
      <Window.TitleBar title="A Titlebar" />,
      <Window.DetailsBar>
        <p>Here are</p>
        <p>Some</p>
        <p>Ugly Detail Things</p>
      </Window.DetailsBar>,
      <Window.Pane>
        <h1>Look a window!</h1>
        <p>Here's a bunch of content in a window</p>
        <p>Lorem ipsum bla bla bla</p>
      </Window.Pane>,
    ],
  },
};

export const Inactive: Story = {
  args: {
    children: [
      <Window.TitleBar title="A Titlebar" inactive />,
      <Window.DetailsBar>
        <p>Here are</p>
        <p>Some</p>
        <p>Ugly Detail Things</p>
      </Window.DetailsBar>,
      <Window.Pane>
        <h1>Look a window!</h1>
        <p>Here's a bunch of content in a window</p>
        <p>Lorem ipsum bla bla bla</p>
      </Window.Pane>,
    ],
  },
};

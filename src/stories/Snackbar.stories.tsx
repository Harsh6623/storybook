import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Snackbar, { SnackbarProps } from "@/components/Snackbar";

export default {
  title: "Snackbar",
  component: Snackbar,
  argTypes: {
    message: { control: "text" },
    onUndo: { action: "onUndo" },
  },
} as Meta;

const Template: StoryFn<SnackbarProps> = (args) => <Snackbar {...args} />;

export const SnackbarNote = Template.bind({});
SnackbarNote.args = {
  message: "Note Archive",
  onUndo: () => {},
};

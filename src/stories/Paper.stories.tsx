import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Paper, { PaperProps } from "../components/Paper";

export default {
  title: "Example/Paper",
  component: Paper,
} as Meta;

const Template: StoryFn<PaperProps> = (args) => <Paper {...args} />;

export const Papers = Template.bind({});
Papers.args = {
  children: "This is a paper component",
};

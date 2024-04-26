import Progress, { ProgressProps } from "@/components/Progress";
import { StoryFn } from "@storybook/react";
import React from "react";

export default {
  title: "Component/Progress",
  component: Progress,
};

const Template: StoryFn<ProgressProps> = (args) => <Progress {...args} />;

export const Progress50 = Template.bind({});
Progress50.args = {
  progress: 50,
};

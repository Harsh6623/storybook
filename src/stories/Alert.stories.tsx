import React from "react";
import Alert, { AlertProps } from "@/components/Alert";
import { StoryFn } from "@storybook/react";

export default {
  title: "Components/Alert",
  component: Alert,
};

const Template: StoryFn<AlertProps> = (args) => <Alert {...args} />;

export const Success = Template.bind({});
Success.args = {
  type: "success",
  title: "Success Alert",
};

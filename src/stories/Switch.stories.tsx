import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Switch, { SwitchProps } from "@/components/Switch";
export default {
  title: "Switch",
  component: Switch,
  argTypes: {
    onChange: { action: "onChange" },
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary", "error", "success", "warning"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
  },
} as Meta;
const Template: StoryFn<SwitchProps> = (args) => <Switch {...args} />;
export const Default = Template.bind({});
Default.args = {
  onChange: (checked: boolean): void => {
    console.log("Switch toggled:", checked);
  },
};

import React from "react";
import { StoryFn } from "@storybook/react";
import Button from "@/components/Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    label: { control: "text" },
    endIcon: { control: "text" },
    backgroundColor: { control: "color" },
    onClick: { action: "onClick" },
    size: { control: "select", options: ["small", "medium", "large"] },
    Colorvariant: {
      control: "select",
      options: ["primary", "secondary", "danger", "success"],
    },
    disabled: { control: "boolean" },
    variant: { control: "select", options: ["contained", "outlined", "text"] },
    href: { control: "text" },
  },
};

const Template: StoryFn = (args) => <Button label={""} {...args} />;

export const Buttons = Template.bind({});
Buttons.args = {
  label: "Button",
  Colorvariant: "primary",
  size: "medium",
  disabled: false,
};

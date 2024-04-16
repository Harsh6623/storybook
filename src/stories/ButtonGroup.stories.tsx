import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CustomButtonGroup from "@/components/ButtonGroup";

export default {
  title: "Components/ButtonGroup",
  component: CustomButtonGroup,
  argTypes: {
    children: { control: "text" },
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary", "danger", "success"],
      },
    },
    disabled: { control: "boolean" },
    orientation: {
      control: {
        type: "select",
        options: ["horizontal", "vertical"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["text", "outlined", "contained"],
      },
    },
    onClick: { action: "Button clicked" },
  },
} as Meta;

const Template: StoryFn<any> = (args) => (
  <CustomButtonGroup {...args}>
    <button>One</button>
    <button>Two</button>
  </CustomButtonGroup>
);

export const Default = Template.bind({});
Default.args = {
  color: "primary",
  disabled: false,
  orientation: "vertical",
  size: "medium",
  variant: "outlined",
};

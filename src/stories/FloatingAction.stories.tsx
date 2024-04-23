import React from "react";
import FloatingActionButton from "@/components/FloatingAction";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "Components/FloatingActionButton",
  component: FloatingActionButton,
  argTypes: {
    backgroundColor: { control: "color" },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["circular", "extended"],
      },
    },
  },
} as Meta;

const Template: StoryFn = (args) => (
  <FloatingActionButton
    onClick={function (): void {
      throw new Error("Function not implemented.");
    }}
    children={undefined}
    {...args}
  />
);

export const Click = Template.bind({});
Click.args = {
  onClick: () => alert("FAB clicked!"),
  children: "✚",
  backgroundColor: "#3b82f6",
  size: "large",
  variant: "circular",
};

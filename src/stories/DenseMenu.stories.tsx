import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import DenseMenu from "@/components/DenseMenu";

export default {
  title: "Components/DenseMenu",
  component: DenseMenu,
} as Meta;

const Template: StoryFn = (args) => <DenseMenu items={[]} {...args} />;

export const Default = Template.bind({});
Default.args = {
  items: [
    { text: "Single" },
    { text: "1.15" },
    { text: "Double" },
    { text: "Custom: 1.2", isSelected: true },
    { text: "Add space before paragraph" },
    { text: "Add space after paragraph" },
    { text: "Custom spacing..." },
  ],
};

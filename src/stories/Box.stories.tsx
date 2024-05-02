import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import CustomBox from "@/components/Box";

export default {
  title: "Components/CustomBox",
  component: CustomBox,
} as Meta;

const Template: StoryFn = (args) => <CustomBox {...args} />;

export const Boxs = Template.bind({});

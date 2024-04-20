import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Rating from "../components/Rating";

export default {
  title: "Example/Rating",
  component: Rating,
} as Meta;

const Template: StoryFn = (args) => <Rating value={0} {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  value: 3,
};

import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Rating, { RatingProps } from "@/components/Rating";
export default {
  title: "Components/Rating",
  component: Rating,
  argTypes: {
    Starts: { control: { type: "number", min: 1, max: 5 } },
    size: {
      control: { type: "select", options: ["small", "medium", "large"] },
    },
  },
} as Meta;
const Template: StoryFn<RatingProps> = (args) => <Rating {...args} />;
export const StarRating = Template.bind({});
StarRating.args = {
  Starts: 5,
};

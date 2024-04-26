import React from "react";
import Skeleton, { SkeletonProps } from "../components/Skeleton";
import { StoryFn } from "@storybook/react";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
};

const Template: StoryFn<SkeletonProps> = (args) => <Skeleton {...args} />;

export const Default = Template.bind({});

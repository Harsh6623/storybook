import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Backdrop from "@/components/Backdrop";
export default {
  title: "Components/Backdrop",
  component: Backdrop,
} as Meta;
const Template: StoryFn = () => (
  <Backdrop onClose={() => console.log("Backdrop closed")} />
);
export const Backdrops = Template.bind({});

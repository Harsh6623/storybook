import React from "react";
import Link, { LinkProps } from "@/components/Link";
import { StoryFn } from "@storybook/react";

export default {
  title: "Components/Link",
  component: Link,
};

const Template: StoryFn<LinkProps> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  href: "/",
  children: "Click here",
};

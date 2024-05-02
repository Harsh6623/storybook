import React from "react";
import Tab, { TabProps } from "@/components/Tab";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Tab",
  component: Tab,
} as Meta;

const Template: StoryFn<TabProps> = (args) => <Tab {...args} />;

export const Tabs = Template.bind({});
Tabs.args = {
  tabs: ["Tab 1", "Tab 2", "Tab 3"],
};

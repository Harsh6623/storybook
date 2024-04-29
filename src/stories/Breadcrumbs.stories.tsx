import BasicBreadcrumbs from "@/components/Breadcrumbs";
import { Meta, StoryFn } from "@storybook/react";
import React from "react";

export default {
  title: "Components/BasicBreadcrumbs",
  component: BasicBreadcrumbs,
} as Meta;

const Template: StoryFn = () => {
  const items = [{ label: "MUI" }, { label: "Core" }, { label: "Breadcrumbs" }];

  return <BasicBreadcrumbs items={items} />;
};

export const Default = Template.bind({});

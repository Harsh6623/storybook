import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Pagination, { PaginationProps } from "@/components/Pagination";

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["primary", "secondary", "standard", "custom"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
  },
} as Meta;

const Template: StoryFn<PaginationProps> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 10,
  onPageChange: (page: number) => console.log("Page changed to", page),
  color: "standard",
};

export const SmallSize = Template.bind({});
SmallSize.args = {
  ...Default.args,
  size: "small",
};

export const LargeSize = Template.bind({});
LargeSize.args = {
  ...Default.args,
  size: "large",
};

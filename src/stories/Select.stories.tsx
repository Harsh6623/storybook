import React from "react";
import Select from "@/components/Select";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Select",
  component: Select,
} as Meta;

const Template: StoryFn = () => {
  const options = [
    { value: "1", label: "Harsh" },
    { value: "2", label: "Nirmal" },
    { value: "3", label: "Pratik" },
  ];
  return <Select options={options} />;
};
export const SelectName = Template.bind({});

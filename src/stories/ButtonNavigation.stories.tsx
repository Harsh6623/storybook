import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import BottonNavigation from "@/components/ButtonNavigation";

export default {
  title: "Components/BottonNavigation",
  component: BottonNavigation,
} as Meta;

const Template: StoryFn = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  return <BottonNavigation value={value} onChange={handleChange} />;
};

export const Default = Template.bind({});

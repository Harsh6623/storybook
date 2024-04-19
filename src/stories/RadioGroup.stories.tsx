import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import RadioGroup from "@/components/RadioGroup";

export default {
  title: "Components/RadioGroup",
  component: RadioGroup,
} as Meta;

const Template: StoryFn = (args) => {
  const [selectedValue, setSelectedValue] = useState(args.selectedValue);

  const handleRadioChange = (value: string) => {
    console.log("Selected:", value);
    setSelectedValue(value);
  };

  return (
    <RadioGroup
      name={""}
      options={[]}
      {...args}
      selectedValue={selectedValue}
      onChange={handleRadioChange}
    />
  );
};

export const GenderOptions = Template.bind({});
GenderOptions.args = {
  name: "Gender",
  options: [
    { label: "Male", value: "male" },
    { label: "Female", value: "female" },
    { label: "Other", value: "other" },
  ],
  selectedValue: "male",
};

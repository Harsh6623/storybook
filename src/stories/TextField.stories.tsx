import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import TextField from "@/components/TextField";

export default {
  title: "Components/TextField",
  component: TextField,
  argTypes: {
    size: {
      options: ["small", "medium", "large"],
      control: { type: "select" },
    },

    required: {
      control: { type: "boolean" },
    },
    onChange: { action: "changed" },
  },
} as Meta;

const Template: StoryFn = (args) => {
  const [value, setValue] = useState(args.value || "");

  return (
    <TextField
      {...args}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
        args.onChange(e);
      }}
    />
  );
};

export const Text = Template.bind({});
Text.args = {
  id: "text-field",
  label: "Text Field",
  placeholder: "Enter text",
  value: "",
  size: "medium",
  required: false,
};

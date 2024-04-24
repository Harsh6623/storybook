import Tooltip, { TooltipProps } from "@/components/Tooltip";
import { StoryFn } from "@storybook/react";
import React from "react";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
};

const Template: StoryFn<TooltipProps> = (args: any) => <Tooltip {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "This is a tooltip",
  children: (
    <button className="bg-blue-500 text-white py-2 px-4 rounded">
      Hover over me
    </button>
  ),
};

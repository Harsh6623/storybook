import React from "react";
import { Meta } from "@storybook/react";
import Tooltip from "@/components/Tooltip";
export default {
  title: "Components/Tooltip",
  component: Tooltip,
} as Meta;
const Template = (args: any) => (
  <Tooltip>
    <button className="bg-blue-500 text-white py-2 px-4 rounded">
      Hover over me
    </button>
  </Tooltip>
);
export const Tooltips = Template.bind({});

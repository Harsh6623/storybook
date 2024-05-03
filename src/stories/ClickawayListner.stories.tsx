import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import ClickawayListner from "@/components/ClickawayListner";
import { ClickAwayListenerProps } from "@mui/material";

export default {
  title: "Components/ClickawayListner",
  component: ClickawayListner,
} as Meta;

const Template: StoryFn<ClickAwayListenerProps> = (args) => (
  <ClickawayListner {...args} />
);

export const Cards = Template.bind({});
Cards.args = {
  onClickAway: console.log,
  children: (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, animi
      repellat! Doloribus similique fugiat illo iusto impedit cupiditate, autem
      molestiae.
    </div>
  ),
};

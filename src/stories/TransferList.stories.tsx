import React from "react";
import TransferList, { TransferListProps } from "../components/TransferList";
import { StoryFn } from "@storybook/react";

export default {
  title: "TransferList",
  component: TransferList,
};

const Template: StoryFn<TransferListProps> = (args) => (
  <TransferList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  availableItems: ["Item 1", "Item 2", "Item 3"],
  transferredItems: ["Item 4", "Item 5"],
  onTransfer: (items, direction) => {
    console.log("Transfer direction:", direction);
    console.log("Items to transfer:", items);
  },
};

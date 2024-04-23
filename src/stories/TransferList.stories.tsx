import React from "react";
import { StoryFn } from "@storybook/react";
import TransferList, { TransferListProps } from "@/components/TransferList";
export default {
  title: "TransferList",
  component: TransferList,
};
const Template: StoryFn<TransferListProps> = (args: TransferListProps) => (
  <TransferList {...args} />
);
export const List = Template.bind({});
List.args = {
  items: ["Item 1", "Item 2", "Item 3"],
  onTransfer: (item: string, direction: "left" | "right") => {
    console.log(`Transferring ${item} to ${direction}`);
  },
};

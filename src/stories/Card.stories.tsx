import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Card, { CardProps } from "@/components/Card";

export default {
  title: "Components/Card",
  component: Card,
} as Meta;

const Template: StoryFn<CardProps> = (args) => <Card {...args} />;

export const Cards = Template.bind({});
Cards.args = {
  title: "Shrimp and Chorizo Paella",
  date: "April 29, 2024",
  imageUrl: "https://mui.com/static/images/cards/paella.jpg",
  description:
    "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
};

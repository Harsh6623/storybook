import React from "react";
import Accordion, { AccordionProps } from "@/components/Accordion";
import { StoryFn } from "@storybook/react";

export default {
  title: "Accordion",
  component: Accordion,
};

const Template: StoryFn<AccordionProps> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  question: "What is an Accordion?",
  answer:
    "An accordion is a folding musical instrument that is played by pressing buttons or keys to open and close bellows, which force air through reeds that vibrate to produce sound.",
};

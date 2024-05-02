import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import Container, { ContainerProps } from "@/components/Container";

export default {
  title: "Components/Container",
  component: Container,
} as Meta;

const Template: StoryFn<ContainerProps> = (args) => <Container {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <div className="bg-gray-200 p-4">
      <h1 className="text-2xl font-bold">Example Container</h1>
      <p>This is a simple example container component.</p>
    </div>
  ),
};

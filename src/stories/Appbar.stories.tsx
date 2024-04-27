import React from "react";
import Appbar from "../components/Appbar";

export default {
  title: "Appbar",
  component: Appbar,
};

const Template: React.FC = (args) => <Appbar {...args} />;

export const Default = Template.bind({});

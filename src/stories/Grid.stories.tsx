import React from "react";
import Grid from "@/components/Grid";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/Grid",
  component: Grid,
} as Meta;

const Template: StoryFn = () => (
  <Grid>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
    <div>Item 6</div>
  </Grid>
);

export const Grids = Template.bind({});

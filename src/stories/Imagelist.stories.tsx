import React from "react";
import ImageList, { ImageListProps } from "@/components/Imagelist";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "Components/ImageList",
  component: ImageList,
} as Meta;

const Template: StoryFn<ImageListProps> = (args) => <ImageList {...args} />;

export const images = Template.bind({});
images.args = {
  images: [
    "https://images.hindustantimes.com/auto/auto-images/mahindra/ScorpioClassic/exterior_mahindra-scorpio-classic_headlight_600x400.jpg",
    "https://i.pinimg.com/550x/41/ab/0e/41ab0e03f044dfd1aaf8fec1fdb478bd.jpg",
    "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mahindra/Scorpio/10764/1708522826716/front-left-side-47.jpg?impolicy=resize&imwidth=420",
    "https://wallpapercave.com/wp/wp2725042.jpg",
    "https://imgd.aeplcdn.com/370x208/n/cw/ec/128413/scorpio-classic-exterior-right-front-three-quarter-45.jpeg?isig=0&q=80",
    "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202208/2022_Mahindra_Scorpio_Classic.jpg?VersionId=6WyifYe4PukjwPReAXNsW7.pIZQtq3pJ",
  ],
};

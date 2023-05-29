import { StoryObj, Meta } from "@storybook/react";
import Button from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/Button",
  component: Button,
} as Meta<typeof Button>;

export const Template: StoryObj<typeof Button> = {
  args: {
    bgColor: 'black',
    color: 'white',
    text: 'Button',
  },
}
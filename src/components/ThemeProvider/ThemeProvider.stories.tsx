import { StoryObj, Meta } from "@storybook/react";
import { ThemeProvider } from "./ThemeProvider";

export default {
  title: "ReactComponentLibrary/ThemeProvider",
  component: ThemeProvider,
} as Meta<typeof ThemeProvider>;

export const Template: StoryObj<typeof ThemeProvider> = {
  render: ({ children }) => (
    <ThemeProvider theme="dark">{children}</ThemeProvider>
  ),
};

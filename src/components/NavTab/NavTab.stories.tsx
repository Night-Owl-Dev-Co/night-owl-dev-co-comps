import { BrowserRouter as Router } from "react-router-dom";
import { StoryObj, Meta } from "@storybook/react";
import NavTab from "./NavTab";

export default {
  title: "ReactComponentLibrary/NavTab",
  component: NavTab,
} as Meta<typeof NavTab>;

export const Template: StoryObj<typeof NavTab> = {
  args: {
    name: "Home",
    to: "/",
  },
  render: (args: any) => (
    <Router>
      <NavTab {...args} />
    </Router>
  ),
};

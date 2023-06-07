import { BrowserRouter as Router } from 'react-router-dom';
import { StoryObj, Meta } from '@storybook/react';
import NavTab from './NavTab';

export default {
  title: 'ReactComponentLibrary/NavTab',
  component: NavTab,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
    },
    to: {
      control: 'text',
    },
  },
} as Meta<typeof NavTab>;

export const Simple: StoryObj<typeof NavTab> = {
  args: {
    name: 'Home',
    to: '/',
  },
  render: (args: any) => (
    <Router>
      <NavTab {...args} />
    </Router>
  ),
};

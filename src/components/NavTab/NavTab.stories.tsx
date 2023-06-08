import { BrowserRouter as Router } from 'react-router-dom';
import { StoryObj, Meta } from '@storybook/react';
import NavTab from './NavTab';

export default {
  title: 'ReactComponentLibrary/NavTab',
  component: NavTab,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color',
    },
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
    color: 'blue',
    name: 'Home',
    to: '/',
  },
  render: (args: any) => (
    <Router>
      <div style={{ display: 'flex' }}>
        <NavTab {...args} />
      </div>
    </Router>
  ),
};

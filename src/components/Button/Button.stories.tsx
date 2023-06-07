import { StoryObj, Meta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'ReactComponentLibrary/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    bg: {
      control: 'color',
    },
    color: {
      control: 'color',
    },
  },
} as Meta<typeof Button>;

export const Default: StoryObj<typeof Button> = {
  args: {
    bg: 'orange',
    color: 'white',
    text: 'Button',
  },
  render: (args) => <Button {...args} />,
};

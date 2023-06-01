import { StoryObj, Meta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'ReactComponentLibrary/Button',
  component: Button,
} as Meta<typeof Button>;

export const Template: StoryObj<typeof Button> = {
  args: {
    bg: 'orange',
    color: 'white',
    text: 'Button',
  },
  render: (args) => <Button {...args} />,
};

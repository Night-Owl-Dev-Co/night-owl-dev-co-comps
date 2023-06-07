import { StoryObj, Meta } from '@storybook/react';
import { ThemeProvider, useThemeContext } from './ThemeProvider';
import Button from '../Button';
import { useEffect } from 'react';

export default {
  title: 'ReactComponentLibrary/ThemeProvider',
  component: ThemeProvider,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'text' },
  },
} as Meta<typeof ThemeProvider>;

const ButtonWithTheme = ({ theme }: { theme: string }) => {
  const { ThemeStyle, withTheme } = useThemeContext();
  useEffect(() => {
    if (theme) withTheme(theme);
  }, [theme]);

  return (
    <Button
      bg={ThemeStyle.backgroundColor}
      color={ThemeStyle.textColor}
      text="Button"
    />
  );
};

export const Dark: StoryObj<typeof ButtonWithTheme> = {
  args: { theme: 'dark' },
  render: (args) => (
    <ThemeProvider>
      <ButtonWithTheme {...args} />
    </ThemeProvider>
  ),
};

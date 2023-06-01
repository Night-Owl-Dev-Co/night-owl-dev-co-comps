import { StoryObj, Meta } from '@storybook/react';
import { ThemeProvider, useThemeContext } from './ThemeProvider';
import Button from '../Button';
import { useEffect } from 'react';

export default {
  title: 'ReactComponentLibrary/ThemeProvider',
  component: ThemeProvider,
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

export const Template: StoryObj<typeof ButtonWithTheme> = {
  args: { theme: 'default' },
  render: (args) => (
    <ThemeProvider>
      <ButtonWithTheme {...args} />
    </ThemeProvider>
  ),
};

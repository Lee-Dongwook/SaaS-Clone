import type { Meta, StoryObj } from '@storybook/react';

import { ToggleMenuButton } from './ToggleMenuButton';

const meta: Meta<typeof ToggleMenuButton> = {
  title: 'common/ToggleMenuButton',
  component: ToggleMenuButton,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof ToggleMenuButton>;

export const Primary: Story = {
  args: {
  },
};

export const CustomClass: Story = {
  args: {
  },
};

export const WithClick: Story = {
  args: {
  },
};

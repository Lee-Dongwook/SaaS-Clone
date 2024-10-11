import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';

const meta: Meta<typeof Button> = {
  title: 'common/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    onClick: { action: 'clicked' },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Primary Button',
  },
};

export const CustomClass: Story = {
  args: {
    className: 'bg-red-500',
    children: 'Custom Button',
  },
};

export const WithClick: Story = {
  args: {
    children: 'Click',
  },
};

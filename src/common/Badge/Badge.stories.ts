import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '.';

const meta: Meta<typeof Badge> = {
  title: 'common/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    color: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    text: 'Default Badge',
    color: 'blue',
  },
};

export const RedBadge: Story = {
  args: {
    text: 'Red Badge',
    color: 'red',
  },
};

export const GreenBadge: Story = {
  args: {
    text: 'Green Badge',
    color: 'green',
  },
};

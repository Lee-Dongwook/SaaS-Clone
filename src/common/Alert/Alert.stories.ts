import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '.';

const meta: Meta<typeof Alert> = {
  title: 'common/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'warning', 'error', 'success'],
    },
    message: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const InfoAlert: Story = {
  args: {
    type: 'info',
    message: 'This is an informational message.',
  },
};

export const WarningAlert: Story = {
  args: {
    type: 'warning',
    message: 'This is a warning message.',
  },
};

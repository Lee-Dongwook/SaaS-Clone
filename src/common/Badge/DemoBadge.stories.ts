import type { Meta, StoryObj } from '@storybook/react';
import { DemoBadge } from './DemoBadge';


const meta: Meta<typeof DemoBadge> = {
  title: 'common/DemoBadge',
  component: DemoBadge,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    color: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof DemoBadge>;

export const Default: Story = {
  args: {
  },
};

export const RedBadge: Story = {
  args: {
  },
};

export const GreenBadge: Story = {
  args: {
  },
};

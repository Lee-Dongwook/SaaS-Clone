import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '.';

const meta: Meta<typeof Avatar> = {
  title: 'common/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    src: { control: 'text' },
    alt: { control: 'text' },
    size: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: '/path/to/image.jpg',
    alt: 'Default Avatar',
    size: 40,
  },
};

export const LargeAvatar: Story = {
  args: {
    src: '/path/to/image.jpg',
    alt: 'Large Avatar',
    size: 80,
  },
};

export const SmallAvatar: Story = {
  args: {
    src: '/path/to/image.jpg',
    alt: 'Small Avatar',
    size: 30,
  },
};

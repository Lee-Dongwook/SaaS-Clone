import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '.';

const meta: Meta<typeof Breadcrumb> = {
  title: 'common/BreadCrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    items: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Category', href: '/category' },
      { label: 'Subcategory', href: '/subcategory' },
      { label: 'Product' },
    ],
  },
};

export const AllLinks: Story = {
  args: {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Category', href: '/category' },
      { label: 'Subcategory', href: '/subcategory' },
      { label: 'Product', href: '/product' },
    ],
  },
};

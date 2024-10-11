import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Card } from '.';

const meta: Meta<typeof Card> = {
  title: 'common/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    children: <p>특정 컨텐츠가 있는 기본 카드 형식</p>,
  },
};

export const WithCustomContent: Story = {
  args: {
    title: 'Custom Card',
    children: (
      <div>
        <p>커스텀 컨텐츠가 있는 카드</p>
        <Button>Action Button</Button>
      </div>
    ),
  },
};

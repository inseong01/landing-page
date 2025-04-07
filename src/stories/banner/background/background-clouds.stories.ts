import { Meta, StoryObj } from '@storybook/react';
import { SkyClouds } from './background-clouds';

const meta: Meta<typeof SkyClouds> = {
  title: 'Background/Clouds',
  component: SkyClouds,
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    bounds: { control: 'number' },
    seed: { control: 'number' },
    volume: { control: 'number' },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    timezone: 'night',
  },
};

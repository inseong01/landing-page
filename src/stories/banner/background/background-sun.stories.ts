import { Meta, StoryObj } from '@storybook/react';
import { Sun } from './background-sun';

const meta: Meta<typeof Sun> = {
  title: 'Background/Sun',
  component: Sun,
  tags: ['autodocs'],
  argTypes: {
    isManualMode: { control: 'boolean' },
    x: { control: 'number' },
    y: { control: 'number' },
    z: { control: 'number' },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    timezone: 'night',
  },
};

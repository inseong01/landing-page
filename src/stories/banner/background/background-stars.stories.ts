import { Meta, StoryObj } from '@storybook/react';
import { SkyStars } from './background-stars';

const meta: Meta<typeof SkyStars> = {
  title: 'Background/Stars',
  component: SkyStars,
  tags: ['autodocs'],
  argTypes: {
    isManualMode: { control: 'boolean' },
    count: { control: 'number' },
    factorSize: { control: 'number' },
    scaleUpSpeed: { control: 'number' },
    starSphereRadius: { control: 'number' },
  },
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    timezone: 'night',
  },
};

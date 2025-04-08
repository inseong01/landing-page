import { Meta, StoryObj } from '@storybook/react';
import { BannerBackground } from './background-group';

const meta: Meta<typeof BannerBackground> = {
  title: 'Background/Index',
  component: BannerBackground,
  tags: ['autodocs'],
  argTypes: {},
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

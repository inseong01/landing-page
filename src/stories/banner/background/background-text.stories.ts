import { Meta, StoryObj } from '@storybook/react';
import { Text } from './background-text';

const meta: Meta<typeof Text> = {
  title: 'Background/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    position: { control: 'object' },
    rotation: { control: 'object' },
    fov: { control: 'number' },
    text: { control: 'text' },
    zoom: { control: 'number' },
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

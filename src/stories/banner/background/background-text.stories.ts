import { Meta, StoryObj } from '@storybook/react';
import { Text } from './background-text';

const meta: Meta<typeof Text> = {
  title: 'Background/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    x: { control: 'number' },
    y: { control: 'number' },
    z: { control: 'number' },
    rotationX: { control: 'number' },
    rotationY: { control: 'number' },
    rotationZ: { control: 'number' },
    fov: { control: 'number' },
    text: { control: 'text' },
    zoom: { control: 'number' },
  },
  parameters: {
    layout: 'centered',
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

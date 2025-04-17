import { Meta, StoryObj } from "@storybook/react";
import { Clouds } from "./background-clouds";

const meta: Meta<typeof Clouds> = {
  title: "Background/Clouds",
  component: Clouds,
  tags: ["autodocs"],
  argTypes: {
    isManualMode: { control: "boolean" },
    color: { control: "color" },
    bounds: { control: "number" },
    seed: { control: "number" },
    volume: { control: "number" },
  },
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    timezone: "night",
  },
};

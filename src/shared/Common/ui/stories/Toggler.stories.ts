import type { Meta, StoryObj } from "@storybook/vue3";
import Toggler from "../Toggler.vue";

const meta: Meta<typeof Toggler> = {
  title: "Shared/Common/Toggler",
  component: Toggler,
  tags: ["autodocs"],
  argTypes: {
    modelValue: { description: "Состояние переключателя", control: "boolean", name: "value" },
  },
  args: {
    modelValue: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active: Story = {
  args: {
    modelValue: true,
  },
};

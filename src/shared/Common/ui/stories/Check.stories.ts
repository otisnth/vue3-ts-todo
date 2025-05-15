import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import Check from "../Check.vue";

const meta: Meta<typeof Check> = {
  title: "Shared/Common/Check",
  component: Check,
  tags: ["autodocs"],
  argTypes: {
    isDisabled: { control: "boolean" },
    label: { control: "text" },
    modelValue: { control: "boolean", name: "checked" },
  },
  args: {
    label: "Чекбокс",
    isDisabled: false,
    modelValue: false,
    "onUpdate:modelValue": fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    modelValue: true,
  },
};

export const Disabled: Story = {
  args: {
    isDisabled: true,
  },
};

export const DisabledAndChecked: Story = {
  args: {
    modelValue: true,
    isDisabled: true,
  },
};

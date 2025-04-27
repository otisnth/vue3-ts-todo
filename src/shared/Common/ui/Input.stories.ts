import type { Meta, StoryObj } from "@storybook/vue3";
import Input from "./Input.vue";

const meta: Meta<typeof Input> = {
  title: "Shared/Common/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    label: { description: "Подпись поля ввода", control: "text" },
    modelValue: { description: "Введенное значение", control: "text", name: "value" },
  },
  args: {
    modelValue: "",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithValue: Story = {
  args: {
    modelValue: "Текст",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Поле ввода",
    modelValue: "Текст",
  },
};

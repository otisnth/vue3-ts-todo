import type { Meta, StoryObj } from "@storybook/vue3";
import Button from "../Button.vue";
import { BUTTON_COLOR } from "../../model";

const meta: Meta<typeof Button> = {
  title: "Shared/Common/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    color: {
      description: "Цветовая схема кнопки",
      control: "select",
      options: Object.keys(BUTTON_COLOR),
    },
    outlined: {
      description: "Отключение заливки фона",
      control: "boolean",
    },
    default: {
      description: "Контент кнопки",
    },
  },
  args: {
    default: "Кнопка",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Outlined: Story = {
  args: {
    outlined: true,
  },
};

export const Red: Story = {
  args: {
    outlined: false,
    color: "RED",
  },
};

export const Peach: Story = {
  args: {
    outlined: false,
    color: "PEACH",
  },
};

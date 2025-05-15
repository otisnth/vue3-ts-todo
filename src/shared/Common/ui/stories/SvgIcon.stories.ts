import type { Meta, StoryObj } from "@storybook/vue3";
import SvgIcon from "../SvgIcon.vue";
import { ICONS } from "../../model";

const meta: Meta<typeof SvgIcon> = {
  title: "Shared/Common/SvgIcon",
  component: SvgIcon,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "select",
      options: Object.keys(ICONS),
      description: "Имя иконки",
    },
    width: { control: "number", description: "Ширина" },
    height: { control: "number", description: "Высота" },
    color: { control: "color", description: "Цвет" },
  },
  args: {
    name: "ALERT",
    width: 24,
    height: 24,
    color: "currentColor",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const AllIcons: Story = {
  render: (args) => ({
    components: { SvgIcon },
    setup() {
      return { icons: Object.keys(ICONS), args };
    },
    template: `
      <div style="display: flex; flex-wrap: wrap; gap: 24px;">
        <div v-for="iconName in icons" :key="iconName" style="display: flex; flex-direction: column; align-items: center; width: 80px;">
          <SvgIcon v-bind="args" :name="iconName" />
          <span style="font-size: 12px; margin-top: 8px;">{{ iconName }}</span>
        </div>
      </div>
    `,
  }),
  args: {
    width: 32,
    height: 32,
    color: "currentColor",
  },
  parameters: {
    controls: { exclude: ["name"] },
  },
};

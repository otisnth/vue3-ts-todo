import type { Meta, StoryObj } from "@storybook/vue3";
import PageContentHeader from "../PageContentHeader.vue";

const meta: Meta<typeof PageContentHeader> = {
  title: "Shared/Common/PageContentHeader",
  component: PageContentHeader,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text", description: "Заголовок страницы" },
    isBackButton: { control: "boolean", description: "Показать кнопку назад" },
  },
  args: {
    title: "Заголовок страницы",
    isBackButton: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithBackButton: Story = {
  args: {
    isBackButton: true,
  },
};

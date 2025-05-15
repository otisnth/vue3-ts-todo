import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import Task from "../Task.vue";
import type { ITask } from "../../model";

const exampleTask: ITask = {
  title: "Пример задачи",
  isDone: false,
  createdAt: new Date().toString(),
};

const meta: Meta<typeof Task> = {
  title: "Entities/Task",
  component: Task,
  tags: ["autodocs"],
  argTypes: {
    task: { control: "object" },
    isPreview: { control: "boolean" },
  },
  args: {
    task: exampleTask,
    isPreview: false,
    // @ts-expect-error:
    onUpdateTask: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Done: Story = {
  args: {
    task: { ...exampleTask, isDone: true },
  },
};

export const Preview: Story = {
  args: {
    isPreview: true,
  },
};

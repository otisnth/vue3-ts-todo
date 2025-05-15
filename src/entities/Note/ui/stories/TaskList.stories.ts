import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import TasksList from "../TasksList.vue";
import type { ITask } from "../../model";

const tasks: ITask[] = [
  { title: "Первая задача", isDone: false, createdAt: "1710000000000" },
  { title: "Вторая задача", isDone: true, createdAt: "1710000001000" },
  { title: "Третья задача", isDone: false, createdAt: "1710000002000" },
  { title: "Четвертая задача", isDone: false, createdAt: "1710000003000" },
];

const meta: Meta<typeof TasksList> = {
  title: "Entities/TasksList",
  component: TasksList,
  tags: ["autodocs"],
  argTypes: {
    tasks: { control: "object" },
    isPreview: { control: "boolean" },
  },
  args: {
    tasks,
    isPreview: false,
    // @ts-expect-error:
    onUpdateTasks: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Preview: Story = {
  args: {
    isPreview: true,
  },
};

export const AllDone: Story = {
  args: {
    tasks: tasks.map((t) => ({ ...t, isDone: true })),
  },
};

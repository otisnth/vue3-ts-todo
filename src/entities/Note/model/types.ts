export interface ITask {
    title: string;
    isDone: boolean;
    createdAt: string;
}

export interface INote {
    id: number;
    title: string;
    tasks: Array<ITask>;
    createdAt: string;
}

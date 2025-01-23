export interface ITask {
    title: string;
    isDone: boolean;
    createdAt: string;
}

export interface INote {
    title: string;
    tasks: Array<ITask>;
    createdAt: string;
}

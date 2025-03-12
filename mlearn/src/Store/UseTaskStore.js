import { create } from "zustand";

const useTaskStore = create((set) => ({
  taskTypes: [],
  selectedTaskType: null,
  tasks: {},
  taskDetails: {},
  datasets: [],

  setTaskTypes: (taskTypes) => set({ taskTypes }),
  setSelectedTaskType: (taskType) => set({ selectedTaskType: taskType }),
  setTasks: (tasks) => set({ tasks }),
  setTaskDetail: (task) =>
    set((state) => ({
      taskDetails: { ...state.taskDetails, [task.id]: task },
    })),
  setDatasets: (datasets) => set({ datasets }),
}));

export default useTaskStore;

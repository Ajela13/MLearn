import "./TaskList.css";
import { useEffect } from "react";
import useTaskStore from "../../Store/UseTaskStore";
import { getTasksByType } from "../../utils/openMlApi";
import TaskCard from "../TaskCard/TaskCard";

function TaskList() {
  const {
    selectedTaskType,
    tasks,
    visibleCountTasks,
    increaseVisibleCountTasks,
  } = useTaskStore();
  useEffect(() => {
    if (!selectedTaskType) return;
    getTasksByType(selectedTaskType.id);
  }, [selectedTaskType]);

  return (
    <div className="taskList">
      <h2 className="taskList__title">
        Tasks for {selectedTaskType?.name || "..."}
      </h2>

      {tasks.length > 0 ? (
        <ul className="taskList__list">
          {tasks.slice(0, visibleCountTasks).map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </ul>
      ) : (
        <p>No tasks type selected yet.</p>
      )}
      {tasks.length > visibleCountTasks && (
        <button
          className="taskList__show-btn"
          onClick={increaseVisibleCountTasks}
        >
          Show more
        </button>
      )}
    </div>
  );
}

export default TaskList;

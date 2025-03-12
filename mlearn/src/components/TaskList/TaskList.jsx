import "./TaskList.css";
import { useEffect } from "react";
import useTaskStore from "../../Store/UseTaskStore";
import { getTasksByType } from "../../utils/openMlApi";
import TaskCard from "../TaskCard/TaskCard";

function TaskList() {
  const { selectedTaskType, tasks } = useTaskStore();
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
        <div className="taskList__list">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      ) : (
        <p>No tasks type selected yet.</p>
      )}
    </div>
  );
}

export default TaskList;

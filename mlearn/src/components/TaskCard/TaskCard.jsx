import "./taskCard.css";
import { useEffect } from "react";
import { TaskDetails } from "../TaskDetails/TaskDetails";
import { getTaskById } from "../../utils/openMlApi";
import useTaskStore from "../../Store/Store";

function TaskCard({ task }) {
  const { taskDetails } = useTaskStore();

  useEffect(() => {
    if (!task) return;
    getTaskById(task.id);
  }, [task]);
  const data = taskDetails[task.id];
  return (
    <li className="TaskCard">
      <TaskDetails task={data} />
    </li>
  );
}

export default TaskCard;

import "./taskDetails.css";
import { useEffect, useState } from "react";
import useTaskStore from "../../Store/UseTaskStore";
import { getTaskById } from "../../utils/openMlApi";
import Preloader from "../Preloader/Preloader";

export const TaskDetails = ({ task }) => {
  const { setTaskDetail, taskDetails } = useTaskStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!task?.id) return;

    if (taskDetails[task.id]) {
      setLoading(false);
      return;
    }
    getTaskById(task.id).then((fetchedTask) => {
      if (fetchedTask) {
        setTaskDetail(fetchedTask);
      }
      setLoading(false);
    });
  }, [task, taskDetails]);

  if (loading) return <Preloader />;

  return (
    <div className="taskDetails">
      <h2 className="taskDetails__title">{task.name}</h2>
      <div className="taskDetails__content">
        <p className="taskDetails__detail">Type of task: {task.type}</p>
        <p className="taskDetails__detail">Dataset ID: {task.datasetId}</p>
        <p className="taskDetails__detail">
          Target Feature:
          {task.type == "Clustering" ? "N/A" : task.targetFeature}
        </p>

        <div className="taskDetails__dataset">
          <h3 className="taskDetails__subtitle">Task Details</h3>
          <div className="taskDetails__properties">
            <p className="taskDetails__property">
              <strong>Procedure:</strong> {task.procedureType}
            </p>
            <p className="taskDetails__property">
              <strong>Folds:</strong> {task.numberFolds}
            </p>
            <p className="taskDetails__property">
              <strong>Sampling:</strong> {task.stratified}
            </p>
            <p className="taskDetails__property">
              <strong>Evaluation Metric:</strong> {task.evaluationMeasures}
            </p>
            <p className="taskDetails__property">
              <strong>Output Format:</strong> {task.outputFormat}
            </p>
          </div>

          <div className="taskDetails__links">
            <a
              href={`https://www.openml.org/d/${task.datasetId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="taskDetails__link"
            >
              View Dataset on OpenML
            </a>
            <a
              href={task.dataSplitsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="taskDetails__link"
            >
              Download Data Splits
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

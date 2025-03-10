import "./Tasks.css";
import Header from "../Header/Header";
import { getTaskTypes } from "../../utils/openMlApi";
import { useEffect, useState } from "react";
import useTaskStore from "../../Store/Store";
import TaskList from "../TaskList/TaskList";
import Preloader from "../Preloader/Preloader";

const Tasks = () => {
  const { taskTypes, setSelectedTaskType } = useTaskStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTaskTypes().then(setLoading(false));
  }, []);

  return (
    <div className="tasks">
      <Header />
      <div className="tasks__content">
        <h1 className="tasks__title">Explore Machine Learning Tasks</h1>
        <p className="tasks__description">
          In this section, you'll find predefined machine learning tasks sourced
          from OpenML. Each task represents a specific learning problem, such as
          classification, regression, or clustering, and comes with a dataset
          and evaluation criteria. You'll see key details like the dataset ID,
          target feature, evaluation metric, and data-splitting method. These
          tasks help streamline the process of selecting and applying machine
          learning models, making it easier to experiment and gain insights from
          real-world data.
        </p>
        <p className="tasks__description">
          Pick a task type to dive into and start exploring your data!{" "}
        </p>

        {loading ? (
          <Preloader />
        ) : (
          taskTypes.map((task, index) => (
            <button
              key={index}
              title={task.description}
              onClick={() => setSelectedTaskType(task)}
              className="tasks__button"
            >
              {task.name}
            </button>
          ))
        )}
      </div>

      <TaskList />
    </div>
  );
};

export default Tasks;

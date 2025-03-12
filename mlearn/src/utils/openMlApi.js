const baseUrl = "https://www.openml.org/api/v1/json";
import useTaskStore from "../Store/UseTaskStore";

export async function getTaskTypes() {
  try {
    const response = await fetch(`${baseUrl}/tasktype/list`);
    const data = await response.json();
    if (data.task_types?.task_type) {
      const taskTypes = data.task_types.task_type.map((task) => ({
        id: task.id,
        name: task.name,
        description: task.description,
      }));

      useTaskStore.getState().setTaskTypes(taskTypes);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export async function getTasksByType(tasktype) {
  try {
    const response = await fetch(
      `${baseUrl}/task/list/type/${tasktype}/limit/5`
    );
    const data = await response.json();

    if (data.tasks?.task) {
      const tasks = data.tasks.task.slice(0, 5).map((tasks) => ({
        id: tasks.task_id,
        datasetId: tasks.did,
        name: `Task ${tasks.name}`,
        input: tasks.input,
        quality: tasks.quality,
      }));

      useTaskStore.getState().setTasks(tasks);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

export const getTaskById = async (taskId) => {
  try {
    const response = await fetch(`${baseUrl}/task/${taskId}`);
    const data = await response.json();

    if (!data.task) {
      console.warn("Task not found:", taskId);
      return;
    }

    const sourceData =
      data.task.input.find((input) => input.name === "source_data")?.data_set ??
      {};
    const estimationProcedure =
      data.task.input.find((input) => input.name === "estimation_procedure")
        ?.estimation_procedure ?? {};
    const evaluationMeasures = data.task.input.find(
      (input) => input.name === "evaluation_measures"
    )?.evaluation_measures.evaluation_measure;

    const task = {
      id: data.task.task_id,
      name: data.task.task_name,
      type: data.task.task_type,
      datasetId: sourceData.data_set_id ?? "N/A",
      targetFeature: sourceData.target_feature ?? "N/A",
      procedureType: estimationProcedure.type ?? "N/A",
      dataSplitsUrl: estimationProcedure.data_splits_url ?? "N/A",
      numberFolds:
        estimationProcedure.parameter?.find((p) => p.name === "number_folds")
          ?.value ?? "N/A",
      stratified:
        estimationProcedure.parameter?.find(
          (p) => p.name === "stratified_sampling"
        )?.value ?? "N/A",
      evaluationMeasures: evaluationMeasures
        ? Array.isArray(evaluationMeasures)
          ? evaluationMeasures.join(", ")
          : evaluationMeasures
        : "N/A",
      outputFormat: data.task.output?.predictions?.format ?? "N/A",
    };

    useTaskStore.getState().setTaskDetail(task);
  } catch (error) {
    console.error(`Error fetching task by ID (${taskId}):`, error);
  }
};

// Components
import Checkbox from "@material-ui/core/Checkbox";

// Types
import type { TaskCheckboxProps } from "../types/TaskProps";

const TaskCheckbox = ({ checked }: TaskCheckboxProps) => {
  return <Checkbox checked={checked} />;
};

export default TaskCheckbox;

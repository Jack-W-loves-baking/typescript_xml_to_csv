// Components
import Button from "@material-ui/core/Button";

// Types
import type { TaskButtonProps } from "../types/TaskProps";

const TaskButton = ({
  onClick,
  buttonText,
  color = "primary",
}: TaskButtonProps) => {
  return (
    <Button variant="contained" color={color} onClick={onClick}>
      {buttonText}
    </Button>
  );
};

export default TaskButton;

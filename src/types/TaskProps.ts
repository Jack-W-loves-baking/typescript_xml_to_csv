export interface TaskButtonProps {
  buttonText: string;
  onClick: () => void;
  color?: buttonColorType;
}

export type buttonColorType =
  | "primary"
  | "inherit"
  | "secondary"
  | "default"
  | undefined;

export interface TaskManagerProps {
  CSVIntervalData: string;
}

export interface TaskCsvLinkProps {
  data: string[][];
  fileName: string;
}

export interface TaskCheckboxProps {
  checked: boolean;
}

// Multivate dependencies
import { useState } from "react";

// Components
import TaskButton from "./TaskButton";
import CsvLink from "./CsvLink";
import { Grid } from "@material-ui/core";

// Types
import type { TaskManagerProps } from "../types/TaskProps";

// Utils
import { modifyXMLDocToCSVArray } from "../utils/modifyXMLDocToCSVArray";
import { generateSplittedCSVData } from "../utils/generateSplittedCSVData";
import { isValidCSVArray } from "../utils/isValidCSVArray";
import { generateCSVName } from "../utils/generateCSVName";

const TaskManager = ({ CSVIntervalData }: TaskManagerProps) => {
  const [splittedArray, setSplittedArray] = useState<string[][][]>();
  const onClick = () => {
    try {
      const formattedArray: string[][] =
        modifyXMLDocToCSVArray(CSVIntervalData);
      if (isValidCSVArray(formattedArray)) {
        setSplittedArray(generateSplittedCSVData(formattedArray));
        console.log(splittedArray);
      }
    } catch (e) {
      alert(e);
    }
  };
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
    >
      <TaskButton buttonText={"Click to generate"} onClick={onClick} />
      {splittedArray &&
        splittedArray.map((csvDataBlockArray: string[][]) => {
          return (
            <Grid item xs={4}>
              <CsvLink
                data={csvDataBlockArray}
                fileName={generateCSVName(csvDataBlockArray)}
              />
            </Grid>
          );
        })}
    </Grid>
  );
};

export default TaskManager;

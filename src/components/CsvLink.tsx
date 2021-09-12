// Components
import { CSVLink } from "react-csv";

// Types
import type { TaskCsvLinkProps } from "../types/TaskProps";

const CsvLink = ({ data, fileName }: TaskCsvLinkProps) => {
  return (
    <CSVLink
      data={data}
      filename={fileName}
      className="btn btn-primary"
      target="_blank"
    >
      {`File-name-${fileName}`}
    </CSVLink>
  );
};

export default CsvLink;

// Components
import Box from "@material-ui/core/Box";
import TaskManager from "./components/TaskManager";

// Hooks
import { useFetch } from "./hooks/useFetch";

function App() {
  // deconstruct and fetch the xml object from xml file.
  const { response } = useFetch("testfile.xml");
  if (response) {
    return (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        minHeight="100vh"
      >
        <TaskManager
          CSVIntervalData={
            response.getElementsByTagName("CSVIntervalData")[0].textContent
          }
        />
      </Box>
    );
  }

  return <></>;
}

export default App;

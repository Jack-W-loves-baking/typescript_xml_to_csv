// Multivate dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// components
import Grid from '@material-ui/core/Grid';
import TaskButton from './components/TaskButton';

// styles
import { makeStyles } from '@material-ui/core/styles';

// utils
import { parse } from 'fast-xml-parser';

// hooks
import { useFetch } from './hooks/useFetch';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  const {response} = useFetch('testfile.xml');
  if (response) {
    return (
      <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <TaskButton CSVIntervalData={response.getElementsByTagName('CSVIntervalData')[0].textContent}/>
      </Grid>
      <Grid item xs={12}>
      </Grid>
    </Grid>
    )
  }

  return <></>;
}

export default App;

// Multivate dependencies
import React from 'react';

// Components
import Button from '@material-ui/core/Button';

// Types
import {TaskButtonProps} from '../types/TaskButtonProps';

const TaskButton = ({CSVIntervalData} : TaskButtonProps) => {
    return (
        <Button variant="contained" color="primary">
            Primary
        </Button>
    )
}

export default TaskButton;
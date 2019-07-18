import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';

import styles from './styles';
import { STATUSES } from '../../constants';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';

const listTask = [
  {
    id: 1,
    title: 'read book',
    description: 'read marterial ui book',
    status: 0,
  },
  {
    id: 2,
    title: 'read 222 ',
    description: 'read marterial ui book',
    status: 2,
  },
  {
    id: 3,
    title: 'read dsada',
    description: 'read marterial ui book',
    status: 1,
  },
];

class TaskBoard extends Component {
  state = {
    open: false,
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map(status => {
          const taskFilter = listTask.filter(
            task => task.status === status.value,
          );
          return (
            <TaskList key={status.value} tasks={taskFilter} status={status} />
          );
        })}
      </Grid>
    );

    return xhtml;
  }

  renderForm() {
    const { open } = this.state;
    return <TaskForm open={open} handleClose={this.handleClose} />;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.TaskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.Button}
          onClick={this.openForm}
        >
          <AddIcon /> Thêm mới công việc
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

export default withStyles(styles)(TaskBoard);

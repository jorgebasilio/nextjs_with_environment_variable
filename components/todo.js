import { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// styles
import { Li } from './styles/todo';
// actions


export const changeStatusAction = (id, status) => {
  return {
    type: 'CHANGE_STATUS_TASK',
    payload: {
      task_id: id,
      status: status
    }
  }
}

function deleteTaskAction(task) {
  return {
    type: 'REMOVE_TASK',
    payload: {
      status: 'deleted',
      content: task
    }
  }
}

class ToDo extends Component {
  constructor() {
    super();
    this.status = this.status.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  static propTypes = {
    content: PropTypes.string.isRequired
  }

  static defaultProps = {
    content: ''
  }

  status() {
    return this.props.status === "pending" ? false : true;
  }

  handleStatus() {
    const { task_id } = this.props;
    const status = this.status() ? 'pending' : 'completed' ;
    this.props.dispatch(changeStatusAction(task_id, status));
  }
  handleClick(){
    const { task_id } = this.props;
    console.log(task_id);
    this.props.dispatch(deleteTaskAction(task_id));
  }

  render() {
    console.log('props',this.props);
    const { content,task_id } = this.props;
    const { status, handleStatus, handleClick }  = this;

    return (
      <Li>
        <input type="checkbox"
               checked={ status() }
               onClick={ handleStatus }/>
        { content }
        <img onClick={() =>handleClick()} src='../static/garbage.svg'/>
      </Li>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(ToDo);

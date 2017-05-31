import { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

export const Li = styled.li`
  text-align: center;
  position: relative;
  width: 50%;
  padding: 30px 0;
  background-color: #eaeaea;
  margin: 5px auto;
  font-size: 24px;
  &:hover {
    background-color: #728ca2;
    color: white;
  }
  img {
    vertical-align: center;
    height: 50%;
    position: absolute;
    vertical-align: center;
    padding: 9px;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    &:hover {
      height: 48px;
      transition: all .1s;
      padding: 6px;
    }
    &:active {
      height: 40px;
      transition: all .1s;
      padding: 9px;
    }
  }
}
`;

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

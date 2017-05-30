import { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

export const Li = styled.li`
  background-color: #eaeaea;
  font-size: 24px;
  margin: 5px auto;
  list-style: none
  padding: 30px 0;
  text-align: center;
  width: 50%;
  &:hover {
    background-color: #728ca2;
    color: white;
  }
}
`;


// actions
export const changeStatusAction = (id, status) => {
  return {
    type: 'CHANGE_STATUS',
    payload: {
      id: id,
      status: status
    }
  }
}

class ToDo extends Component {
  constructor() {
    super();
    this.status = this.status.bind(this);
    this.handleStatus = this.handleStatus.bind(this);
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
    const { id } = this.props;
    const status = this.status() ? 'completed' : 'pending';
    console.log('aquii');
    this.props.dispatch(changeStatusAction(id, status));
  }

  render() {
    const { content } = this.props;
    const { status, handleStatus }  = this;

    return (
      <Li>
        <input type="checkbox"
               checked={ status() }
               onClick={ handleStatus }/>
        { content }
      </Li>
    );
  }
}

function mapStateToProps(state) {
  console.log( state);
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(ToDo);

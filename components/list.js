import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

export const Ul = styled.ul`
  list-style: none;
`;
export const Li = styled.li`
  text-align: center;
  width: 50%;
  padding: 30px 0;
  background-color: #eaeaea;
  margin: 5px auto;
  font-size: 24px;
  &:hover {
    background-color: #728ca2;
    color: white;
  }
}
`;

class List extends Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(Object).isRequired
  }

  static defaultProps = {
    tasks: []
  }

  render() {
    const { tasks } = this.props;
    return (
      <Ul>
        { tasks.map((task, i) => (<Li key={i}>{task.content}</Li>)) }
      </Ul>
    );
  }
}

function mapStateToProps(state) {
  console.log( state);
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(List);

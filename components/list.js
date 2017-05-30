import { Component, PropTypes } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

// components
import ToDo from './todo'

export const Ul = styled.ul`
  list-style: none;
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
        { tasks.map((task, i) => (<ToDo key={i} {...task} />)) }
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

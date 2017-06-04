import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// styles
import { Ul } from './styles/list';

// components
import ToDo from './todo'

class List extends Component {
  static propTypes = {
    tasks: PropTypes.arrayOf(Object).isRequired
  }

  static defaultProps = {
    tasks: []
  }

  render() {
    const { tasks } = this.props;
    const { _handleClick } = this;
    return (
      <Ul>
        { tasks.map((task, i) => (<ToDo key={i} {...task} />)) }
      </Ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

export default connect(mapStateToProps)(List);

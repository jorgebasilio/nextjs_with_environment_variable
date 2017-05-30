import Link from 'next/link';
import Router from 'next/router';
import { createStore } from 'redux';
import withRedux from 'next-redux-wrapper';
import { fromJS } from 'immutable';

// styled-components
import { ThemeProvider } from 'styled-components';
import theme from '../lib/theme';

// components
import Form from '../components/form';
import List from '../components/list';

// reducers
import reducer from '../reducers/index';

// create store for redux
const data = {
  tasks: []
};

const makeStore = (initialState = data) => {
  return createStore(reducer, initialState);
}

// set actions
function addTaskAction(task, task_id) {
  return {
    type: 'ADD_TASK',
    payload: {
      task_id: task_id,
      status: 'pending',
      content: task
    }
  };
}

// component container
class IndexPage extends React.Component {
  state = {
    task_id: 1
  }

  handleSubmit = (event) => {
    const { task_id }  = this.state;
    const { dispatch } = this.props;
    event.preventDefault();
    if(event.target[0].value.trim() == "") return null
    this.setState({task_id: task_id + 1});
    dispatch(addTaskAction(event.target[0].value, task_id))
    event.target[0].value = "";
  }

  render() {
    return(
      <ThemeProvider theme={ theme } >
        <div>
          <h1>TODO with react and redux in Next.js</h1>
          <Form defaultValue='' onSubmit={this.handleSubmit}/>
          <List/>
        </div>
      </ThemeProvider>
    )
  }
}

export default withRedux(makeStore)(IndexPage);

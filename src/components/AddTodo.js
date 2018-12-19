import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInput = input => {
    this.setState({ input });
  };

  render() {
    return (
      <div>
        <input onBlur={e => this.updateInput(e.target.value)} />
        <button
          className="add-todo"
          onClick={() => this.props.addTodo(this.state.input)}
        >
          Add Todo
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo);

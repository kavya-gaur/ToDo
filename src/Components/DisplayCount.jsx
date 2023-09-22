import React from "react";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";

const DisplayCount = ({ todos }) => {
  return (
    <Card className="shadow-sm border border-0">
      <Card.Body>
        <h4>Number of Todos: {todos ? todos.length : "0"}</h4>
      </Card.Body>
    </Card>
  );
};

const mapStateToProps = (state) => ({ todos: state.todoReducer });

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayCount);

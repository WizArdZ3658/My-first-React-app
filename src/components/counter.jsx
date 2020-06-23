import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevState) {
    // console.log("Counter - Update", prevState);
    if (prevState.counter.value !== this.props.counter.value) {
      console.log("Counter - Update", this.props.counter.id);
    }
  }

  componentWillUnmount() {
    console.log("Counter - Unmount");
  }

  // state = {
  //   value: this.props.counter.value,
  // };       //remove local state due single source of truth

  // constructor() {
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  // handleIncrement = () => {
  //   // use arrow func or constr. to bind
  //   // console.log("Increment CLicked", this);
  //   // this.state.count++            //value gets incremented but react doesn't know about it

  //   this.setState({ value: this.state.value + 1 }); //here react knows that change is being made
  // };

  render() {
    console.log("Counter - Rendered");
    // console.log("props", this.props);    //get props from parent component
    // console.log("ID :", this.props.saveId);

    return (
      <div>
        {this.props.children}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;

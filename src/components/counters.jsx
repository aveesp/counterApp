import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onReset, counters, onDelete, onIcrement } = this.props;
    return (
      <div className="counters-cnt">
        <button className="btn btn-primary btn-sm" onClick={onReset}>
          Reset
        </button>
        {counters.map(tmp => (
          <Counter
            key={tmp.id}
            onIcrement={onIcrement}
            onDelete={onDelete}
            counter={tmp}
          />
        ))}
      </div>
    );
  }
}

export default Counters;

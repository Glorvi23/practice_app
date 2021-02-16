import React from "react";
import Output from "./components/new/output";

class App extends React.Component {
  //   return <Form />;
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  render() {
    return (
      <div>
        <input onChange={this.handleChange} value={this.state.text} />
        <button>Click</button>
        <Output text={this.state.text}/>
      </div>
    );
  }
}

export default App;

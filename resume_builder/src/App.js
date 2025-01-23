import "./App.css";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      details: [],
      name: '',
      tel:'',
      adverb:'',
      email:'',
      education:[],
      skills:[],
      projects:[]
    };
  }
  render() {
    return <div></div>;
  }
}

export default App;

import "./App.css";
import { Component } from "react";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Hanzala Khan",
      tel: "",
      adverb: "",
      email: "",
      education: [],
      skills: [],
      projects: [{ name: "Bloggir", tech: "", desc: "" }],
      certifications: [],
      honors: [],
      preview: false,
    };
  }
  render() {
    return (
      <div>
        {this.state.preview ? (
          <div>
            <h1>{this.state.name}</h1>
          </div>
        ) : (
          <div id="input_grid">
            <div>
              <label labelFor="name">Name</label>
              <input placeholder="Enter your Name" id="name"></input>
            </div>
            <div>
              <label labelFor="tel">Adverb</label>
              <input placeholder="adverb" id="adverb"></input>
            </div>
            <div>
              <label labelFor="tel">Telephone</label>
              <input placeholder="Telephone" id="tel"></input>
            </div>
            <div>
              <label labelFor="tel">Email</label>
              <input placeholder="Email" id="email"></input>
            </div>
            <div>
              <h3>Projects</h3>
              {this.state.projects.map((project) => (
                <div className = 'project'>
                  <div>{project.name}</div>
                  <div>{project.desc}</div>
                  <div>{project.tech}</div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default App;

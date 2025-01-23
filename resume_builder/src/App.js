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
      projects: [
        {
          name: "Bloggir",
          link: "",
          tech: "Python, Flask, JavaScript, HTML, Bootstrap",
          desc: `Blogging website,-write/delete/edit a blog,- blog saved on Remote database - user can
                login/create account- like/bookmark/comment functionality`,
        },
        {
          name: "ABloggir",
          link: "",
          tech: "Python, Flask, JavaScript, HTML, Bootstrap",
          desc: `Blogging website,-write/delete/edit a blog,- blog saved on Remote database - user can
                login/create account- like/bookmark/comment functionality`,
        }
      ],
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
              <label labelfor="name">Name</label>
              <input placeholder="Enter your Name" id="name"></input>
            </div>
            <div>
              <label labelfor="tel">Adverb</label>
              <input placeholder="adverb" id="adverb"></input>
            </div>
            <div>
              <label labelfor="tel">Telephone</label>
              <input placeholder="Telephone" id="tel"></input>
            </div>
            <div>
              <label labelfor="tel">Email</label>
              <input placeholder="Email" id="email"></input>
            </div>
            <div>
              <h3>Projects</h3>
              {this.state.projects.map((project) => (
                <div className="project" key={project.name}>
                  <input placeholder="Project Name"
                   value = {project.name}
                   onChange ={e=>this.setState({project:e.target.value})}
                   ></input>
                  <input placeholder="Link to Project"></input>
                  <input placeholder="Project Description"></input>
                  <input placeholder="Project Stack/technologies used"></input>
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

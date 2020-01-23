import React, { Component } from "react";
import axios from "axios";

class User extends Component {
  state = { data: [] };

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(
      response => {
        const data = response.data;
        this.setState({data});
        console.log(data);
      },
      error => console.log(error)
    );
  }
  render() {
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>id</th>
            </tr>
          </thead>
          <tbody>
              {this.state.data.map(d=>
              <tr key={d.id}>
                  <td>{d.userId} </td>
              <td>{d.title}</td>
              </tr>)}
              
          </tbody>
        </table>
      </div>
    );
  }
}

export default User;

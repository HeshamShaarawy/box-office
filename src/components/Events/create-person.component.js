import React, { Component } from 'react';
import axios from 'axios';

export default class CreatePerson extends Component {
  constructor(props) {
    super(props);

    this.onChangePersonname = this.onChangePersonname.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      personname: ''
    }
  }

  onChangePersonname(e) {
    this.setState({
      personname: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const person = {
      personname: this.state.personname
    }

    console.log(person);

  componentDidMount() {
  componentDidMount() {
  componentDidMount() {
  componentDidMount() {
    axios.post('/api/persons/add', person)
      .then(res => console.log(res.data));

    axios.post('process.env.REACT_APP_API_URL/api/persons/add', person)
      .then(res => console.log(res.data));
    
    function createPerson (personname) {
      const options = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ personname: personname})
      };
      return fetch("process.env.REACT_APP_API_URL/api/persons/add", options)
        .then((res) => res.json())
        .catch((err) => console.log("err", err));
    }

    

    this.setState({
      personname: ''
    })
  }

  render() {
    return (
      <div>
        <h3>Create New Person</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Person Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.personname}
                onChange={this.onChangePersonname}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Person" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}
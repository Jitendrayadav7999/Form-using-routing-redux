import React, { Component } from 'react'


export default class UserForm extends Component {
  state = {
    name: "",
    age: "",
    email: "",
    number: "",
    gender: "Male",
    users: [],
    update: false,
    activeUser: null
  }

  submitHandle(e) {
    e.preventDefault()
    const user = {
      name: this.state.name,
      age: this.state.age,
      email: this.state.email,
      number: this.state.number,
      gender: this.state.gender,
    }
    if (this.state.update) {
      let copy = this.state.users
      Object.assign(copy[this.state.activeUser], user)
      this.setState({ users: [...copy], update: false, activeUser: null, name: "", age: "", email: "", number: "" })

    } else {
      this.setState({ users: [...this.state.users, user], name: "", age: "", email: "", number: "" })
    }



  }
  updateHandle(index) {
    const user = this.state.users[index]
    this.setState({ name: user.name, age: user.age, email: user.email, number: user.number, gender: user.gender, update: true, activeUser: index })
  }
  deleteUser(user) {
    let copy = this.state.users.filter(item => item != user)
    this.setState({ users: [...copy] })
  }
  render() {
    return (
      <div className='main-container'>

        <div className='form'>
          <h3>User Details </h3>
          <form>
            <input className='input' value={this.state.name} type="text" aria-required="true" placeholder='Enter Name' onChange={(e) => { this.setState({ name: e.target.value }) }} /><br /><br />
            <input className='input' value={this.state.age} type="number" placeholder='Enter Age' onChange={(e) => { this.setState({ age: e.target.value }) }} /><br /><br />
            <input className='input' value={this.state.email} type="email" placeholder='Enter Email' onChange={(e) => { this.setState({ email: e.target.value }) }} /><br /><br />
            <input className='input' value={this.state.number} type="number" placeholder='Enter Number' onChange={(e) => { this.setState({ number: e.target.value }) }} /><br /><br />
            <label>Gender: </label>
            <select value={this.state.gender} onChange={(e) => { this.setState({ gender: e.target.value }) }}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select><br /><br />
            <button className='btn' onClick={this.submitHandle.bind(this)}>{this.state.update ? "Update" : "Add"}</button>
            <input className='btn' type="reset" />

          </form>
        </div>
        <div className='user-list'>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Mobile</th> 
                <th>Gender</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.age}</td>
                      <td>{user.email}</td>
                      <td>{user.number}</td>
                      <td>{user.gender}</td>
                      <td><button className='update' onClick={() => this.updateHandle(index)}>Update</button></td>
                      <td><button className='delete' onClick={() => this.deleteUser(user)}>Delete</button></td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

import React, { useState } from 'react'

export default function UserFormFnC() {
    const [name,setName]= useState("")
    const [age,setAge]= useState("")
    const [email,setEmail]= useState("")
    const [number,setNumber]= useState("")
    const [gender,setGender]= useState("Male")
    const [users,setUsers]= useState([])
    const [update,setUpdate]= useState(false)
    const [activeUser,setActiveUser]= useState(null)


    const submitHandle = (e) =>{
        e.preventDefault()
        const user = {
          name,
          age,
          email,
          number,
          gender,
        }
        if(update){
            let copy = users
            Object.assign(copy[activeUser],user)
            setUsers([...copy])
            setUpdate(false)
            setActiveUser(null)
            setName("")
            setAge("")
            setEmail("")
            setNumber("")
        }else{
            setUsers([...users,user])
            setName("")
            setAge("")
            setEmail("")
            setNumber("")
        }
       
        
            
        
    }
    const updateHandle =(index)=>{
          const user = users[index]
          setName(user.name)
          setAge(user.age)
          setEmail(user.email)
          setNumber(user.number)
          setGender(user.gender)
          setUpdate(true)
          setActiveUser(index)
          
    }
    const deleteUser=(user)=>{
      let copy =users.filter(item => item != user)
      setUsers([...copy])
    }
  return (
      <div className='main-container'>

        <div className='form'>
          <h3>User Details </h3>
          <form>
            <input className='input' value={name} type="text" placeholder='Enter Name' onChange={(e) => { setName( e.target.value )}} /><br /><br />
            <input className='input' value={age} type="number" placeholder='Enter Age' onChange={(e) => { setAge(e.target.value ) }} /><br /><br />
            <input className='input' value={email} type="email" placeholder='Enter Email' onChange={(e) => { setEmail( e.target.value ) }} /><br /><br />
            <input className='input' value={number} type="number" placeholder='Enter Number' onChange={(e) => { setNumber( e.target.value ) }} /><br /><br />
            <label>Gender: </label>
            <select value={gender} onChange={(e) => { setGender( e.target.value ) }}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select><br /><br />
            <button className='btn' onClick={submitHandle}>{update ? "Update" : "Add"}</button>
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
                users.map((user, index) => {
                  return (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.age}</td>
                      <td>{user.email}</td>
                      <td>{user.number}</td>
                      <td>{user.gender}</td>
                      <td><button className='update' onClick={() => updateHandle(index)}>Update</button></td>
                      <td><button className='delete' onClick={() => deleteUser(user)}>Delete</button></td>
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

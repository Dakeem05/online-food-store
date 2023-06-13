import React from 'react'
import { MdEdit, MdDelete } from "react-icons/md";

import { useState } from 'react'
export const EnrollmentForm = (props) => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("");
  const handleClick = (e) =>{
    handleInputReset("","","")
    props.settotalUpdatedSeats(props.totalSeats -1)
    props.setUpdatedSeats(props.currentSeats -1)
    const randomKey = Math.floor(1000 + Math.random() * 9000)
    let id = randomKey;
    props.setStudentDetails({
      key: id,
      fname: firstName,
      lname: lastName,
      program: props.choosenProgram,
      email : email,
      edit: <MdEdit className='actionIcon'/>,
      delete: <MdDelete className='actionIcon' onClick={(()=> props.handleItemSelection("delete", id))}/>
    })
    e.preventDefault()
  }
  const handleInputChange = (setInput, e) =>{
    setInput(e.target.value)
  }
  const handleInputReset = (fname, lname, email) =>{
    setFirstName(fname);
    setLastName(lname);
    setEmail(email);
  }
  return (
    <div className='enrolContainer'>
       <form className='enrolForm' name='enrolForm' onSubmit={handleClick}>
        <ul className="ulEnrol">
        <li>

        <label for="firstname"></label>
        <input
         type="text"
          name="firstname"
          className='inputFields'
          placeholder='First Name'
           id="firstname" 
           value={firstName}
            onChange={(e)=>handleInputChange(setFirstName, e)
        }/>
        </li>
        <li>

        <label for="lastname"></label>
        <input 
        type="text"
        className='inputFields'
        name="lastname"
        placeholder='Last Name'
        id="lastname"
        value={lastName}
        onChange={(e)=>{
          handleInputChange(setLastName, e)
        }}/>
        </li>
        <li>
          <label for="email"></label>
          <input
           type="email" 
           className='inputFields'
           name="email" 
          id="email"
          placeholder='Email'
          value={email}
          onChange={(e)=> handleInputChange(setEmail, e)} />
        </li>
        <li id="center-btn">

        <input
         type="submit" 
         value="Enroll"
         id='btnEnrol'
         name='Enrol'
         alt='Enrol' 
         onClick={handleClick}/>
        </li>
       
        </ul>
        </form> 
    </div>
  )
}

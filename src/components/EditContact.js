import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EditContact (props) {
    const { id } = props
    console.log("para editar", props)
    
    const [name, setName] = useState('')
    const [lastname, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    
  
    useEffect(() => {
      axios.get(`http://localhost:3000/contato/${id}`)
      .then(function (response) {
        const { data: { name, lastname } } = response 
        setName(name)
        setLastName(lastname)
      })
      .catch(function (error) {
        console.log(error.toJSON())
      })
    },[id])
  
    const update = (e) => {
      e.preventDefault()
  
      axios.put(`http://localhost:3000/posts/${id}`, {
        name: name,
        lastname: lastname,
        phone: phone,
        email: email
      })
      .then(function (response) {
        alert(JSON.stringify(response))
        console.log('Usuário criado com sucesso!')
      })
      .catch(function (error) {
        console.log(error)
      })
    }
    
    return (
        <>
        <div className="ui center aligned container">
        <i className="angle double down icon" style={{color:"turquoise", paddingTop:"10px"}}></i>
        </div>

        <div style={{paddingTop:"20px"}}>
        <div clasName="ui compact segment" style={{padding:"20px", backgroundColor:"teal"}}>
         <label style={{color:"whitesmoke", fontSize:"16px"}}> <i className="edit icon"></i> Edit Contact</label>
        <form className="ui form segment" onSubmit={() => update()}>
                <div className="field">
                    <label>Name</label>
                    <input 
                    type="text" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)}/>
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input 
                    type="text" 
                    value={lastname} 
                    onChange={(event) => setLastName(event.target.value)}/>
                </div>
                <div className="field">
                    <label>Phone</label>
                    <input 
                        type="text" 
                        value={phone} 
                        onChange={(event) => setPhone(event.target.value)}/>
                </div>
                <div className="field">
                    <label>Email</label>
                    <input 
                        type="text" 
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)}/>
                </div>
                
            <button type="submit" className="ui teal button" >Submit</button>

        </form>
        </div>
        </div>

      </>
    )
    
  }

  export default EditContact;
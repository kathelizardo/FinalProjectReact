import React, { useState } from 'react';
import axios from 'axios';

function AddContact() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [lastname, setLastName] = useState('')
    

    const create = () => {
        if (!name && !phone && !email) return console.error('Campo Requerido')
   
    axios.post('http://localhost:3000/contatos', {
            name: name,
            lastname: lastname,
            phone: phone,
            email: email,
        })

    .then(function (response){
        console.log(response);
        console.log('Contato adicionado com sucesso')
    })

    .catch(function (error){
        console.error(error)
    });
}
    return(
        <>
        <div style={{padding:"20px"}}>
         <label style={{color:"whitesmoke", fontSize:"16px"}}> <i class="user plus icon"></i> Add Contact</label>
        <form className="ui form segment" onSubmit={() => create()}>
                <div class="field">
                    <label>Name</label>
                    <input 
                    type="text" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)}/>
                </div>
                <div class="field">
                    <label>Last Name</label>
                    <input 
                    type="text" 
                    value={lastname} 
                    onChange={(event) => setLastName(event.target.value)}/>
                </div>
                <div class="field">
                    <label>Phone</label>
                    <input 
                        type="text" 
                        value={phone} 
                        onChange={(event) => setPhone(event.target.value)}/>
                </div>
                <div class="field">
                    <label>Email</label>
                    <input 
                        type="text" 
                        value={email} 
                        onChange={(event) => setEmail(event.target.value)}/>
                </div>
                
            <button class="ui button" type="submit">Submit</button>

        </form>
        </div>
        </>
        
    )
}


export default AddContact;
import React, { useEffect, useState } from "react";
import axios from 'axios'

function Contacts() {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    getContactInfo()
  }, [])

  const getContactInfo = () => {
    axios.get('http://localhost:3000/contatos')
      .then(function (response) {
        console.log("Os repositorios são:" , response.data);
        setContact(response.data)
      })
      .catch(function (error) {
        console.log(error);
      })
  }

//   const alertDelete = (event) => {

//   }
  const deleteContact = (id) => {
    axios.delete(`http://localhost:3000/contatos/${id}`)
      .then(function () {
        console.log('Contato deletado com sucesso!');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
      <>
      <label> <i className="users icon"></i>Contact List</label>
    <div className="Tabla">
      <table className="ui selectable celled table">
      <thead className="Thead">
        <tr className="center aligned">
          <th>Name</th>
          <th>Last Name</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
            {contact.map((item) => {
              return (
                <tr key={item.id} className="center aligned">
                  <td>{item.name}</td>
                  <td>{item.lastname}</td>
                  <td>{item.phone}</td>
                  <td>{item.email}</td>
                  <td>
                    <button type="submit" class="ui icon button"> <i class="edit icon"></i></button>
                    <button type="submit" onClick={() => deleteContact(item.id)} class="ui icon button"><i class="trash alternate outline icon"></i></button>
                  </td>
                </tr>)})}  
      </tbody>
    </table>
    </div>
    </>
  );
}



export default Contacts;
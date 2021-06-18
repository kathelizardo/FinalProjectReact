import React, {useState, useEffect} from 'react'
import axios from "axios";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const SearchBar = () => {
  const [data, setData] = useState ([]);
  const [search, setSearch] = useState (" ")
 
  const handleChange = (event) => {
      setSearch (event.target.value)
  };

  
  const handleClick = async event => {
      event.preventDefault();

      try{
          const results = await axios (`http://localhost:3000/contatos/?q=${search}`)
          console.log("Busqueda:", results)
          setData (results.data);
      }
      catch (error) {
          console.log(error);
      }      
  };

  console.log("O contacto é",data);


  const deleteContact = (id) => {
    axios.delete(`http://localhost:3000/contatos/${id}`)
      .then(function () {
        console.log('Contato deletado com sucesso!');
      })
      .catch(function (error) {
        console.log(error);
      });
  }


  const EditContact = (event) => {
    event.preventDefault()
    if (!name && !lastname) return console.error('Campos obrigatórios!')

    axios.put(`http://localhost:3000/contatos/${id}`, {
      name: name,
      lastname: lastname,
      phone: phone,
      email: email
    })
    .then(function (response) {
      alert(JSON.stringify(response))
      console.log('Usuário modificado com sucesso!')
    })
    .catch(function (error) {
      console.log(error)
    })

return(
    <>
    <div style={{padding:"20px"}}>
     <label style={{color:"whitesmoke", fontSize:"16px"}}> <i class="user plus icon"></i> Add Contact</label>
    <form className="ui form segment" onSubmit={() => EditContact()}>
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
 
  return ( 
      <>  
      <div className="ui center aligned container">
          <div  class="ui input focus">
            <input 
            type="text" 
            placeholder="Search"
            value={search}
            onChange={handleChange}
            />
          </div>
          
          <button 
          class="ui teal button"
          type="submit"
          onClick={handleClick}>
          <i className="search icon"></i>
          Search
          </button>
      </div>
          {/* CARD DE RESULTADOS */}
          <div className="ui center aligned container">
            <Router>
            {data.map(repo => (     

                <div class="ui cards" style={{justifyContent:"center", paddingTop:"30px"}} key={repo.name}>
                  <div class="card">
                    <div class="content">
                      <div class="header">
                      {repo.name + " " + repo.lastname}
                      </div>
                      <div class="meta">
                      Email: {repo.email}
                      </div>
                      <div class="description">
                      Phone: {repo.phone}
                      </div>
                    </div>
                   
                      <div class="extra content">
                        <div class="ui two buttons">
                            <Link className="ui basic teal button"
                                  role="button"
                                  to="/editcontact">Edit
                            </Link>
                          <button type="submit" onClick={() => deleteContact(repo.id)} class="ui red icon button"><i class="trash alternate outline icon"></i></button>
                        </div>
                      </div>
                  </div>
                </div>
            ))}
            
              <Switch>
                <Route path="/editcontact">
                  <EditContact/>
                </Route>
              </Switch>
         
            </Router>
            </div>

      </>
  );
};


  

export default SearchBar;


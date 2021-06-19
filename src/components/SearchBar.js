import React, {useState} from 'react'
import axios from "axios";
import EditContact from "./EditContact";
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
          if (!results.data.length) return console.warn('Nenhum resultado encontrado!')
          setData (results.data)          
      }
      catch (error) {
          console.log(error);
      }      
  };
  
  console.log("O contacto é",data);
  
  
  const deleteContact = (id) => {
    axios.delete(`http://localhost:3000/contatos/${id}`)
      .then(function () {
        console.log('Contato para deletar:', id)
        console.log('Contato deletado com sucesso!');
      })
      .catch(function (error) {
        console.log(error);
      });
         
    }


   return ( 
      <>  
      <div className="ui center aligned container">
          <div  className="ui input focus">
            <input 
            type="text" 
            placeholder="Search"
            value={search}
            onChange={handleChange}
            />
          </div>
          
          <button 
          className="ui teal button"
          type="submit"
          onClick={handleClick}>
          <i className="search icon"></i>
          Search
          </button>
      </div>
          {/* CARD DE RESULTADOS */}
          <Router>
          <div className="ui center aligned container">
           
            {data.map(repo => (     

                <div className="ui cards" style={{justifyContent:"center", paddingTop:"30px"}} key={repo.name}>
                  <div className="card">
                    <div className="content">
                      <div className="header">
                      {repo.name + " " + repo.lastname}
                      </div>
                      <div className="meta">
                      Email: {repo.email}
                      </div>
                      <div className="description">
                      Phone: {repo.phone}
                      </div>
                    </div>
                   
                      <div className="extra content">
                        <div className="ui two buttons">
                            <Link className="ui icon teal button"
                                  role="button"
                                  to="/editcontact"><i className="edit icon"></i>
                            </Link>
                          <button type="submit" onClick={() => deleteContact(repo.id)} className="ui red icon button"><i className="trash alternate outline icon"></i></button>
                        </div>
                      </div>
                  </div>
                </div>
            ))}
            </div>
              <Switch>
                <Route path="/editcontact">
                  <EditContact data={data}/>
                </Route>
              </Switch>
          </Router>

      </>
  );
};

export default SearchBar;


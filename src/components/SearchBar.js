import React, {useState} from 'react'
import axios from "axios";


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
                        <div class="ui basic teal button">Edit</div>
                        <button type="submit" onClick={() => deleteContact(repo.id)} class="ui red icon button"><i class="trash alternate outline icon"></i></button>
                      </div>
                    </div>
                  </div>
                </div>


            ))}
            </div>

      </>
  );
};

export default SearchBar;


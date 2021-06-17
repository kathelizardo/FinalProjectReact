import React, {useEffect, useState} from 'react'
import axios from "axios";

function SearchBar() {
    const [search, setSearch] = useState("");
  
    useEffect(() => {
      getContactInfo()
    }, [search.length])
  
    const getContactInfo = event => {
       
      axios.get(`http://localhost:3000/contatos/?${search}`)
        .then(function (response) {
          console.log("Sua busqueda é:" , response.data);
          setSearch(response.data)
        })
        .catch(function (error) {
          console.log(error);
        })
    }

  
  return (
    <>
    <div class="ui segment">
        <div>
        <label><i class="inverted circular search icon"></i>Find Contact</label>
        </div>
        <div class="ui fluid action input">
            <input type="text" 
            placeholder="Search..."
            value={search}
            />
        </div>
        <button type="submit" onClick={(event) => setSearch(event.target.value)}>Buscar</button>
    </div>
     
    </>
  );

}
export default SearchBar;


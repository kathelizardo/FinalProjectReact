import React from "react"
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import SearchBar from "./components/SearchBar";
import Contacts from "./components/Contacts";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

////HOMEPAGE/////
export default function App() {
  return (
    <div className="App-header">
        <div  className="ui container segment" style={{backgroundColor: "whitesmoke"}}>
          <div className="Header"><Header/></div>
    <Router>
    
        <div style={{padding: "10px 200px 10px 200px"}}> 
          <div className="ui placeholder segment" style={{backgroundColor: "rgb(224, 230, 230)"}}>
              <div className="ui two column stackable center aligned grid" style={{padding: "20px"}}>
                  <div className="middle aligned row">

                      <div className="column">
                          <div className="ui icon header">
                          <i className="search icon"></i>
                          </div>
                          <div>
                          <Link className="ui teal button"
                                role="button"
                                to="/findcontact">Find Contact
                          </Link>
                          </div>
                      </div>

                      <div className="column">
                          <div class="ui icon header">
                          <i className="user plus icon"></i>      
                          </div>
                          <div >
                          <Link class="ui teal button"
                                role="button"
                                to="/addcontact">Add New Contact
                          </Link>
                          </div>
                      </div>

                      <div className="column"  style={{paddingTop: "20px"}}>
                          <div class="ui icon header">
                          <i className="users icon"></i>      
                          </div>
                          <div >
                          <Link class="ui teal button"
                                role="button"
                                to="/contact">Complete Contact List
                          </Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/addcontact">
            <div className="ui container segment" style={{backgroundColor: "teal", padding:"20px"}} > 
            <AddContact/>
            </div>
            
          </Route>
          <Route path="/findcontact">
           <SearchBar/>
          </Route>
          
          <Route path="/contact" className="ui center aligned container segment">
            <Contacts/>
          </Route>
        </Switch>
      
    </Router>
        </div>
    </div>
  );
}

function Home() {
  return (
    <div>

    </div>
  );
}

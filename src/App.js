import React from "react"
import './App.css';
import Header from "./components/Header";
import AddContact from "./components/AddContact";
import SearchBar from "./components/SearchBar";
import Contacts from "./components/Contacts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function App() {
  return (
    <div className="App-header">
      <div className="ui center aligned container segment">
        <div className="Header"><Header/></div>
    <Router>
    
        <div > 
          <div className="ui placeholder segment">
              <div className="ui two column stackable center aligned grid">
                  <div className="ui vertical divider">Or</div>
                  <div className="middle aligned row">

                      <div className="column">
                          <div className="ui icon header">
                          <i className="search icon"></i>
                          </div>
                          <div className="ui black button">
                          <Link to="/findcontact">Find Contact</Link>
                          </div>
                      </div>

                      <div className="column">
                          <div class="ui icon header">
                          <i className="user plus icon"></i>      
                          </div>
                          <div class="ui black button">
                          <Link to="/addcontact">Add New Contact</Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="ui black button">
            <Link to="/contact">Complete Contact List</Link>
          </div>
        </div>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/addcontact">
            <Add />
          </Route>
          <Route path="/findcontact">
            <Find />
          </Route>
          <Route path="/contact">
            <List />
          </Route>
        </Switch>
      
    </Router>
    </div>
    </div>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Add() {
  return (
    <div className="Add">
          <div  className="ui segment"><AddContact/></div>
    </div>
  );
}

function Find() {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}

function List() {
  return (
    <div>
      <Contacts/>
    </div>
  );
}
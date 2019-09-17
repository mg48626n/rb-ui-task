import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cards from './Components/Cards';
import "bootstrap/dist/css/bootstrap.min.css";
import Search from './Components/Search';

class App extends Component {

  state={
    candidates:[],
    search:""
    };

    handleSearch = e =>{
      console.log("..."+e.target.value);
      this.setState({
        search:e.target.value
      });
    }
  
  componentDidMount() {
    fetch('/candidates.json')
      .then(response => {
        return response.json();
      })
      .then(candidates => { 
        this.setState({
          candidates:candidates
        })
        console.log(candidates)
      });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className="App-body">
          <div>          
            <Search handleSearch={this.handleSearch} search={this.state.search} candidates={this.state.candidates}/>
          </div>
          <div className="card-body">
            <Cards details={this.state.candidates} search={this.state.search}></Cards>
          </div>
        </div>
      </div>
    );
  }
}

export default App;

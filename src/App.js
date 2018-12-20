import React, { Component } from 'react';
import './App.css';
import './searchbar/SearchBar.css';
import SearchBar from './searchbar/SearchBar.js';
import Results from './results/Results.js'

class App extends Component {
    constructor(){
        super();
        this.state ={
          searchValue : 'Empty',
          searchResult:[]
        };

        this.updateSearchValue = this.updateSearchValue.bind(this);
    }

    updateSearchValue(x) {
      this.setState({
          searchValue: x
      }, () => {this.getSearchResult()});
    }

    getSearchResult(){
    let url = 'https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=' + this.state.search_value +'&site=stackoverflow'
      fetch(url, {
          method: 'GET'
      })
          .then(res => res.json())
          .then(
              (result) => {
                  this.setState({
                      searchResult: result.items
                  });
                  console.log(result.items)
              },
              (error) => {
                  console.log('Error at fetch')
              }
          );
    }

    render() {
    return (
      <div className="App">

        <SearchBar action={this.updateSearchValue}/>
        <br></br>

        <div class="container results">


                <Results searchResult={this.state.searchResult}/>
            
        </div>

      </div>
    );
  }
}
    export default App;

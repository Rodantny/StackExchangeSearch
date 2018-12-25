import React, { Component } from 'react';
import './App.css';
import './searchbar/SearchBar.css';
import SearchBar from './searchbar/SearchBar.js';
import Results from './results/Results.js';

class App extends Component {
    constructor(){
        super();
        this.state ={
            userHasSearch:false,
            searchValue:'',
            searchResult:[]
        };
        this.updateSearchValue = this.updateSearchValue.bind(this);
    }

    updateSearchValue(newSearchValue) {
        newSearchValue = String(newSearchValue);

     this.setState({
         userHasSearch:true,
         searchValue: newSearchValue
          }, () => {this.getSearchResult()});
    }

    getSearchResult(){
    let url = 'https://api.stackexchange.com/2.2/search?order=desc&sort=activity&intitle=' + this.state.searchValue +'&site=stackoverflow&filter=!azbR7x6ZSfGPs1&key=EWJxZhShOdpF)HQkbg*PeA((';

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
        {this.state.userHasSearch? <Results searchResult={this.state.searchResult}/>:''}

      </div>
    );
  }
}
    export default App;

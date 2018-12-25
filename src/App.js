import React, { Component } from 'react';
import './App.css';
import Intro from './introImg.png'
import SearchBar from './searchbar/SearchBar.js';
import Navigation from "./navigation/Navigation.js";
import Results from './results/Results.js';



class App extends Component {
    constructor(){
        super();
        this.state ={
            userHasSearch:false, //false then true for session duretion
            searchValue:'',
            searchResult:[],

            showSearchResultList:true,
            ExtendedQuestionId: '', //ID needed to fetch individual question api.
            ExtendedQuestionTitle:'',//Title for Navigation.
        };
        this.updateSearchValue = this.updateSearchValue.bind(this);
        this.updateExtendedQuestion = this.updateExtendedQuestion.bind(this);
        this.toggleShowSearchResultList = this.toggleShowSearchResultList.bind(this);
    }

    updateSearchValue(newSearchValue) {
        newSearchValue = String(newSearchValue);

        this.setState({
            userHasSearch:true,
            searchValue: newSearchValue,
            showSearchResultList:true,
        }, () => {this.getSearchResult()});
    }//Called by search bar to update value of search

    toggleShowSearchResultList() {
        this.setState({
            showSearchResultList:true,
        });
    }

    updateExtendedQuestion(id,title){
        this.setState({
            showSearchResultList:false,
            ExtendedQuestionId:id,
            ExtendedQuestionTitle:title,
        });
    }

    changeSearchResultList(value) {
        this.setState({
            showSearchResultList:value,
        });
    }//Function to be called by multiple componenent to show SearchResult List or Extended view of a single result.

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
    } //Fetch operation.

    render() {
    return (
      <div className="App">

        <SearchBar action={this.updateSearchValue}/>

        {this.state.userHasSearch?
            <Navigation Title={this.state.ExtendedQuestionTitle}
                showSearchResultList={this.state.showSearchResultList}
                ToggleExtendedView={this.toggleShowSearchResultList}
                searchValue ={this.state.searchValue}/>
            :<Dashboard/>}

        {this.state.userHasSearch?
            <Results
            searchResult={this.state.searchResult}
            showSearchResultList={this.state.showSearchResultList}
            changeSearchResultList={this.state.changeSearchResultList}
            updateExtendedQuestion={this.updateExtendedQuestion}
            ExtendedQuestionId={this.state.ExtendedQuestionId}

             />:''}

      </div>
    );
  }
}

class Dashboard extends Component{
    render(){
        return(
            <div className='Dashboard'>
            
                    <img className="dashboard" src={Intro}></img>

            </div>
        )
    }
}

    export default App;

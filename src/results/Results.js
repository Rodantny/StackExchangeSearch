import {Component} from "react";
import React from "react";
import Navigation from "../navigation/Navigation";
import ResultList from "./ResultList";
import ResultExtended from './ResultExtended'
import './Results.css'

class Results extends Component{
    constructor() {
        super();
        this.SendValuetoExtendedView = this.SendValuetoExtendedView.bind(this);

    }

    SendValuetoExtendedView = (e) => {
        this.props.updateExtendedQuestion(e.target.id, e.target.title);
    };

    render(){
        return(
            <div className='resultscon'>
                {/*Ternary below will display full list of all search results(true)
                    or extended information on one individual result(false)*/}
                {this.props.showSearchResultList?
                    <ResultList searchResult={this.props.searchResult}
                                SendValuetoExtendedView={this.SendValuetoExtendedView}/>:
                    <ResultExtended QuestionId={this.props.ExtendedQuestionId}/>
                }

            </div>
        )
    }

}



export default Results;
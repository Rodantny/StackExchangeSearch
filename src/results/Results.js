import {Component} from "react";
import React from "react";
import Navigation from "../navigation/Navigation";
import ResultList from "./ResultList";
import ResultExtended from './ResultExtended'
import './Results.css'

class Results extends Component{
    constructor() {
        super();
        this.state = {
            ExtendedViewOn: false,
            ExtendedId:'',
            ExtendedQuestionId: 0,
        };
        this.ToggleExtendedView = this.ToggleExtendedView.bind(this);
        this.SendValuetoExtendedView = this.SendValuetoExtendedView.bind(this);

    }

    SendValuetoExtendedView = (e) => {
        this.setState({
            ExtendedViewOn: true,
            ExtendedQuestionId:e.target.id,
            ExtendedQuestionTitle:e.target.title,
        });
    };

    ToggleExtendedView(x) {
        this.setState({
            ExtendedViewOn: x
        });
    }

    render(){
        return(
            <div>
                <Navigation CurrentPage={this.state.ExtendedQuestionTitle}
                            ExtendedViewOn={this.state.ExtendedViewOn}
                            ToggleExtendedView={this.ToggleExtendedView}/>

                {/*Ternary below will display full list of all search result(False)
                    or extended information on one individual result(True)*/}
                {this.state.ExtendedViewOn?
                    <ResultExtended QuestionId={this.state.ExtendedQuestionId}/>:
                    <ResultList searchResult={this.props.searchResult} SendValuetoExtendedView={this.SendValuetoExtendedView}/>}

            </div>
        )
    }

}

export default Results;
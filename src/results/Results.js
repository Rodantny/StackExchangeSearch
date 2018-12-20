import {Component} from "react";
import React from "react";
import ResultsExtended from './ResultsExtended'

class Results extends Component{
    constructor() {
        super();
        this.state = {
            ExtendedView: false,
            ExtendedId:'',
            searchResult: 1,
            ExtendedQuestionId: 0,
        };

    }

    handleClick = (e) => {
        console.log(e.target.id);
        this.setState({
            ExtendedView: true,
            ExtendedQuestionId:e.target.id
        });
    };

    render(){


        return(
            <div className="row">

                {this.state.ExtendedView? <ResultsExtended QuestionId={this.state.ExtendedQuestionId}/>: ''}

                {this.props.searchResult.map((data,key) => (
                    <div className="card col-sm-12 mb-3">
                        <div className="card">

                            <div className="card-body">
                                <span className='title'>Q: <a href="#" id={data.question_id} onClick={(e) => this.handleClick(e)}>{data.title}</a> </span><br></br>
                                <span className='info'> <i className="fas fa-star"></i> {data.score} <i className="far fa-eye"></i> {data.view_count} <i className="fas fa-comment"></i> {data.answer_count}</span>

                                <span className='date'>Asked on  <FormatDate timestamp={data.creation_date}/>  </span>
                                <br></br>
                                <div className="tagsContainer">
                                    {data.tags.map((data,key) => (
                                        <span className="badge tags" key={key}> {data} </span>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>


                ))}
            </div>
        )
    }

}

/*This component format and converts Timestamps dates to MM/DD/YYYY */
class FormatDate extends Component {
    render() {
        let timestamp = this.props.timestamp;
        let NewDateObject = new Date(timestamp*1000);
        let FullDate = (NewDateObject.getMonth() + 1) + '/' + NewDateObject.getDate() + '/' + NewDateObject.getFullYear();
        return (
            <a>{FullDate}</a>
        )

    }

}

export default Results;
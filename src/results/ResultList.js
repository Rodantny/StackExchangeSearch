import {Component} from "react";
import React from "react";
import FormatDate from './FormatDate.js'

class ResultList extends Component {
    render() {
        return (
            <div className="container results">
                {this.props.searchResult.map((data,key) => (
                    <div className="card col-sm-12 mb-3" key={key}>


                        <div className="card-body addb">
                            <span className='title'>Q: <span id={data.question_id} title={data.title} onClick={(e) => this.props.SendValuetoExtendedView(e)}>{data.title}</span> </span><br></br>

                            <div className="tagsContainer">
                                {data.tags.map((data,key) => (
                                    <span className="badge tags" key={key}> {data} </span>
                                ))}
                            </div>

                            <span className='info' >
                                    <span className='InfoValue'><i className="fas fa-star"></i>{data.score}</span>
                                    <span className='InfoValue'><i className="fas fa-eye"></i>{data.view_count}</span>
                                    <span className='InfoValue'><i className="fas fa-comment"></i>{data.answer_count}</span>
                                </span>

                            <span className='date'>Asked on <FormatDate timestamp={data.creation_date}/> by <b>{data.owner.display_name}</b></span>
                            <br></br>

                        </div>


                    </div>


                ))}
            </div>
        )

    }

}

export default ResultList;
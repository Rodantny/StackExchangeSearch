import {Component} from "react";
import React from "react";
import './ResultsExtended.css';
import FormatDate from "./FormatDate";

class ResultExtended extends Component{
    constructor(){
        super();
        this.state ={
            SelectedQuestion:[],
            AnswersforSelectedQuestion:[],
            QuestionId: '',
            nextQuestionId:''
        };

    }


    componentDidUpdate(prevProps, prevState) {
        if(prevProps.QuestionId!==this.props.QuestionId){
            this.setState({
                QuestionId: this.props.QuestionId,
            }, this.getSelectedQuestion())
        }
    }

    componentDidMount(){
        this.setState({
            QuestionId: this.props.QuestionId,
        }, this.getSelectedQuestion())

    }

    getSelectedQuestion(){
        let url = 'https://api.stackexchange.com/2.2/questions/' + this.props.QuestionId +'?order=desc&sort=activity&site=stackoverflow&filter=!-*jbN-o8P3E5&key=EWJxZhShOdpF)HQkbg*PeA((';

        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        SelectedQuestion: result.items
                    },this.getAnswersforSelectedQuestions());
                }
            );
    }

    getAnswersforSelectedQuestions(){
        let url = 'https://api.stackexchange.com/2.2/questions/' + this.props.QuestionId +'/answers?order=desc&sort=votes&site=stackoverflow&filter=!bKBaj8rulQ3_R1&key=EWJxZhShOdpF)HQkbg*PeA((';

        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        AnswersforSelectedQuestion: result.items
                    },console.log(result.items));
                },
                (error) => {
                    console.log('Error at fetch')
                }
            );
    }

    render(){

        return(
            <div className='container'>

                {this.state.SelectedQuestion.map((question, key) => (
                    <div key={key}>
                      <span className='ExtTitle'><b>{question.title}</b></span><br></br>

                        <div className='row'>
                            <div className='Extinfo col-sm-6' >
                                <span className='InfoValue'><i className="fas fa-star"></i>Score: {question.score}</span>
                                <span className='InfoValue'><i className="fas fa-eye"></i>Views: {question.view_count}</span>
                                <span className='InfoValue'><i className="fas fa-comment"></i>Answers: {question.answer_count}</span>
                            </div>


                        </div>
                        <br></br>
                        <div dangerouslySetInnerHTML={{__html: question.body}}></div>

                        {question.tags.map((data,key) => (
                            <span className="badge tags" key={key}> {data} </span>
                        ))}
                        <div className='ExtendedDate'>
                            <span>Asked on <FormatDate timestamp={question.creation_date}/> by <b>{question.owner.display_name}</b></span>
                        </div>

                        {question.answer_count > 0? <Answers answers={this.state.AnswersforSelectedQuestion} answer_count={question.answer_count}/> : <span className='AnswerNum'> No Answer Submitted...<br></br></span>}


                    </div>
                ))}

            </div>
        )
    }

}

class Answers extends Component{
    render(){
        return(
            <div>
                {/* Line below makes answer plural when necessary */}
                <span className='AnswerNum'>{this.props.answer_count} {this.props.answer_count > 1? 'Answers' : 'Answer'} </span>
                <br></br>
                {this.props.answers.map((answer,key) => (
                    <div  className="card col-sm-12 mb-3"  key={key}>
                        <div className='row AnswerInfo'>

                            <div className='col-sm-6'>
                                <span className='InfoValue'><i className="fas fa-star"></i>Score: {answer.score}</span>
                            </div>

                            <div className='text-right col-sm-6 accepted'>
                                {answer.is_accepted? <span><i className="fas fa-check"></i> Accepted</span>: ''}
                            </div>

                        </div>

                        <div dangerouslySetInnerHTML={{__html: answer.body}}></div>

                        <div className='ExtendedDate'>
                            <span>Answered on <FormatDate timestamp={answer.creation_date}/> by <b>{answer.owner.display_name}</b></span>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}


export default ResultExtended
import {Component} from "react";
import React from "react";
import './ResultsExtended.css';
import FormatDate from "./FormatDate";

class ResultExtended extends Component{
    constructor(){
        super();
        this.state ={
            QuestionItem:[],
            QuestionId: '',
            nextQuestionId:''
        };

    }


    componentDidUpdate(prevProps, prevState) {
        console.log('ComponentDidUpdate Called');
        console.log(prevProps);
        console.log(prevState);

        if(prevProps.QuestionId!==this.props.QuestionId){
            console.log('True in componentDidUpdate');
            let test = this.props.QuestionId;
            this.setState({
                QuestionId: test,
            }, this.updateQuestionItem())
        }
    }

    componentDidMount(){
        let test = this.props.QuestionId;
        this.setState({
            QuestionId: test,
        }, this.updateQuestionItem())

    }

    updateQuestionItem(){
        let url = 'https://api.stackexchange.com/2.2/questions/' + this.props.QuestionId +'?order=desc&sort=activity&site=stackoverflow&filter=!b1MMEUblCwYno1&key=EWJxZhShOdpF)HQkbg*PeA(('

        fetch(url, {
            method: 'GET'
        })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result.items)
                    this.setState({
                        QuestionItem: result.items
                    });
                },
                (error) => {
                    console.log('Error at fetch')
                }
            );
    }

    render(){

        return(
            <div className='container'>
                {this.state.QuestionItem.map((question,key) => (
                    <div key={key}>
                        <span className='ExtTitle'><b>{question.title}</b></span><br></br>

                        <div className='row'>
                            <div className='Extinfo col-sm-6' >
                                        <span className='InfoValue'><i className="fas fa-star"></i>Score: {question.score}</span>
                                        <span className='InfoValue'><i className="fas fa-eye"></i>Views: {question.view_count}</span>
                                        <span className='InfoValue'><i className="fas fa-comment"></i>Answers: {question.answer_count}</span>
                            </div>

                            <div className='ExtDate col-sm-6 text-right'>
                                <span >Asked on <FormatDate timestamp={question.creation_date}/>  by <b>{question.owner.display_name}</b></span><br></br>
                        </div>

                        </div>
                        <br></br>
                        <div dangerouslySetInnerHTML={{__html: question.body}}></div>

                        {question.tags.map((data,key) => (
                            <span className="badge tags" key={key}> {data} </span>
                        ))}
                        <br></br> <br></br>
                        <span className='AnswerNum'> {question.answer_count} {question.answer_count > 1? 'Answers' : 'Answer'} </span><hr></hr>

                        {question.answers.map((answer,key) => (
                            <div key={key}>
                                <p><div dangerouslySetInnerHTML={{__html: answer.body}}></div>}</p>
                            </div>
                        ))}


                    </div>
                ))}

            </div>
        )
    }

}

export default ResultExtended
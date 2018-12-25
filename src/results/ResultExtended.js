import {Component} from "react";
import React from "react";
import './ResultsExtended.css';

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
                {this.state.QuestionItem.map((data,key) => (
                    <div>
                        <span className='ExtTitle'><b>{data.title}</b></span><br></br>
                        <span className='ExtDate'>Asked on March 7th 1994 by <b>{data.owner.display_name}</b></span><br></br>

                        <div>
                            {data.tags.map((data,key) => (
                                <span className="badge tags" key={key}> {data} </span>
                            ))}
                        </div>

                        <div dangerouslySetInnerHTML={{__html: data.body}}></div>
                        <h1>{data.answer_count} Answer</h1>
                        <hr/>

                        {data.answers.map((answer,key) => (
                            <div>
                                <p key={key}><div dangerouslySetInnerHTML={{__html: answer.body}}></div>}</p>
                                <hr/>
                                <hr/>
                            </div>
                        ))}


                    </div>
                ))}

            </div>
        )
    }

}

export default ResultExtended
import {Component} from "react";
import React from "react";

class SearchBar extends Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        if(this.state.value!==''){ // Only submit is form is not empty.
            this.props.action(this.state.value);//Sends Search value to parent component.
        }
        event.preventDefault(); //Cancelled original submit action.
    }

    render(){
        return(
            <div className='search'>
                <br></br>
            <div className="container ">

                <div className="row ">

                    <div className="col-12 ">
                        <div className='logoContainer'>
                            <img className='logo' alt='Stack Exchange Search' src='https://www.stackoverflowbusiness.com/hubfs/logo-so-white.png'></img>
                        </div>
                        <form className="card search_bar" onSubmit={this.handleSubmit}>

                            <div className="card-body row no-gutters" >



                                <div className="col">
                                    <input className="form-control form-control-lg form-control-borderless" type="search"
                                           placeholder="Search "  value={this.state.value} onChange={this.handleChange} ></input>
                                </div>

                                <div className="col-auto">
                                    <button className="btn btn-lg btn-primary" type="submit">Search</button>

                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
                <br></br>
            </div>
        );
    }

}

export default SearchBar;
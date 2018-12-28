import {Component} from "react";
import React from "react";
import './SearchBar.css';
import Logo from './logo.png';

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
                <div className="container ">

                    <div className="row ">
                            <div className='col-lg-4'>
                                <img className='logo' alt='Stack Exchange Search' src={Logo}></img>
                            </div>
                            <div className='col-lg-8'>
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
            </div>
        );
    }

}

export default SearchBar;
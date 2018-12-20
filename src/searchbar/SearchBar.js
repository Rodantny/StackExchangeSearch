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
        this.props.action(this.state.value);//Sends Search value to parent component.
        event.preventDefault();
    }

    render(){
        return(
            <div className='search'>
                <br></br>
            <div className="container ">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8">
                        <form className="card card-sm " onSubmit={this.handleSubmit}>
                            <div className="card-body row no-gutters align-items-center">

                                <div className="col">
                                    <input className="form-control form-control-lg form-control-borderless" type="search"
                                           placeholder="Search topics or keywords"  value={this.state.value} onChange={this.handleChange} ></input>
                                </div>

                                <div className="col-auto">
                                    <button className="btn btn-lg btn-light" type="submit">Search</button>

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
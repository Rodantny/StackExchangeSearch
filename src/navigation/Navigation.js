import {Component} from "react";
import React from "react";
import './Navigation.css';
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.handleNaviClick= this.handleNaviClick.bind(this);
    }


    handleNaviClick(event){
        console.log('handle click n navi');
        this.props.ToggleExtendedView(false);
        event.preventDefault();
    }

    render(){
        let arrow = <span><i className="fas fa-angle-double-right"></i></span>;
        return(
            <div className='Navigation'>
                <div className="container NavigationContainer">
                    <h1>

                        {this.props.ExtendedViewOn?   <span className="cursor" onClick={this.handleNaviClick}>Search Results </span> : <b>Search Results </b>}
                        <span>{this.props.ExtendedViewOn? arrow : ""}</span>
                        <b>{this.props.ExtendedViewOn? this.props.CurrentPage : ''}</b>
                    </h1>
                </div>
            </div>
        )
    }
}
export default Navigation;
import {Component} from "react";
import React from "react";
import './Navigation.css';
class Navigation extends Component {
    constructor(props) {
        super(props);
        this.handleNaviClick= this.handleNaviClick.bind(this);
    }

    handleNaviClick(event){
        this.props.ToggleExtendedView();
        event.preventDefault();
    }

    render(){
        let arrow = <span><i className="fas fa-angle-double-right"></i></span>;
        return(
            <div className='Navigation'>
                <div className="container NavigationContainer">
                    <h1>
                        {this.props.showSearchResultList? <b>Search results for <i>{this.props.searchValue}</i></b> : <span className="cursor" onClick={this.handleNaviClick}>Search results for <i>{this.props.searchValue} </i></span>}
                        <span>{this.props.showSearchResultList? "" : arrow}</span>
                        <b>{this.props.showSearchResultList? "" : this.props.Title}</b>
                    </h1>
                </div>
            </div>
        )
    }
}
export default Navigation;
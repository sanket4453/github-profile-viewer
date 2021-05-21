import React, { Component } from 'react'

export class Search extends Component {

    onSubmit(e){
        e.preventDefault()
        let username = this.refs.username.value.trim();
        if(!username){
            alert("Please Enter a valid Username");
            return;
        }
        this.props.onFormSubmit(username);
        this.refs.username.value="";

    }

    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit.bind(this)}>
                    <h3>Search GitHub Users</h3>
                    <input type="text" ref="username" className="flow-control"/>
                </form>
            </div>
        )
    }
}

export default Search

import React from 'react'
import propTypes from 'prop-types'
import Profile from './github/Profile'
import Search from './github/Search'
import axios from 'axios'


class App extends React.Component{

    constructor(props){
        super(props);
        this.state ={
            username: "sanket4453",
            userData:[],
            userRepos:[],
            perpage:5
        }
    }
    //Get user Data from githb

    getUserData(){
        
        axios.get(`https://api.github.com/users/${this.state.username}?client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}`)
          .then(res => {
        
        this.setState({ userData:res.data });
        console.log(res.data);
      })
    }

    //Get user repos from git hub
    //'https://api.github.com/users/'+this.state.username+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created'
    getUserRepos(){
        axios.get(`https://api.github.com/users/${this.state.username}/repos?per_page${this.state.perPage}&client_id=${this.props.clientId}&client_secret=${this.props.clientSecret}&sort=created`)
        .then(res => {
      this.setState({ userRepos:res.data });
      console.log(res.data);
    })
    }

    handleFormSubmit(username){
        this.setState({username:username}, function(){
            this.getUserData();
            this.getUserRepos();
        })
    }
    
    componentDidMount(){
        this.getUserData();
        this.getUserRepos();
    }

    render(){
        return(
            <div>
                <Search onFormSubmit ={this.handleFormSubmit.bind(this)}/>
                <Profile {...this.state} />
            </div>
        )
    }

}

App.propTypes ={
    clientId: propTypes.string,
    clientSecret: propTypes.string
};


App.defaultProps ={
    clientId: "40a42e07b49b9db0947c",
    clientSecret: "914aac8814a2dec4fc7e9028501146e970c7c5c2"
};


export default App




// axios.get(`https://jsonplaceholder.typicode.com/users`)
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })


// "build": "react-scripts build"
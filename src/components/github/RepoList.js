import React from 'react';
import Repo from './Repo';

class RepoList extends React.Component{
    render(){
        return(
            <div>
                <ui className="list-group">
                    { this.props.userRepos.map(repo =>{
                         return <Repo 
                                repo={repo}
                                key={repo.id}
                                {...this.props}/>
                    })}
                </ui>
            </div>
        )
    }
}

export default RepoList
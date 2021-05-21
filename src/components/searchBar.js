import React from 'react';

class searchBar extends React.Component{

    state = {
        term:''
    }

    //to Solve this.state.term error simply override the methon in constructor or use arrow function
    // construtor(){
    //     this.onFormSubmit = this.onFormSubmit.bind(this);
    // }

    onFormSubmit = (e)=>{
        e.preventDefault()
        this.props.imageSearch(this.state.term)
        this.setState({
            term : ''
        })
    }

    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input typr="text" 
                        value={this.state.term} 
                        onChange={(e)=>{
                            this.setState({
                                term : e.target.value
                            })
                        }}/>
                    </div> 
                </form>
            </div>
        );
    };
};

export default searchBar;

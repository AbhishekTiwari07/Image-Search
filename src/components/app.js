import React from 'react';
import Axios from 'axios';
import SearchBar from './searchBar';
import ImageList from './imageList';
import './App.css';


class App extends React.Component{

    state = {
        images : []
    }

    onSearchSubmit = async (term) => {
        const res = await Axios.get('https://api.unsplash.com/search/photos',{
            params : {
                query : term
            },
            headers :{
                Authorization: 'Client-ID Qc77Z5D1HvY841o1IB21NwBHmPUwA529RDtGkAC6M6o'
            }
        })
        console.log(res.data.results)
        this.setState({
            images : res.data.results
        });

    }

    render(){
        return(
            <div className="ui container box">
                <SearchBar imageSearch={this.onSearchSubmit}/>
                Found : {this.state.images.length} images
                <ImageList images={this.state.images}/>
            </div>
        );
    }
};

export default App

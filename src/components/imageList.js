import React from 'react';
import ImageCard from './imageCard';
import './App.css';

class imageList extends React.Component{

    render(){

        const images = this.props.images.map(({desc, id, urls})=>{
            return <ImageCard key={id} description={desc} urls={urls.regular}/>
        })

        return(
            <div className="image-list">
                {images}
            </div>
        );
    };

}

export default imageList

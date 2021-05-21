import React from 'react';

class ImageCard extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            spans: 0
        }

        this.imageRef = React.createRef()
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpan)
    }

    setSpan = () => {
        const height = this.imageRef.current.clientHeight
        console.log(height)
        const spans = Math.ceil(height / 10)
        console.log(spans)
        this.setState({
            spans
        })
    }

    render() {
        return ( <
            div style = {
                {
                    gridRowEnd: `span ${this.state.spans}`
                }
            } >
            <
            img ref = {
                this.imageRef
            }
            src = {
                this.props.urls
            }
            alt = {
                this.props.description
            }
            /> <
            /div>
        );
    };
};

export default ImageCard;

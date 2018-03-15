import React from 'react';

class Box extends React.Component {
    render() {
        return(
            <div style={{backgroundColor:`${this.props.color}`}}>
                <button onClick={() => {this.props.handleClick()}}>change color</button>
            </div>
        )
    }
}

export default Box;

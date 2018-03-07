import React from 'react';

class Weater extends React.Component {
    render(){
        return(
            <div>
                <span>{this.props.gameState}</span><br/>
                <span>{this.props.currentPlayer}</span><br/>
                <span>{this.props.whiteCount}</span><br/>
                <span>{this.props.blackCount}</span><br/>
                <span>{this.props.boardRows}</span><br/>  
            </div>
        );
    }
}

export default Weater;
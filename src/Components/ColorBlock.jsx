import React from 'react';
import {Col} from 'reactstrap'

class ColorBlock extends React.Component {
    state = { 

     }
    render() { 
        return ( 
            <Col md="4" className="p-3">
                <div id={this.props.color} 
                    style={{width: "250px",
                            height:"250px",
                            borderRadius: "40px",
                            backgroundColor: this.props.color}}
                    onClick={this.props.quessingColors}>
                </div>
            </Col>
         );
    }
}
 
export default ColorBlock;
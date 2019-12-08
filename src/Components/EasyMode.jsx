import React from 'react';
import { DotLoader } from 'react-spinners'
import {Container, Row, Button} from 'reactstrap'
import ColorBlock from "./ColorBlock"
import '../index.css'
let position = {
    position: "absolute",
    top: "35%",
    left: "35%"
}
var colors = []

class EasyMode extends React.Component {
    state = { 
        isLoading: true,
        colorsState: '',
        backgroundColor: "rgb(255,255,255)",
        colorToQuess: undefined,
        win: false
    }
    componentDidMount = () => {
        this.fullArrWithColors()
        setTimeout(() => {
            this.setState({
                isLoading:false,
                backgroundColor: "#BBC9DD",
                colorsState: colors,
                colorToQuess: Math.floor(Math.random() * Math.floor(6)),
                win: false
            })
        }, 3000)
    }
    fullArrWithColors = () => {
        for(var i = 0; i < 6; i++){
            var color = "rgb(" + Math.floor(Math.random() * Math.floor(255)) + "," + Math.floor(Math.random() * Math.floor(255)) + "," + Math.floor(Math.random() * Math.floor(255)) + ")"
            colors.push(color)
        }
    }
    resetGame = () => {
        this.setState({
            isLoading: true,
            backgroundColor: "rgb(255,255,255)",
        })
        colors = []
        this.fullArrWithColors()
        setTimeout(() => {
            this.setState({
                isLoading:false,
                backgroundColor: "#BBC9DD",
                colorsState: colors,
                colorToQuess: Math.floor(Math.random() * Math.floor(6)),
                win: false
            })
        }, 3000)
    }
    quessingColors = (e) => {
        if(e.target.id === this.state.colorsState[this.state.colorToQuess]){
            colors = []
            for(var i = 0; i < 6; i++){
                var color = this.state.colorsState[this.state.colorToQuess]
                colors.push(color)
            }
            setTimeout(() => {
                this.setState({
                    win: true,
                    colorsState: colors,
                })
            }, 200)
        } else {
            e.target.style.backgroundColor = "#181818"
        }
    }

    render() { 
        return (
            <Container fluid className="main-page-background" style={{backgroundColor: this.state.backgroundColor, textAlign:"center"}}>
                {this.state.isLoading ? <div style={position} className='sweet-loading'> 
                <h1 style={{marginLeft: "150px"}}>Ready?</h1>
                <DotLoader
                size={70}
                style={{marginLeft: "150px"}}
                color={'#FF2970'}
                />
                </div>
                : !this.state.win ?
                <>
                <h1 style={{paddingTop: "30px"}}>{this.state.colorsState[this.state.colorToQuess]}</h1>
                <div style={{marginLeft: "22%", marginTop: "30px"}}>
                <Row style={{width: "800px"}}>
                {this.state.colorsState.map((c, i) => (<ColorBlock quessingColors={this.quessingColors} key={i} color={c} />))}
                </Row>
                </div>
                </>
                :
                <>
                <h1 style={{paddingTop: "30px"}}>You win!<Button className="btn-reset" onClick={this.resetGame}>Start again</Button></h1>
                <div style={{marginLeft: "22%", marginTop: "30px"}}>
                <Row style={{width: "800px"}}>
                {this.state.colorsState.map((c, i) => (<ColorBlock quessingColors={this.quessingColors} key={i} color={c} />))}
                </Row>
                </div>
                </>
                }
            </Container>
            );
    }
}
 
export default EasyMode;
import React from 'react'
import { DotLoader } from 'react-spinners'
import {Button, Container} from 'reactstrap'
import '../index.css'
let position = {
    position: "absolute",
    top: "30%",
    left: "30%"
}

class WelcomePage extends React.Component {
    state = { 
        isLoading: true,
        backgroundColor: "#AEE8E4",
        easy: undefined
    }
    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                isLoading:false,
                backgroundColor: "#F5B2AC"
            })
        }, 3000)
    }
    setMode = (e) => {
        if(e.target.id === "easy") {
            this.props.history.push("/easyMode")
        } else {
          this.props.history.push("/hardMode")
          this.setState({
            easy: false
          })
        }
    }
    render() { 
        console.log(this.props)
        return ( 
            <Container className="main-page-background" style={{backgroundColor: this.state.backgroundColor}} fluid>
                {this.state.isLoading ? <div style={position} className='sweet-loading'> 
                                            <h1>Welcome to color Game</h1>
                                            <DotLoader
                                            size={70}
                                            style={{marginLeft: "150px"}}
                                            color={'#FF2970'}
                                            />
                                        </div> :
                                        <div style={position}>
                                        <h1>Choose mode</h1>
                                        <Button onClick={this.setMode} id="easy" className="btn-easy mr-4 mt-3">Easy</Button>
                                        <Button onClick={this.setMode} className="btn-hard mt-3">Hard</Button>
                                        </div>
                }
            </Container>
        )
    }
}
 
export default WelcomePage;
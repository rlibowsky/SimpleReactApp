import React from 'react';
import { Button, Container } from 'reactstrap';


export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            welcomeText: 'Welcome to React'
        };
        this.buttonClicked = this.buttonClicked.bind(this);
    }

    buttonClicked () {
        this.props.history.push({ 
            pathname: '/homepage', 
            sampleProps: 'Hello'
        });
    }

    render () {
        
        return(
            <Container>
                <center>
                <h1> {this.state.welcomeText} </h1>
                <Button onClick={this.buttonClicked}> Click Me! </Button>
                </center>
            </Container>
        );
    }
}
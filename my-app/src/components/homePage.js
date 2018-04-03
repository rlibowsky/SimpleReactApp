import React from 'react';
import { Container } from 'reactstrap';


export default class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state =  {
            homePageText: this.props.location.sampleProps
        };
    }

    render () {
        
        return(
            <Container>
                <center>
                <h1> {this.state.homePageText} </h1>
                </center>
            </Container>
        );
    }
}
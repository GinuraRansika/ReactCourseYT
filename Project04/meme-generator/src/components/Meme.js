import React from "react";
import {Container, Row, Col} from "reactstrap"

export default function Meme(){
    return(
        <Container className="meme-container">
            <Row xs='1' className="border">
                <form action="">
                    <Row sm='2' xs="1"  className="input-group">
                        <Col className="column">
                            <input type='text' placeholder="First Part" className="input"></input>
                        </Col>
                        <Col className="column">
                            <input type='text' placeholder="Second Part" className="input"></input>
                        </Col>
                    </Row>
                    <Row xs='1'>
                        <Col className="button-group">
                            <input type={'button'} value="Get a New Meme Image" className="button"></input>
                        </Col>
                    </Row>
                </form>
            </Row>

            <Row xs='1'>
                <Col></Col>
            </Row>
        </Container>

    )
}

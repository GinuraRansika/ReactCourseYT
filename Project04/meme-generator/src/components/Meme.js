import React from "react";
import {Container, Row, Col} from "reactstrap"
import memesData from "../memesData.js"

function randomMemeData(){
    const memesDataArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesDataArray.length);
    const url = memesDataArray[randomNumber].url;
    console.log(randomNumber)
    console.log(url)
}

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
                            <input type={'button'} value="Get a New Meme Image" className="button" onClick={randomMemeData}></input>
                        </Col>
                    </Row>
                </form>
            </Row>

            <Row xs='1'>
                <Col>
                </Col>
            </Row>
        </Container>

    )
}

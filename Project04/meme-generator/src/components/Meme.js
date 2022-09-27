import React from "react";
import {Container, Row, Col} from "reactstrap"
import memesData from "../memesData.js"

export default function Meme() {
    const [meme,setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : ""
    })

    const [allMemeImages] = React.useState(memesData)

    function randomMemeData(){ 
        const randomNumber = Math.floor(Math.random() * allMemeImages.data.memes.length);
        const url = allMemeImages.data.memes[randomNumber].url;
        setMeme(prevMeme => {
            return{
                ...prevMeme,
                randomImage: url
            }
        })
    }

    return(
        <Container className="meme-container">
            <Row xs='1' className="border">
                <form action="">
                    <Row sm='2' xs="1"  className="input-group">
                        <Col className="column">
                            <input type='text' placeholder="Top Text" className="input"></input>
                        </Col>
                        <Col className="column">
                            <input type='text' placeholder="Bottom Text" className="input"></input>
                        </Col>
                    </Row>
                    <Row xs='1'>
                        <Col className="button-group">
                            <input type={'button'} value="Get a New Meme Image" className="button" onClick={randomMemeData}></input>
                        </Col>
                    </Row>
                    <Row>
                  
                    </Row>
                </form>
            </Row>

            <Row xs='1' className="image-row">
                <Col className="image-container">
                    <img src={meme.randomImage} alt=""/>
                </Col>
            </Row>
        </Container>
    )
}

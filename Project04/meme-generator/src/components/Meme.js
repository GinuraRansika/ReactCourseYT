import React from "react";
import {Container, Row, Col} from "reactstrap"
import memesData from "../memesData.js"

export default function Meme() {
    const [meme,setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg",
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

    function printMemeOnImage(event){
        const {name, value} = event.target;
        setMeme(prevState => {
            return({
                ...prevState,
                [name]:value,
            })
        })

    }

    return(
        <Container className="meme-container">
            <Row xs='1' className="border">
                <form action="">
                    <Row sm='2' xs="1"  className="input-group">
                        <Col className="column">
                            <input 
                                type='text' 
                                placeholder="Top Text" 
                                className="input"
                                name="topText"
                                value={meme.topText}
                                onChange={printMemeOnImage}
                            />
                        </Col>
                        <Col className="column">
                            <input 
                                type='text' 
                                placeholder="Bottom Text" 
                                className="input"
                                name="bottomText"
                                value={meme.bottomText}
                                onChange={printMemeOnImage}
                            />
                        </Col>
                    </Row>
                    <Row xs='1'>
                        <Col className="button-group">
                            <input type={'button'} value="Get a New Meme Image" className="button" onClick={randomMemeData}></input>
                        </Col>
                    </Row>
                </form>
            </Row>

            <Row xs='1' className="image-row">
                <Col className="image-container">
                    <img src={meme.randomImage} alt=""/>
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </Col>
            </Row>
        </Container>
    )
}

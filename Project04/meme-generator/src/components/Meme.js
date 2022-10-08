import React from "react";
import {Container, Row, Col} from "reactstrap"

//! updated this to work with a API call instead of saved memes in the memesData.js file
// import memesData from "../memesData.js"  

export default function Meme() {

    const [meme,setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg",
    })

    //* empty array to be filled with our memes as soon as the our component loads the first time
    const [allMemes, setAllMemes] = React.useState([]) 

    //* res => res.json() means is we take the response and parse the json into javascript
    React.useEffect(function() {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(fetchedData => {
                setAllMemes(fetchedData.data.memes)
            })
    }, [])
    console.log(allMemes)
 
    function randomMemeData(){ 
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
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

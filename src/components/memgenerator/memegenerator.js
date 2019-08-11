import React, { Component }from "react";


class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            console.log(memes[0])
            this.setState({allMemeImgs: memes})
        });
    }

    handleOnChange(event){
        console.log("fire");
        const {name, value} = event.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        console.log(this.state.allMemeImgs)
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url;
        this.setState({randomImg: randMemeImg});
    }

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text" 
                        placeholder="top text" 
                        name="topText"
                        id="topText"
                        value={this.state.topText}
                        onChange={this.handleOnChange}
                        />
                    
                    <input 
                        type="text" 
                        placeholder="bottom text" 
                        name="bottomText"
                        id="bottomText"
                        value={this.state.bottomText}
                        onChange={this.handleOnChange}
                        />
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImg} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator;
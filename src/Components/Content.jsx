import React, { Component } from "react";
import "react-simple-keyboard/build/css/index.css";
import ArabicKeyboar from "../Keyboard/ArabicKeyboar";





class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            width: 0,
            height: 0
        }

    }


  
    render() {
        return (
            <div>
                <ArabicKeyboar />
            </div>
        );
    }
}

export default Content;

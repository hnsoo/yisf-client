import React from 'react';
import ReactDOM from 'react-dom';
import Draggable from "react-draggable";
import {Resizable} from 'react-resizable';
import './vim.jsx';
import styled from 'styled-components';


export default function Vim(){
    const [isOpen, setIsOpen] = useSate(false);
    const [width, setWidth] = useState(1000)
    const [height, setHeight] = useState(500)

    const handleModal = () => {
        setIsOpen(!isOpen)
    };

    const onFirstBoxResize = (e, {element, size, handle}) => {
        seWidth(size.width)
        setHeight(size.height)
    }


    const Title = < h3 id = "title"
                       onMouseEnter = {
                           () => console.log("mouse enter")
                       } > Hello I 'm a title</h3>
    const Button = < button style = {
        {
            backgroundColor: "tomato",
        }
    }
                            onClick = {
                                () => console.log("im clicked")
                            } > Click me </button>
    const Container = < div > Title Button </div>
    ReactDOM.render(Container, root);
}
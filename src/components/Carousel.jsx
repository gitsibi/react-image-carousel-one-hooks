import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    const [index,setIndex]=useState(0);
    const handlebackarrow=()=>{
        if(index==0)
        {
            setIndex(images.length-1)
        }
        else
        {
            setIndex((prev)=>prev-1)
        }
    }
    const handleforwardarrow=()=>{
        index==images.length-1?setIndex(0):setIndex((prev)=>prev+1);        
    }
    console.log(images)
    return(
        <>
            <img className="carousel-img" src={images[index].img} alt="" />
            <ArrowBackIosIcon className="box Back-arr" onClick={handlebackarrow}/>
            <ArrowForwardIosIcon className="box Front-arr" onClick={handleforwardarrow}/>
            <h1 className="carousel-title">{images[index].title}</h1>
            <p className="carousel-sub-title">{images[index].subtitle}</p>
        </>
    )
}

export default Carousel;

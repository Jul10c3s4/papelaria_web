import React, { useEffect, useState } from "react";
import borbo from '../../assets/images/borbo.jpeg';
import emogi from '../../assets/images/emogis.jpeg'
import flor from '../../assets/images/flor.jpeg'
import minie from '../../assets/images/minie.jpeg'
import rosa from '../../assets/images/rosa.jpeg'
import star from '../../assets/images/star.jpeg'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./carousel.module.scss"
import { Button } from "@mui/material";
export const Carousel = ()=>{
    const images = [borbo, emogi, flor, minie, rosa, star]
    const [index, setIndex] = useState(0);
    const [image, setImage] = useState(images[index]);
    let className = ''
    function nextImage(){
        setIndex(index+1)
        console.log(index);
    }
    useEffect(() => {
        if(index == images.length){
            setIndex(0)
        }
        else if(index < 0){
            setIndex(images.length - 1);
        }
        setImage(images[index]);
        
    }, [index])

    function previousImage(){
        setIndex(index-1)
        console.log(index);
    }
    return(
        <div className="carouselContainer">
            <div className="carousel">
                <Button onClick={previousImage}><KeyboardArrowLeftIcon/></Button>
                <div className="images"> <h1>Destaques</h1>{<img src={image}/>}<div className="spans">{images.map((img)=> <span {...img == images[index] ? className='selected': className='' } className={className}></span>)}</div></div>
                <Button onClick={nextImage}><KeyboardArrowRightIcon/></Button>
            </div>
        </div>
    )
}
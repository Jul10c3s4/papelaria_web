import React from "react"
import { Header } from "../../components/header"
import logo from "../../assets/images/logo.png"
import { Carousel } from "../../components/carousel"
export const Home = () =>{
    const links = [
        {
        title: "produtos", 
        hrefLinks: '#produtos'
        },
        {
        title: "sobre a loja", 
        hrefLinks: '#sobrealoja'
        },
        {
        title: "contato", 
        hrefLinks: '#contato'
        },
    ]
    return(
        <div>
            <Header links={links} title="MdPapelaria" srcImg={logo} />
            <Carousel/>
        </div>
    )
}
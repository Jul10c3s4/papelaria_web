import React from "react";
import './header.module.scss'
interface headerProps{
    title: string,
    srcImg?: string,
    links: {
        title: string,
        hrefLinks: string,
    }[],
    
}

export const Header = ({title, srcImg, links}: headerProps) =>{
    return(
        <div className="HeaderContainer">
            <div className="header">
            <div className="logo">
            {srcImg? <img src={srcImg} alt="title"/>:<h1>{title}</h1>}
            </div>
            <ul>
                {links.map((link) => <li><a href={link.hrefLinks}>{link.title}</a></li>)}
            </ul>      
        </div>
        </div>
    )
}
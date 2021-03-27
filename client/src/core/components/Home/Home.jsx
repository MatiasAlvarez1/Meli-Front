import React from "react";
import "./Home.scss";
import logoImage from "../../../assets/logo.png"

function Home() {
    
    return(
        <div className="home__container">
            <div className="home__container__image">
                <img src={logoImage} alt="" />
            </div>
            <div className="home__container__message">
                <label className="home__message">¡Realizá una busqueda y empezá a comprar todo lo que quieras!</label>
            </div>
        </div>
    )
}

export default Home;
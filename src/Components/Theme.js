import React from "react";
import { useNavigate } from "react-router-dom"
import previewtheme1 from "../img/Theme1.PNG"
import previewtheme2 from "../img/Theme2.png"

function Themes() {

    const navigate = useNavigate();

    return (
        <div>
            <div className="themes">
                <button className="theme" onClick={() => navigate("/theme-1")}>
                    <img src={previewtheme1} className="btnTheme1" /></button>
                
                 <button className="theme" onClick={() => navigate("/theme-2")}>
                    <img src={previewtheme2} className="btnTheme1"/></button>
            </div>  
        </div>
    )
}

export default Themes
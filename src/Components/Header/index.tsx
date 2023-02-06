import "./style.css"
import { HiBars3 } from "react-icons/hi2"
import { useState } from "react"
import DropDownMenu from "../DropDownMenu";

export function Header(){
    const [dropShow, setDropShow] = useState(true);

    return (
        <header className="Header" >
            <img className="logo" src="../public/logoZeroVinte.jpg"></img>
            <h1>Zero Vinte</h1>
            <button className="dropDownBtn" onClick={() => setDropShow(!dropShow)}>
                <HiBars3 id="menuIcon"/>
            </button>
            { dropShow ? 
            <div className="dropDownMenu">
                <h1>Vídeos</h1>
                <h1>Contatos</h1>
                <h1>Sobre</h1> 
            </div>
                : <></>
            }
        </header>
    )
}
import "./style.css"
import { HiBars3 } from "react-icons/hi2"

export function Header(){
    return (
        <header className="Header" >
            <img className="logo" src="../public/logoZeroVinte.jpg"></img>
            <h1>Zero Vinte</h1>
            <button className="dropdownMenu" onClick={() => console.log("A")}>
                <HiBars3 id="menuIcon"/>
            </button>
        </header>
    )
}
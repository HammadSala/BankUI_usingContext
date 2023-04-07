import ThemeContext from "../context/ThemeContext";
import Debit from "./Debit";
import React, { useCallback, useState } from "react";
import '../styles/Menu.css'

function Menu() {
    const [ option, setOption ] = useState(0);
    const [ theme, setTheme ] = useState("light");

    const toggleTheme = useCallback(() => {
        setTheme( (theme) => theme === "light" ? "dark" : "light");
    }
    ,[theme])

    function onClick ( value : number)  {
        setOption(value);
        
    }

    return (
        <>
        <ThemeContext.Provider value ={ {theme , toggleTheme} }>
            <div>
                <div className="options">
                    <button className={ (option === 1) ? "red" : "none" } onClick={ () =>onClick(1)}>Credit/Debit Card</button>
                    <button className={ (option === 2) ? "red" : "none"} onClick={ () =>onClick(2)}>NetBanking</button>
                    <button className={ (option === 3) ? "red" : "none"} onClick={ () =>onClick(3)}>UPI</button>

                </div>

                {
                    (() => {
                        switch(option) {
                            case 1 : 
                                return  <div>Credit/Debit Card <Debit status={1 === option}/></div>
                            case 2 :
                                return <div>NetBanking</div>
                            case 3 : 
                                return <div>UPI</div>
                            default :
                                return <div></div>
                            
                        }
                    })()
                }
            </div>
        </ThemeContext.Provider>
        </>
    )

}

export default Menu;
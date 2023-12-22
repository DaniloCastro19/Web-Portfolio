import "./Section.css"
import { useState } from "react"
export function Section(){
    const [firstHovered, setFirstHovered] = useState(false)
    const [secondHovered, setSecondHovered] = useState(false)
    const [thirdHovered, setThridHovered] = useState(false)
    
    const handleMouseEnter = (elementNumber) => {
        switch(elementNumber){
            case 1: 
                setFirstHovered(true)
                break
            case 2: 
                setSecondHovered(true)
                break
            case 3: 
                setThridHovered(true)
                break
            default:
                break
            }
    }
    const handleMouseLeave = (elementNumber) =>{
        switch(elementNumber){
            case 1: 
                setFirstHovered(false)
                break
            case 2: 
                setSecondHovered(false)
                break
            case 3: 
                setThridHovered(false)
                break
            default:
                break
            }
    }
    
    
    return(
        <>
            <h1 className="pf-section-label" onMouseEnter={() => handleMouseEnter(1)}
            onMouseLeave={() => handleMouseLeave(1)}>{firstHovered ? "About":"Hello" }</h1>
            <h1 className="pf-section-label" onMouseEnter={() => handleMouseEnter(2)}
            onMouseLeave={() => handleMouseLeave(2)}>{secondHovered ? "Work":"I am" }</h1>
            <h1 className="pf-section-label" onMouseEnter={() => handleMouseEnter(3)}
            onMouseLeave={() => handleMouseLeave(3)}>{thirdHovered ? "Contact":"Danilo"}</h1>
        </>
    )
}
   

import {Section} from "./components/Section"
import {Image} from "./components/Image"
import "../../styles/Reset.css"
import "../../styles/Colors.css"
import "./homePage.css" 
export function HomePage (){
    return(
        <div className="pf-container">
            <div className="img-container">
                <Image></Image>
            </div>
            <Section></Section>
        </div>
    )
}
import React from "react"
import icon from "../res/webproj_icon.png"
import Skillbar from "./Skillbar";

class Item extends React.Component{
    constructor(){
        super()
    }

    render(){
        let special = <div></div>
        if(this.props.item.type === "skills"){
            special = this.props.item.skills.map(skill=><Skillbar name={skill.name} level={skill.level}/>)
        }
        return(
            <div className={"item-box"}>
                <div className={"horizontal-container"}>
                    <div className={"image-container"}>
                        <img className={"item-icon"} src={icon}/>
                    </div>
                    <label>{this.props.item.name}</label>
                </div>
                <div className={"special-container"}>
                    {special}
                </div>

            </div>
        )
    }

}

export default Item
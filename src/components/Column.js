import React from "react"
import Item from "./Item";

class Column extends React.Component{
    constructor(){
        super()
    }

    render(){

        let items = this.props.items.map(item =><Item item={item}/>)

        return(
            <div className={"column"}>
                <div>{this.props.name}</div>
                {items}
                <div className={"temporary-box"}></div>
                <div className={"temporary-box"}></div>
            </div>

        )
    }
}

export default Column
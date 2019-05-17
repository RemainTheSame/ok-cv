import React from "react"
import Column from "./Column";
import itemsAPI from "../itemsAPI"

class Main extends React.Component{
    constructor(){
        super()
        this.state={
            items: itemsAPI
        }
    }

    render(){

        let items1 = this.state.items.slice(0,this.state.items.length/2)
        let items2 = this.state.items.slice(this.state.items.length/2,this.state.items.length)

        return(
            <main className={"columns-wrap"}>
                <Column name={"Column 1"} items={items1}/>
                <Column name={"Column 2"} items={items2}/>
            </main>
        )
    }
}

export default Main
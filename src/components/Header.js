import React from "react"

class Header extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <header className={"large-header"}>
                <img className={"image-profile"} src={"http://www.personalbrandingblog.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640-300x300.png"}/>
                <div className={"name-box"}>
                    <h1 className={"name-label"}>Oscar Orava Kilberg</h1>
                </div>
            </header>

        )
    }
}

export default Header
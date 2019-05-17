import React from "react"

class Skillbar extends React.Component{

    render(){


        let css;

        switch (this.props.level) {
            case 1:
                css = "skillbar-1"
                break;
            case 2:
                css = "skillbar-2"
                break;
            case 3:
                css = "skillbar-3"
                break;
            case 4:
                css = "skillbar-4"
                break;
            case 5:
                css = "skillbar-5"
                break;

        }

        return(
            <div>
                <label className={"horizontal-container"}>
                    {this.props.name}:
                    <div className={"skillbar-background"}>
                        <div className={css}>

                        </div>
                    </div>
                </label>
            </div>
        )
    }


}

export default Skillbar
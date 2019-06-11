import React from "react"

class About extends React.Component{
    handleClick() {
        this.props.handleAdd()
    }

    render(){
        return (
            <div>
                <p>This is About</p>
                <button onClick={ () => this.handleClick() }>Sign In</button>
            </div>
        )
    }
}
export {About}
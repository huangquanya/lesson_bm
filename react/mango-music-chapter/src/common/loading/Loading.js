import React from "react";
import loading from './loading.gif'; //一切静态资源皆可引入webpack打包
import "./loading.styl"

class Loading extends React.Component {
    render() {
        // console.log(this.props.show);
        let displayStyle = this.props.show === true ? {display: ""} : { display: "none"}
        return (
            <div className="loading-container" style={displayStyle}>
                <div className="lading-wrapper">
                    <img src={loading} width="18px" height="18px"  alt="loading"/>
                </div>
                <div className="loading-title">{this.props.title}</div>
            </div>
        )
    }
}

export default Loading
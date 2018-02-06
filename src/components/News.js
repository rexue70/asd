import React, {Component} from 'react';


class MyBody extends Component {

    render() {
        return (
            <div className="forNewsAndEvents">
                <p className="TextWhile">{this.props.text}</p>
                {this.props.position === 0 ?
                    <img role="presentation" src="http://www.northeastern.edu/images/module/humanbond.jpg"
                         className="header"/>
                    : null}
            </div>
        )
    }
}


export default MyBody
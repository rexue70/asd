import React, {Component} from 'react';


class MyBottom extends Component {

    render() {
        return (
            <div className="forNewsAndEvents">
                <p className="TextWhile">EVENTS</p>
                {this.props.events.map(function (event,i) {
                    return <ul key={i} className="white">
                        {event.map(function (line, index) {
                            return <li key={index}>{line}</li>
                        })}
                    </ul>;
                })}
            </div>
        )
    }
}


export default MyBottom
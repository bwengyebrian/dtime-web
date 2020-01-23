import React, { Component } from 'react';
import Clock from 'react-live-clock';

class TimeReact extends Component{

    render(){
        return(
        <Clock  format={'HH:mm:ss'} ticking={true} timezone={'US/Central'} />
        )
    }
}
export default TimeReact;
import React, { Component } from 'react';
import { render } from '@testing-library/react';

class TimeComponent extends Component{
    state = {
        time: 'curr time'
    }
    // curreTime = ()=>{
    //     let time =  new Date().toLocaleDateString;
    //     //this.setState({time})
    // }
    getCurrTime = ()=>{
        return( new Date().toLocaleString())
    }
    componentDidMount(){
      let time =  this.getCurrTime();
      this.setState({time});
    }   
    render(){
        setInterval(()=>{
            let time =  this.getCurrTime();
            this.setState({time});
        },1000);
        //let date = this.curreTime();
        return(
            <React.Fragment>
                <h3>hello time{this.state.time}</h3>
            </React.Fragment>
        )
    }
    
}
export default TimeComponent;
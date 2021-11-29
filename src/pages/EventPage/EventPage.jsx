import React, { Component } from "react";


class EventPage extends Component {
    constructor(props) {
      super(props);
      this.state = { 

       };
    }



    render(){ 
        console.log('eventpage', this.props.events)
        const event = this.props.events[0]
     return (
        <div>
            <h1>Event name: {event.name}</h1>
            <h1>Date :  {event.date}</h1> 
            <h1>Price : CAD  {event.price}</h1> 
         </div>
     )
    } 
}


export default EventPage
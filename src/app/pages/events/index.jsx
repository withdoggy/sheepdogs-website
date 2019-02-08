import React, { Component } from 'react';
import CalendarComponent from '../../components/Calendar';
import { fetchEvents } from '../../api/events';
export default class EventsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
    };
  }
  componentDidMount() {
    fetchEvents().then(events => {
      this.setState({ events });
    });
  }
  render() {
    return <CalendarComponent events={this.state.events} />;
  }
}

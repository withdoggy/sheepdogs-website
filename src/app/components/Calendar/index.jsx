import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/pl';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar';
import PropTypes from 'prop-types';
moment.locale('pl-PL');
const localizer = BigCalendar.momentLocalizer(moment);
export default class CalendarComponent extends Component {
  render() {
    const data = this.props.events;
    return (
      <>
        <BigCalendar
          localizer={localizer}
          defaultView={BigCalendar.Views.AGENDA}
          events={data}
          startAccessor="start"
          endAccessor="end"
        />
      </>
    );
  }
}

CalendarComponent.propTypes = {
  events: PropTypes.array.isRequired,
};

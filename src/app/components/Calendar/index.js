import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/pl';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import BigCalendar from 'react-big-calendar'
moment.locale('pl-PL');
const localizer = BigCalendar.momentLocalizer(moment)
export default class CalendarComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [
                {
                    id: 1,
                    title: 'Trening wiosenny',
                    schedule: [
                        {
                            allDay: true,
                            start: new Date(2019, 2, 2),
                            end: new Date(2019, 2, 2),
                            location: "Stare Chrapowo"
                        },
                        {
                            allDay: true,
                            start: new Date(2019, 2, 3),
                            end: new Date(2019, 2, 3),
                            location: "Stare Chrapowo"
                        }

                    ]

                },
                {
                    id: 2,
                    title: 'Haczrange',
                    schedule: [
                        {
                            allDay: false,
                            start: new Date(2019, 2, 22,9,0),
                            end: new Date(2019, 2, 22,15,0),
                            location: "Pyskowice"
                        }

                    ]
                },
                {
                    id: 3,
                    title: 'Kotla tour',
                    schedule: [
                        {
                            allDay: true,
                            start: new Date(2019, 2, 6),
                            end: new Date(2019, 2, 6),
                            location: "Ksiegielnice"
                        },
                        {
                            allDay: true,
                            start: new Date(2019, 2, 7),
                            end: new Date(2019, 2, 7),
                            location: "Kotla"
                        }

                    ]
                },
            ]
        };
      }
      renderEvents(){
          let events =[];
          let c = 0;
          this.state.events.forEach(
              function(data,index){
                return data.schedule.forEach(
                    function(s,i){
                      c++;
                      events.push({id: c, title: data.title,start: s.start, end: s.end, allDay: s.allDay, url: data.id, location: s.location})

                    }
                )
            }
          )

        return events;

      }
      render() {
        const data = this.renderEvents()
        return (
            <BigCalendar
            localizer={localizer}
            defaultView={BigCalendar.Views.WEEK}
            events={data}
            startAccessor="start"
            endAccessor="end"
            />
        )
      }
}

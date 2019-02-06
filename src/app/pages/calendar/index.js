import React, { Component } from 'react'
import CalendarComponent  from '../../components/Calendar';
import PageLayout from '../../layout';
export default class CalendarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            events: [
                {
                    id: 0,
                    title: 'Trening wiosenny',
                    allDay: true,
                    start: new Date(2019, 3, 2),
                    end: new Date(2019, 3, 3),
                },
            ]
        };
      }
      render() {
        return (
            <PageLayout>
              <div className="events">
                  <CalendarComponent/>
              </div>
            </PageLayout>
        )
      }
}

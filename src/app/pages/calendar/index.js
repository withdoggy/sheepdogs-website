import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
const localizer = BigCalendar.momentLocalizer(moment)
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
        <div className="calendar">
            <Header/>
            <Container fluid>
                <Row>
                    <Col>
                        <div>
                            <BigCalendar
                                localizer={localizer}
                                defaultView={BigCalendar.Views.MONTH}
                                events={this.state.events}
                                startAccessor="start"
                                endAccessor="end"
                                />
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    )
  }
}

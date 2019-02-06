import React, { Component } from 'react'
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Row, Col } from "antd";
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
                <Row>
                    <Col>
                        <div>

                        </div>
                    </Col>
                </Row>
            <Footer/>
        </div>
    )
  }
}

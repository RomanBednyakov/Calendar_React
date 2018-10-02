import React from 'react';
import { connect } from 'react-redux';
import BigCalendar from 'react-big-calendar';
import moment from 'moment';
import { getMonthCalendar, getDateCalendar } from '../../redux/action/calendar';
import './app.scss';
import Basic from './supCalendar/basic';

const localizer = BigCalendar.momentLocalizer(moment);

const mapStateToProps = ({ calendar }) => ({
  calendar,
});
const mapDispatchToProps = dispatch => ({
  getMonthCalendar: () => dispatch(getMonthCalendar()),
  getDateCalendar: () => dispatch(getDateCalendar()),
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eventMonth: [],
      // eventDay: [],
    };
    this.filterEnvet = [];
  }

  componentDidMount() {
    this.props.getMonthCalendar();
  }
  getOnView = (e) => {
    console.log('getOnView', e);
  };
  getOnNavigate = (date) => {
    console.log('getOnNavigate', date.getFullYear());
    console.log('getOnNavigate', date.getMonth());
  };

  changeMonthState = (event) => {
    // console.log('@', 111);
    // const event2 = {
    //   id: 1,
    //   title: 'Long Event',
    //   start: new Date(2018, 0, 4),
    //   end: new Date(2018, 0, 6),
    // };
    // this.filterEnvet = events;
    // console.log('@', event);
    const arr = [];
    const regExp = /\(([^)]+)\)/;
    event.forEach((item) => {
      const matches = regExp.exec(item.endDate);
      const matchesStart = regExp.exec(item.startDate);
      const newEvent = {};
      newEvent.title = item.eventName;
      newEvent.start = new Date(Number(matchesStart[1]));
      newEvent.end = new Date(Number(matches[1]));
      arr.push(newEvent);
    });
    this.filterEnvet = arr;
  };

  toogleStateReduxDate = () => {
    this.props.getDateCalendar();
  };

  render() {
    if (this.props.calendar.getEventMonthCalendar.length > 0) {
      this.changeMonthState(this.props.calendar.getEventMonthCalendar);
    }
    if (this.props.calendar.getEventDateCalendar.length > 0) {
      this.changeMonthState(this.props.calendar.getEventDateCalendar);
    }
    return (
      <div className="app-wrapper">
        <Basic
          events={this.filterEnvet}
          onNavigate={this.getOnNavigate}
          onView={this.getOnView}
          localizer={localizer}
        />
      </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);

import React from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import events from './events';
import './basic.scss';

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
const Basic = ({
  localizer, events, onView, onNavigate,
}) => (
  <div className="app-calendar animated slideInUpTiny animation-duration-3">
    <BigCalendar
      events={events}
      step={60}
      views={allViews}
      showMultiDayTimes
      defaultDate={new Date(2018, 0, 20)}
      localizer={localizer}
      onView={onView}
      onNavigate={onNavigate}
    />
  </div>
);

export default Basic;

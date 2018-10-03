import React from 'react';
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.scss';

const allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k]);
const Basic = ({
  localizer, events, onNavigate, onSelectEvent,
}) => (
  <div className="app-calendar animated slideInUpTiny animation-duration-3">
    <BigCalendar
      events={events}
      step={60}
      views={allViews}
      showMultiDayTimes
      defaultDate={new Date(2018, 0)}
      localizer={localizer}
      onNavigate={onNavigate}
      onSelectEvent={onSelectEvent}
    />
  </div>
);

export default Basic;

import { GET_MONTH_CALENDAR, GET_DATE_CALENDAR } from '../../constants/ActionTypes';

const initial =
  {
    getEventDateCalendar: [],
    getEventMonthCalendar: [],
  };

const calendar = (state = initial, action) => {
  const { data } = action;
  switch (action.type) {
    case GET_MONTH_CALENDAR:
      return {
        ...state,
        getEventMonthCalendar: data,
      };
    case GET_DATE_CALENDAR:
      return {
        ...state,
        getEventDateCalendar: data,
      };
    default:
      return state;
  }
};
export default calendar;
